<script setup lang="ts">
import { CSSProperties, computed, onMounted, ref } from "vue";
import { COMPONENT_NAME, messageProps } from "./message";
import { getLastOffset, getOffsetOrSpace } from "./instance";
import { useTimeoutFn, useResizeObserver } from "@vueuse/core";
import { emit } from "process";
defineOptions({
  name: COMPONENT_NAME
});
const props = defineProps(messageProps);
const visiable = ref(false);
const messageRef = ref<HTMLDivElement>();
const height = ref(0);
const lastOffset = computed(() => {
  return getLastOffset(props.id);
});
const offset = computed(() => {
  return getOffsetOrSpace(props.id, props.offset) + lastOffset.value;
});

const button = computed(() => {
  return offset.value + height.value;
});
let stopTimer: (() => void) | undefined = undefined;

const lineStyle = computed<CSSProperties>(() => {
  return {
    top: `${offset.value}px`
  };
});
// 开始结束倒计时
function startTimer() {
  if (props.duration === 0) return;
  ({ stop: stopTimer } = useTimeoutFn(() => {
    close();
  }, props.duration));
}
// 清除 setTimer 的异步函数
function clearTimer() {
  stopTimer?.();
}
const close = () => {
  visiable.value = false;
};
// 获取当前元素的高度
let index = 0;
useResizeObserver(messageRef, () => {
  height.value = messageRef.value!.getBoundingClientRect()!.height;
});
onMounted(() => {
  startTimer();
  visiable.value = true;
});

defineExpose({
  visiable,
  button
});
</script>
<template>
  <transition
    name="yu-message-transition"
    @before-leave="onClose"
    @after-leave="() => $emit('destroy')"
  >
    <div
      :id="id"
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
