<template>
  <a-layout-content
    :style="{
      margin: '20px',
      background: '#fff',
      minHeight: '280px',
      border: '1px solid var(--el-border-color-lighter)',
    }"
  >
    <RouterView />
  </a-layout-content>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped></style>
