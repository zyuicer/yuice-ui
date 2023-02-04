import CarouselItem from "./src/index.vue";

CarouselItem.install = app => {
  app.component(CarouselItem.name, CarouselItem);
};
export const YuCarouselItem = CarouselItem;
export default CarouselItem;
