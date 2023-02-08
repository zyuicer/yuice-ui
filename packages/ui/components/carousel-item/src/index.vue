<template>
  <Transition v-if="isStart" :name="transitionName">
    <div
      v-show="isShow"
      class="yu-carousel-item"
      ref="carouselItemRef"
      :style="[transitionStyle]"
    >
      <slot />
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { Ref, computed, inject, ref, watch } from "vue";
import { COMPONENT_NAME } from "./use-carousel-item";
import { CAROUSEL_PROVIDE_KEY } from "shared";
import { CarouselTransitionMark } from "@ui/types/carsouel.type";
import { createCustomizeStyle } from "@ui/utils/line-style-flag";
// console.log(getCurrentInstance());

const carouselMark = ref<CarouselTransitionMark>({
  flag: false
});
const isShow = computed(() => carouselMark.value.flag);

const { addItem, isNext, isStart, transitionInterval } = inject(
  CAROUSEL_PROVIDE_KEY
) as {
  addItem: (carouselMark: Ref<CarouselTransitionMark>) => void;
  isNext: Ref<boolean>;
  isStart: Ref<boolean>;
  transitionInterval: Ref<string>;
};
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

addItem(carouselMark);

defineOptions({
  name: COMPONENT_NAME
});
</script>
