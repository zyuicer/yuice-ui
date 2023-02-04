import { isNumberEvery } from "@/utils/verify-type";
import { SetupContext, computed, provide, ref, unref } from "vue";
import { CarouselEmitsType, CarouselPropsType } from "./carousel";

// hooks
export function useCarousel(
  props: CarouselPropsType,
  emit: SetupContext<CarouselEmitsType>["emit"],
  componentName: string
) {
  // refs
  // 活跃的 图片index
  const activeIndex = ref<number>(-1);
  // 记录执行切图的时间
  const timer = ref<ReturnType<typeof setInterval> | null>(null);
  // 判断是否为触发或者点击事件
  const hover = ref<boolean>(false);

  // computed
  const arrowDisplay = computed(() => {
    return props.arrow !== "never" && !unref(isVertical);
  });

  const isVertical = computed(() => props.direction === "vertical");
  const isCardType = computed(() => props.type === "card");

  provide(componentName);
  return {
    activeIndex,
    timer,
    hover
  };
}
