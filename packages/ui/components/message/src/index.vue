<script setup lang="ts">
import { ref } from "vue";
import { COMPONENT_NAME } from "./message";
defineOptions({
  name: COMPONENT_NAME
});
const visiable = ref(true);
defineExpose({
  visiable
});
</script>
<template>
  <div class="yu-message" v-if="visiable">message</div>
</template>
