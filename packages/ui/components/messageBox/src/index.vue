<script setup lang="ts">
import { YuButton } from "@ui/components/button";
import { messageBoxProps } from "./messageBox";
const props = defineProps(messageBoxProps);
</script>
<template>
  <div class="yu-message-box">
    <div class="yu-message-box-top">
      <slot name="box-top">
        <h1>{{ title }}</h1>
      </slot>
      <slot />
      <div class="ui-message-box-bottom">
        <slot name="box-bottom">
          <YuButton type="primary" v-if="showConfirmButton">确认</YuButton>
        </slot>
      </div>
    </div>
  </div>
</template>
