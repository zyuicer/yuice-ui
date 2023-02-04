<template>
  <span class="yu-avatar" :class="[yuShape]" :style="lineStyle">
    <div class="content">
      <slot
        ><img
          :src="src"
          @error="onError"
          :style="{
            objectFit: fit
          }"
      /></slot>
    </div>
  </span>
</template>

<script lang="ts">
// core
import { computed, defineComponent } from "vue";
import type { PropType, CSSProperties } from "vue";
import type { ShapeOptions, ImgFitOptions } from "../../../types/base.type";

// utils

// type

// hooks

// config

// component

export default defineComponent({
  name: "YuAvatar",
  props: {
    src: [String],
    shape: {
      type: String as PropType<ShapeOptions>,
      default: "circle"
    },
    size: {
      type: Number,
      default: 50
    },
    fit: {
      type: String as PropType<ImgFitOptions>,
      default: "cover"
    }
  },
  setup(props) {
    const onError = function (event: any) {
      console.log(event);
      event.target.src =
        "	https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png";
    };
    const yuShape = computed(() => "yu-avatar--" + props.shape);
    const lineStyle = computed((): CSSProperties => {
      return {
        width: props.size + "px",
        height: props.size + "px"
      };
    });
    return {
      yuShape,
      lineStyle,
      onError
    };
  }
});
</script>
