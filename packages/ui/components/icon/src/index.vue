<template>
  <div class="yu-icon" :style="{ width: sizeVal, height: sizeVal }">
    <slot> </slot>
  </div>
</template>
<script setup lang="ts">
import { COMPONENT_NAME, useIcon } from "./use-icon";
import { IconProps, iconProps } from "./icon";
import { computed, onMounted } from "vue";
import { convertStringToNumber } from "@ui/utils/convertNumbeWithString";
defineOptions({
  name: COMPONENT_NAME
});
const props = defineProps(iconProps);
const colorVal = computed(() => (props.color ? props.color : ""));
const sizeVal = props.size ? convertStringToNumber(props.size, "px") : "";
const newPrps: IconProps = {
  size: sizeVal,
  color: colorVal.value
};

useIcon(newPrps);
</script>
