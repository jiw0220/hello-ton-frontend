/// <reference types="vite/client" />

// declare module '*.vue' {
//   import { DefineComponent } from 'vue';
//   const component: DefineComponent<{}, {}, any>;
//   export default component;
// }

declare module '*.png';
declare module '*.svg';
declare module '*.jpg';

declare interface Window {
  $loadingBar: any;
  createOjcectURL?: (file: File) => string;
}

type Resp = {
  _result: number;
  _desc?: string;
  data?: any;
  err?: any;
  [k: string]: any;
};
