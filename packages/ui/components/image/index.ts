import Image from "./src/index.vue";

Image.install = function (app) {
  app.component(Image.name, Image);
};
export const YuImage = Image;
export default Image;
