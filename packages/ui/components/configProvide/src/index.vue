<script setup lang="ts">
import { isDark } from "@ui/index";
import { provide } from "vue";
import { COMPONENT_NAME } from "./configProvide";
import { IS_DARK } from "shared/constant/componentWithStyle";

defineOptions({
  name: COMPONENT_NAME
});
// TODO: 判断传入的 theme是否为暗色
provide(IS_DARK, true);
</script>
<template>
  <div class="yu-config-provide">
    <slot></slot>
  </div>
</template>
