import Header from "./src/index.vue";

Header.install = function (app) {
  app.component(Header.name, Header);
};
export const YuHeader = Header;
export default Header;
