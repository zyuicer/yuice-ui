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
import { COMPONENT_NAME, useCarouselItem } from "./use-carousel-item";
defineOptions({
  name: COMPONENT_NAME
});
const { isShow, isStart, transitionName, transitionStyle } = useCarouselItem();
</script>
