<template>
  <a-layout class="layout">
    <layout-menu :collapsed="collapsed"></layout-menu>
    <a-layout>
      <layout-header @collapsedClick="collapsedClick"></layout-header>
      <layout-content></layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import layoutContent from "./components/content.vue";
import layoutHeader from "./components/header.vue";
import layoutMenu from "./components/menu.vue";

const collapsed = ref<boolean>();
const collapsedClick = (param: boolean) => {
  collapsed.value = param;
};
</script>

<style>
.layout {
  height: 100vh;
}
</style>
