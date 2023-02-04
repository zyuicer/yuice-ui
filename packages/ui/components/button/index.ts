import Button from "./src/index.vue";

Button.install = function (app) {
  app.component("YuButton", Button);
};
export const YuButton = Button;
export default Button;
