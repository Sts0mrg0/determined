/* eslint-disable */
/// <reference types="react-scripts" />
/// <reference path="types.ts" />

declare namespace NodeJS {
  export interface ProcessEnv {
    IS_DEV: boolean;
    VERSION: string;
    SERVER_ADDRESS?: string;
  }
}

export declare global {
  interface Window {
    analytics: any;
    dev: any;
  }
}
