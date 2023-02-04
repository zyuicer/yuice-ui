<template>
  <div class="yu-col" :class="'yu-col-' + span" :style="lineStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
// core
import {
  CSSProperties,
  computed,
  defineComponent,
  getCurrentInstance
} from "vue";
import { verifyRule } from "shared/errorHandler";

// utils

// type

// hooks

// config

// component

export default defineComponent({
  name: "YuCol",
  props: {
    span: {
      type: Number,
      default: 1
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const gutter: any = instance?.parent?.props.gutter;
    const lineStyle = computed((): CSSProperties => {
      return {
        margin: `0 ${gutter / 2}px`
      };
    });

    return {
      lineStyle
    };
  }
});
</script>
