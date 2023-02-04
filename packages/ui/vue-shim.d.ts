/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.ts";
declare const defineOptions: (options: { name: string }) => any;

declare module "*.tsx" {
  import type { App } from "vue";
  interface ITsxComponent {
    (): any;
    install: (app: App) => any;
  }
  const tsxComponent: ITsxComponent;
  export default tsxComponent;
}
