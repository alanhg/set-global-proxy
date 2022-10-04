export interface ProxyOptions {
  host: string;
  port: number;
  bypass?: string;
  sudo?: boolean;
}

export function enableProxy(options: ProxyOptions): boolean;

export function disableProxy(sudo?: boolean): boolean;

export function getCurProxy(): {
  http: {
    enabled: boolean,
    host: string,
    port: string
  },
  https: {
    enabled: boolean,
    host: string,
    port: string
  }
}
