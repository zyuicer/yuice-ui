<script setup lang="ts">
import { CSSProperties, computed, onMounted, ref } from "vue";
import { COMPONENT_NAME, messageProps } from "./message";
import { getLastOffset, getOffsetOrSpace } from "./instance";
import { useTimeoutFn, useResizeObserver } from "@vueuse/core";
import { YuIcon } from "@ui/components/icon";
import InfoType from "@yu-icon/infoType";
import ErrorType from "@yu-icon/errorType";
import WarningType from "@yu-icon/warningType";
defineOptions({
  name: COMPONENT_NAME
});
const props = defineProps(messageProps);
const visiable = ref(false);
const messageRef = ref<HTMLDivElement>();
const height = ref(0);
const typeClass = computed(() => {
  const typeClass = "yu-message-" + (props.type ? props.type : "info)");
  return typeClass;
});
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
      class="yu-message"
      :class="typeClass"
      :style="lineStyle"
      v-show="visiable"
      ref="messageRef"
      @mouseenter.stop="clearTimer"
      @mouseleave.stop="startTimer"
    >
      <YuIcon v-if="type" class="yu-message-icon" size="20px">
        <template v-if="type === 'info'">
          <InfoType />
        </template>
        <template v-if="type === 'danger'">
          <ErrorType />
        </template>
        <template v-if="type === 'warning'">
          <WarningType />
        </template>
      </YuIcon>
      <slot
        ><p>{{ message }}</p></slot
      >
    </div>
  </transition>
</template>
