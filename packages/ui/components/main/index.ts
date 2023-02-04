import Main from "./src/index.vue";

Main.install = function (app) {
  app.component(Main.name, Main);
};
export const YuMain = Main;
export default Main;
