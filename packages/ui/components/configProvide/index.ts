import ConfigProvide from "./src/index.vue";

ConfigProvide.install = function (app) {
  app.component(ConfigProvide.name, ConfigProvide);
};
export const YuConfigProvide = ConfigProvide;
export default ConfigProvide;
