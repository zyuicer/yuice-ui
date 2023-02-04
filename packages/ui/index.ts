import * as components from "./components";
export * from "./components";

const Api = {
  install(app) {
    Object.keys(components).forEach(key => {
      const component = components[key];
      app.component(component.name || key, component);
    });
  },
  version: "1.0.0",
  ...components
};
export default Api;
