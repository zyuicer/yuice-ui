<template>
  <div class="yu-alert">
    <div class="yu-alert-text">
      <span class="yu-alert-text__title">{{ title }}</span>
      <span class="yu-alert-text__title" v-if="description">{{
        description
      }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { alertProps } from "./alert";
const props = defineProps(alertProps);
</script>

<style scoped lang="less"></style>
