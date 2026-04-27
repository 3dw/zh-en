declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string
      VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined
      VUE_ROUTER_BASE: string | undefined
    }
  }

  interface Window {
    __zhEnSpeechPatched?: boolean
    __zhEnSpeechRate?: number
  }

  interface SpeechSynthesisUtterance {
    __zhEnSpeechRateApplied?: boolean
  }
}

export {}
