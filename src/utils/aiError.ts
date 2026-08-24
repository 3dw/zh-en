/**
 * aiError.ts — AI 後端配額錯誤的統一處理工具
 *
 * 後端在日用量達上限時回傳 HTTP 429，body 格式：
 *   { code: "AI_DAILY_LIMIT_EXCEEDED", error: "...", retryAfterSeconds: 12345, status: 429, success: false }
 *
 * 本模組提供：
 *   - parseAiFetchError   — 從 fetch Response 解析 429 body（async）
 *   - parseAxiosAiError   — 從 axios 錯誤解析 429 body（sync）
 *   - formatRetryAfter    — 將秒數格式化為繁體中文可讀提示
 *   - notifyAiError       — 以 q-notify 顯示配額錯誤
 *   - notifyGenericError  — 以 q-notify 顯示一般後端錯誤
 *   - QuotaError          — 自訂例外類別，供已在拋出前 notify 的場景避免重複通知
 */

import type { QVueGlobals } from 'quasar'

// ── 型別 ──────────────────────────────────────────────────────────────────────

/** 後端 429 錯誤回應的 JSON 格式（欄位皆可能缺失） */
interface BackendErrorBody {
  code?: string
  error?: string
  retryAfterSeconds?: unknown
  status?: number
  success?: boolean
}

// ── 自訂例外 ──────────────────────────────────────────────────────────────────

/**
 * 代表 AI 配額超限的例外。
 * 當拋出前已呼叫 notifyAiError 時，catch 區塊可檢查此型別以避免重複通知。
 */
export class QuotaError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'QuotaError'
  }
}

// ── 私有輔助 ──────────────────────────────────────────────────────────────────

/** 從任意值安全地取出 BackendErrorBody 物件（不丟例外） */
function safeExtractBody(raw: unknown): BackendErrorBody {
  if (raw !== null && typeof raw === 'object') return raw as BackendErrorBody
  return {}
}

// ── 解析函式 ──────────────────────────────────────────────────────────────────

/**
 * 從 fetch Response 解析 AI 配額錯誤。
 * 只在 response.ok 為 false 時呼叫。
 *
 * - status 429 → 嘗試解析 JSON body，回傳 body 物件（body 非 JSON 時回傳空物件）
 * - 其他狀態碼 → 回傳 null，表示非配額錯誤
 *
 * 不會丟出例外。
 */
export async function parseAiFetchError(response: Response): Promise<BackendErrorBody | null> {
  if (response.status !== 429) return null
  try {
    const raw: unknown = await response.json()
    return safeExtractBody(raw)
  } catch {
    // body 不是有效 JSON（例如 edge proxy 回傳 HTML）
    return {}
  }
}

/**
 * 從 axios 錯誤物件解析 AI 配額錯誤（在 catch 區塊中呼叫）。
 *
 * - error.response.status === 429 → 回傳解析後的 body 物件
 * - 其他情況（網路錯誤、非 429）→ 回傳 null
 *
 * 不會丟出例外。
 */
export function parseAxiosAiError(error: unknown): BackendErrorBody | null {
  if (error === null || typeof error !== 'object') return null
  const e = error as { response?: { status?: unknown; data?: unknown } }
  if (!e.response || e.response.status !== 429) return null
  return safeExtractBody(e.response.data)
}

// ── 格式化 ────────────────────────────────────────────────────────────────────

/**
 * 將秒數格式化為繁體中文可讀的重試提示。
 * 處理以下情況：
 *   - 非數字、無限、負數、零 → 空字串
 *   - < 60s → 「約 N 秒後可再試」
 *   - < 1h  → 「約 N 分鐘後可再試」
 *   - >= 1h → 「約 N 小時 M 分鐘後可再試」（整點時省略分鐘）
 */
export function formatRetryAfter(seconds: unknown): string {
  if (typeof seconds !== 'number' || !isFinite(seconds) || seconds <= 0) return ''
  const s = Math.round(seconds)
  if (s < 60) return `約 ${s} 秒後可再試`
  const m = Math.floor(s / 60)
  if (m < 60) return `約 ${m} 分鐘後可再試`
  const h = Math.floor(m / 60)
  const rm = m % 60
  return rm > 0 ? `約 ${h} 小時 ${rm} 分鐘後可再試` : `約 ${h} 小時後可再試`
}

// ── 通知函式 ──────────────────────────────────────────────────────────────────

/**
 * 以 q-notify 顯示 AI 配額錯誤。
 * 主訊息取自 body.error（後備為固定中文提示），
 * caption 為格式化後的重試等待時間（無時省略）。
 */
export function notifyAiError($q: QVueGlobals, body: BackendErrorBody): void {
  const message =
    typeof body.error === 'string' && body.error.trim()
      ? body.error.trim()
      : '今日 AI 用量已達上限，請明天再試'
  const caption = formatRetryAfter(body.retryAfterSeconds)
  // exactOptionalPropertyTypes: true 不允許明確傳入 undefined，
  // 以 spread 條件式附加 caption 避免型別錯誤
  $q.notify({ type: 'negative', message, ...(caption ? { caption } : {}), timeout: 8000 })
}

/**
 * 以 q-notify 顯示一般後端錯誤（網路失敗、5xx 等非配額情況）。
 */
export function notifyGenericError($q: QVueGlobals, message?: string): void {
  $q.notify({
    type: 'negative',
    message: message ?? '操作失敗，請稍後再試',
  })
}
