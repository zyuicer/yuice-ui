import Col from "./src/index.vue";

Col.install = function (app) {
  app.component(Col.name, Col);
};
export const YuCol = Col;
export default Col;
