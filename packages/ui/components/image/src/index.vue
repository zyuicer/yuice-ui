<template>
  <div class="yu-image">
    <img class="yu-image__inner" :src="src" :style="styleLine" />
  </div>
</template>
<script setup lang="ts">
import { CSSProperties, computed } from "vue";
import { imageProps } from "./image";
const props = defineProps(imageProps);

const styleLine = computed((): CSSProperties => {
  return {
    objectFit: props.fit
  };
});
</script>

<style scoped lang="less"></style>
