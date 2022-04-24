/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.js'

declare module 'vue-cookie'

declare interface Window {
  LWWebviewChannel: any;
  EVWebviewChannel: any;
  FPWebviewChannel: any;
  renewSuccess: any;
  callBackCSASwapToken: any;
}