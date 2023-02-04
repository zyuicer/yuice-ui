<!-- <template>
  <div class="yu-carousel" :style="[yuTransitionInterval, lineStyle]">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
// core
import { computed } from "vue";
import type { CSSProperties } from "vue";
import { carouselProps, carouselEmits } from "./carousel";
import { createCustomizeStyle } from "../../../utils/line-style-flag";
import { useCarousel } from "./use-carousel";
const COMPONENT_NAME = "YuCarousel";
defineOptions({
  name: "YuCarousel"
});

// props
const props = defineProps(carouselProps);
const emit = defineEmits(carouselEmits);

const { activeIndex } = useCarousel(props, emit, "YuCarousel");

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
</script> -->
<template>
  <div></div>
</template>
<script setup lang="ts">
defineOptions({
  name: "YuCarousel"
});
</script>

<style scoped lang="less"></style>
