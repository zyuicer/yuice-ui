import Switch from "./src/index.vue";

Switch.install = function (app) {
  app.component(Switch.name, Switch);
};
export const YuSwitch = Switch;
export default Switch;
