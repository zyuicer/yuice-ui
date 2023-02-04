import Aside from "./src/index.vue";

Aside.install = function (app) {
  app.component(Aside.name, Aside);
};
export const YuAside = Aside;
export default Aside;
