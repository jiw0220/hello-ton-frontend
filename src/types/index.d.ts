/// <reference types="vite/client" />

declare interface Window {
  $loadingBar: any;
  Telegram: any;
  DeviceMotionEvent: Window.DeviceMotionEvent & {
    requestPermission(): Promise<'granted' | 'denied'>;
  };
}

declare type Resp = {
  _result: number;
  _desc?: string;
  data?: any;
  err?: any;
  [k: string]: any;
};
