<template>
  <div class="yu-header" :style="{ height: height }">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "YuHeader"
};
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<{ height: string }>(), {
  height: "60px"
});
</script>
