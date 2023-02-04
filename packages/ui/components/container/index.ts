import Container from "./src/index";

Container.install = function (app) {
  app.component(Container.name, Container);
};
export const YuContainer = Container;
export default Container;
