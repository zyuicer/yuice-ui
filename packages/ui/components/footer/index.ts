import Footer from "./src/index.vue";
Footer.install = function (app) {
  app.component(Footer.name, Footer);
};
export const YuFooter = Footer;
export default Footer;
