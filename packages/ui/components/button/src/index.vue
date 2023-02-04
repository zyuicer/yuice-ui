<template>
  <button class="yu-button" :class="[yuType, yuSize, isPlain]">
    <span><slot></slot></span>
  </button>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import type { PropType } from "vue";
import type { YuSizeOptions, YuTypeOptions } from "../../../types/base.type";
export default defineComponent({
  name: "YuButton",
  props: {
    type: {
      type: String as PropType<YuTypeOptions>,
      default: "normal" as YuTypeOptions
    },
    size: {
      type: String as PropType<YuSizeOptions>,
      default: "default" as YuSizeOptions
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const yuType = computed(() => "yu-button--" + props.type);
    const yuSize = computed(() => "yu-button-" + props.size);
    const isPlain = computed(() => (props.plain ? "yu-button-is-plain" : ""));
    return {
      yuType,
      yuSize,
      isPlain
    };
  }
});
</script>
