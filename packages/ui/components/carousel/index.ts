import Carousel from "./src/index.vue";

Carousel.install = app => {
  app.component(Carousel.name, Carousel);
};
export const YuCarousel = Carousel;
export default Carousel;
