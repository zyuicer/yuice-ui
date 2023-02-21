<script setup lang="ts">
import { CSSProperties, computed, onMounted, ref } from "vue";
import { COMPONENT_NAME, messageProps } from "./message";
import { useTimeoutFn, useResizeObserver } from "@vueuse/core";
defineOptions({
  name: COMPONENT_NAME
});
const props = defineProps(messageProps);
const visiable = ref(false);
const messageRef = ref<HTMLDivElement>();
const height = ref(0);
let stopTimer: (() => void) | undefined = undefined;
const lineStyle = computed<CSSProperties>(() => {
  return {
    top: `${props.offset}px`
  };
});
// 开始结束倒计时
function startTimer() {
  if (props.duration === 0) return;
  ({ stop: stopTimer } = useTimeoutFn(() => {
    close();
  }, props.duration));
}
// 请吃 setTimer 的异步函数
function clearTimer() {
  stopTimer?.();
}
const close = () => {
  visiable.value = false;
};
const button = computed(() => props.offset + height.value);

onMounted(() => {
  visiable.value = true;
  startTimer();
});

// 获取当前元素的高度
useResizeObserver(messageRef, () => {
  height.value = messageRef.value!.getBoundingClientRect()!.height;
});
defineExpose({
  visiable,
  button
});
</script>
<template>
  <transition name="yu-message-transition" @before-leave="onClose">
    <div
      class="yu-message yu-message-info"
      :style="lineStyle"
      v-show="visiable"
      ref="messageRef"
    >
      <slot
        ><p>{{ message }}</p></slot
      >
    </div>
  </transition>
</template>
