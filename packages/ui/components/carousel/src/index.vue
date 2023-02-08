<template>
  <div
    class="yu-carousel"
    :style="[yuTransitionInterval, lineStyle]"
    @mouseenter.stop="containerEnter"
    @mouseleave.stop="containerLeave"
  >
    <Transition v-if="arrowDisplay" name="carousel-arrow-left">
      <button
        v-show="
          (props.arrow === 'always' || hover) &&
          (props.loop || activeIndex > 0) &&
          markList.length > 1
        "
        @click="preClick"
        class="yu-carousel__arrow yu-carousel__arrow--left"
        type="button"
      >
        <YuIcon size="24px" color="#fff">
          <ArrowLeft />
        </YuIcon>
      </button>
    </Transition>
    <Transition v-if="arrowDisplay" name="carousel-arrow-right">
      <button
        v-show="
          (props.arrow === 'always' || hover) &&
          (props.loop || activeIndex < markList.length - 1) &&
          markList.length > 1
        "
        @click="nextClick"
        class="yu-carousel__arrow yu-carousel__arrow--right"
        type="button"
      >
        <YuIcon size="24px" color="#fff">
          <ArrowRight />
        </YuIcon>
      </button>
    </Transition>
    <!-- items -->
    <slot></slot>
    <template v-if="indicatorPositionClass === 'yu-indicator-list'">
      <ul :class="indicatorPositionClass">
        <template v-for="(item, index) in markList" :key="index">
          <li
            @mouseenter.stop="hoverOrClickIndicator(index)"
            class="yu-indicator-item"
          >
            <i
              :class="{ active: activeIndex === index }"
              class="yu-carousel__button"
            ></i>
          </li>
        </template>
      </ul>
    </template>
  </div>
  <template v-if="indicatorPositionClass === 'yu-indicator-list-outside'">
    <ul :class="indicatorPositionClass">
      <template v-for="(item, index) in markList" :key="index">
        <li
          @mouseenter.stop="hoverOrClickIndicator(index)"
          class="yu-indicator-item"
        >
          <i
            :class="{ active: activeIndex === index }"
            class="yu-carousel__button"
          ></i>
        </li>
      </template>
    </ul>
  </template>
</template>
<script setup lang="ts">
// core
import { computed, useSlots } from "vue";
import type { CSSProperties } from "vue";
import { carouselProps, carouselEmits, COMPONENT_NAME } from "./carousel";
import { createCustomizeStyle } from "../../../utils/line-style-flag";
import { useCarousel } from "./use-carousel";
import { YuIcon } from "@ui/components/icon";
import ArrowLeft from "@yu-icon/arrowLeft";
import ArrowRight from "@yu-icon/arrowRight";
defineOptions({
  name: COMPONENT_NAME
});

// props
const props = defineProps(carouselProps);
const emit = defineEmits(carouselEmits);
const defaultFn = useSlots().default;

const {
  activeIndex,
  arrowDisplay,
  hover,
  markList,
  indicatorPositionClass,
  preClick,
  nextClick,
  containerEnter,
  hoverOrClickIndicator,
  containerLeave
} = useCarousel(props, emit, defaultFn!(), "YuCarouselItem");

const yuTransitionInterval = createCustomizeStyle(
  "carousel",
  "transition",
  props.interval
);

const lineStyle = computed(
  (): CSSProperties => ({
    height: props.height
  })
);
</script>
