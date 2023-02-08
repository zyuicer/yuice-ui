<template>
  <div class="yu-icon" :style="{ width: sizeVal, height: sizeVal }">
    <slot> </slot>
  </div>
</template>
<script setup lang="ts">
import { COMPONENT_NAME, useIcon } from "./use-icon";
import { IconProps, iconProps } from "./icon";
import { computed, onMounted } from "vue";
defineOptions({
  name: COMPONENT_NAME
});
const props = defineProps(iconProps);
const colorVal = computed(() => (props.color ? props.color : ""));
const sizeVal = computed(() => {
  const type = typeof props.size;
  let size = props.size;
  if (!size) {
    return "";
  } else {
    if (type === "number") {
      return `${size}px`;
    } else {
      return size;
    }
  }
});
const newPrps: IconProps = {
  size: sizeVal.value,
  color: colorVal.value
};
onMounted(() => {
  console.log("icon");
});
useIcon(newPrps);
</script>
