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
  switchActiveClass,
  switchActionClass,
  switchDisabledClass,
  switchSizeStyle,
  innerText,
  switchLineStyle,
  handleUpdateSwitchChange
} = useSwitch(props, emits);
</script>
<template>
  <div class="yu-switch" :class="[switchSizeStyle, switchDisabledClass]">
    <span
      class="yu-switch__label yu-switch__label__left"
      :class="{ close: !modelValue }"
      @click="handleUpdateSwitchChange"
      v-if="activeText && !inlinePrompt"
    >
      <span>{{ activeText }}</span>
    </span>
    <span
      class="yu-switch__core"
      :style="switchLineStyle"
      :class="[switchActiveClass]"
      @click="handleUpdateSwitchChange"
    >
      <div
        class="yu-switch__inner"
        :class="switchActionClass"
        v-if="inlinePrompt"
      >
        <span>{{ innerText }}</span>
      </div>
      <div class="yu-switch__action" :class="switchActionClass"></div>
    </span>
    <span
      class="yu-switch__label yu-switch__label__right"
      :class="{ open: modelValue }"
      @click="handleUpdateSwitchChange"
      v-if="inactiveText && !inlinePrompt"
    >
      <span>{{ inactiveText }}</span>
    </span>
  </div>
</template>
