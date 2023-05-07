declare namespace NodeJS {
  interface ProcessEnv {
    /** Qiita アクセストークン */
    readonly QIITA_TOKEN: string;
  }
}
