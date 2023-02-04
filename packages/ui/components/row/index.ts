import Row from "./src/index.vue";

Row.install = function (app) {
  app.component(Row.name, Row);
};
export const YuRow = Row;
export default Row;
