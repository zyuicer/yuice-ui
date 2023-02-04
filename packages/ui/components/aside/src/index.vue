<template>
  <div class="yu-aside" :style="'--yu-aside-width:' + width">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "YuAside"
};
</script>
<script setup lang="ts">
interface IProps {
  width?: string;
}
withDefaults(defineProps<IProps>(), {
  width: "100px"
});
</script>
