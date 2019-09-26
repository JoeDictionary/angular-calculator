declare module 'host' {
    export interface Host {
      protocol?: string;
      hostname?: string;
      pathname?: string;
    }
    export function parse(url: string, queryString?: string): Host;
  }

// declare var MathQuill: any;  <-- not needed for Mathquill to work