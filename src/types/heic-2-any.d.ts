declare module 'heic-2-any' {
  interface HeicOptions {
    blob: Blob | Buffer
    toType?: string
    quality?: number
  }

  function convert(options: HeicOptions): Promise<Blob | Blob[]>
  export default convert
}
