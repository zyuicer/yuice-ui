import { Ref, computed, inject, ref, watch } from "vue";
import { CAROUSEL_PROVIDE_KEY } from "shared";
import { CarouselTransitionMark } from "@ui/types/carsouel.type";
import { createCustomizeStyle } from "@ui/utils/lineStyleFlag";

export const COMPONENT_NAME = "YuCarouselItem";
interface CarouselProvide {
  addMarkItem: (carouselMark: Ref<CarouselTransitionMark>) => void;
  isNext: Ref<boolean>;
  isStart: Ref<boolean>;
  transitionInterval: Ref<string>;
}
export const useCarouselItem = () => {
  const carouselMark = ref<CarouselTransitionMark>({
    flag: false
  });
  const isShow = computed(() => carouselMark.value.flag);

  const { addMarkItem, isNext, isStart, transitionInterval } = inject(
    CAROUSEL_PROVIDE_KEY
  ) as CarouselProvide;

  const transitionName = computed(() => {
    return isNext.value ? "carousel-item-next" : "carousel-item-pre";
  });

  const transitionStyle = computed(() => {
    return createCustomizeStyle(
      "carousel-item",
      "transition",
      transitionInterval.value
    );
  });

  addMarkItem(carouselMark);

  return {
    isStart,
    isShow,
    transitionName,
    transitionStyle
  };
};
