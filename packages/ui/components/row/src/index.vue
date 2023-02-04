<template>
  <div class="yu-row" :style="lineStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
// core
import { computed, defineComponent } from "vue";
import type { CSSProperties, PropType } from "vue";
// utils

// type

// hooks

// config

// component

export default defineComponent({
  name: "YuRow",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String as PropType<CSSProperties["justify-content"]>,
      default: "start" as CSSProperties["justify-content"]
    },
    align: {
      type: String as PropType<"bottom" | "top" | "middle">,
      default: "top"
    }
  },
  setup(props, { slots }) {
    const lineStyle = computed((): CSSProperties => {
      let alignItems: CSSProperties["align-items"];
      switch (props.align) {
        case "bottom":
          alignItems = "flex-end";
          break;
        case "middle":
          alignItems = "center";
          break;
        default:
          alignItems = "flex-start";
          break;
      }
      return {
        justifyContent: props.justify,
        alignItems
      };
    });
    return {
      lineStyle
    };
  }
});
</script>
