import Alert from "./src/index.vue";

Alert.install = function (app) {
  app.component(Alert.name, Alert);
};
export const YuAlert = Alert;
export default Alert;
