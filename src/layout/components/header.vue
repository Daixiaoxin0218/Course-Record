<template>
  <a-layout-header class="header">
    <div @click="indentation" class="icon">
      <menu-unfold-outlined v-if="collapsed" />
      <menu-fold-outlined v-else />
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref, defineEmits, type EmitsOptions } from "vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
const collapsed = ref<boolean>(false);
const emit = defineEmits(["collapsedClick" as string] as EmitsOptions);

const indentation = () => {
  collapsed.value = !collapsed.value;
  emit("collapsedClick", collapsed.value);
};
</script>

<style scoped>
.header {
  background: #fff;
  padding: 0;
  border: 1px solid var(--el-border-color-lighter);
}

.icon {
  margin-left: 10px;
}
</style>
