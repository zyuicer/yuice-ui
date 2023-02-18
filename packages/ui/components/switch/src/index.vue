<script setup lang="ts">
import { COMPONENT_NAME, switchEmits } from "./switch";
import { switchProps } from "./switch";
import { useSwitch } from "./use-switch";
defineOptions({
  name: COMPONENT_NAME
});
const props = defineProps(switchProps);
const emits = defineEmits(switchEmits);
const {
  handleUpdateSwitchChange,
  switchActiveClass,
  switchActionClass,
  switchSizeStyle
} = useSwitch(props, emits);
</script>
<template>
  <div
    class="yu-switch"
    :class="switchSizeStyle"
    @click="handleUpdateSwitchChange"
  >
    <span class="yu-switch__core" :class="switchActiveClass">
      <div class="yu-switch__action" :class="switchActionClass"></div>
    </span>
  </div>
</template>
