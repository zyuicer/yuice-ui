import {
  SetupContext,
  computed,
  ref,
  unref,
  useSlots,
  Component,
  getCurrentInstance,
  VNode,
  VNodeNormalizedChildren,
  isVNode,
  provide,
  ComponentInternalInstance,
  Ref,
  CSSProperties,
  RendererNode,
  RendererElement
} from "vue";
import { CarouselEmitsType, CarouselPropsType } from "./carousel";
import { CAROUSEL_PROVIDE_KEY } from "shared";
import { CarouselTransitionMark } from "@ui/types/carsouel.type";
import { debounce } from "shared/help/debounce";
import { throttle } from "shared/help/throttle";

// hooks
export function useCarousel(
  props: CarouselPropsType,
  emit: SetupContext<CarouselEmitsType>["emit"],
  slots: VNode<
    RendererNode,
    RendererElement,
    {
      [key: string]: any;
    }
  >[],
  componentName: string
) {
  // refs
  // 活跃的 图片index
  const activeIndex = ref<number>(0);
  // 记录执行切图的时间
  const timer = ref<ReturnType<typeof setInterval> | null>(null);
  // 判断是否为触发或者点击事件
  const hover = ref<boolean>(false);
  // 所有的子元素标记
  const markList = ref<Ref<CarouselTransitionMark>[]>([]);
  // 上一个 显示的 元素标记
  const oldItem = ref<Ref<CarouselTransitionMark>>();
  // 控制运动轨迹
  const isNext = ref<boolean>(true);
  // 判断子元素是否全部加载完成
  const isStart = ref<boolean>(false);

  const transitionInterval = ref<string>("0.35s");
  // computed
  const arrowDisplay = computed(() => {
    return props.arrow !== "never" && !unref(isVertical);
  });
  const indicatorPositionClass = computed(() => {
    switch (props.indicatorPosition) {
      case "outside":
        return "yu-indicator-list-outside";
      case "none":
        return "yu-indicator-list-none";
      default:
        return "yu-indicator-list";
    }
  });
  const slotsLength = computed(() => {
    if (slots && slots.length) {
      return slots.length;
    }
    return 0;
  });

  const isVertical = computed(() => props.direction === "vertical");
  const isCardType = computed(() => props.type === "card");
  const cutInterval = computed(() => {
    if (transitionInterval.value === "0.35s") return 350;
    if (transitionInterval.value === "0.2s") return 200;
    return 350;
  });
  // methods
  function setActiveItem(index: number) {
    const itemCount = markList.value.length;
    if (index < 0) {
      activeIndex.value = props.loop ? itemCount - 1 : 0;
    } else if (index >= itemCount) {
      activeIndex.value = props.loop ? 0 : itemCount - 1;
    } else {
      activeIndex.value = index;
    }
  }

  // 调用 添加元素标记
  function addItem(markFlag: Ref<CarouselTransitionMark>) {
    markList.value.push(markFlag);
    if (slotsLength.value && slotsLength.value === markList.value.length) {
      console.log("initial");
      activeIndex.value = props.initialIndex;
      const fistItem = markList.value[activeIndex.value];

      fistItem.value.flag = true;
      oldItem.value = fistItem;
      isStart.value = true;
      initialInterval();
    }
  }

  function initialInterval() {
    timer.value = setInterval(() => {
      console.log(activeIndex.value);

      nextClick();
    }, props.interval);
  }

  function stopInterval() {
    if (timer.value) clearInterval(timer.value);
    timer.value = null;
  }

  function containerHover() {
    if (arrowDisplay.value) hover.value = true;
    if (props.pauseOnHover) {
      stopInterval();
    }
  }

  function containerLeave() {
    if (arrowDisplay.value) hover.value = false;
    if (props.pauseOnHover) {
      initialInterval();
    }
  }

  function nextClick() {
    isNext.value = true;
    cutClick(activeIndex.value + 1);
  }
  function preClick() {
    isNext.value = false;
    cutClick(activeIndex.value - 1);
    console.log(markList.value);
  }
  const _nextClick = throttle(
    () => {
      transitionInterval.value = "0.35s";
      nextClick();
    },
    cutInterval.value,
    { leading: true }
  );
  const _preClick = throttle(
    () => {
      transitionInterval.value = "0.35s";
      preClick();
    },
    cutInterval.value,
    { leading: true }
  );
  function lazyNextClick() {
    _nextClick();
  }
  function lazyPreClick() {
    _preClick();
  }

  function cutClick(index: number) {
    setActiveItem(index);
    const currentItem = markList.value[activeIndex.value];
    if (oldItem.value) {
      oldItem.value.value.flag = false;
    }
    currentItem.value.flag = true;
    oldItem.value = currentItem;
  }

  function hoverOrClickIndicator(index: number) {
    containerHover();
    if (index > activeIndex.value) {
      nextClick();
    } else if (index < activeIndex.value) {
      preClick();
    }
  }

  provide(CAROUSEL_PROVIDE_KEY, {
    addItem,
    isNext,
    isStart,
    transitionInterval
  });
  return {
    activeIndex,
    timer,
    hover,
    markList,
    arrowDisplay,
    indicatorPositionClass,
    nextClick: lazyNextClick,
    preClick: lazyPreClick,
    containerHover,
    hoverOrClickIndicator,
    containerLeave
  };
}
