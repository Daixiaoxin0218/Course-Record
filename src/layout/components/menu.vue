<template>
  <a-layout-sider
    v-model:collapsed="porps.collapsed"
    :trigger="null"
    collapsible
  >
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :theme="theme"
      :items="items"
      @click="menuClicked"
      style="margin-top: 10px"
    />
  </a-layout-sider>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref, h, defineProps, type PropType } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";
import type { MenuTheme } from "ant-design-vue";

const selectedKeys = ref<string[]>(["1"]);
const theme = ref<MenuTheme>("dark");
const porps = defineProps({
  collapsed: {
    type: Boolean as PropType<true | false>,
    default: false,
  },
});

const items = ref([
  {
    key: "1",
    icon: () => h(UserOutlined),
    label: "用户",
    title: "用户",
    path: "/user",
  },
]);

const menuClicked = (item: any) => {
  router.push({ path: item.item.path });
};
</script>

<style scoped></style>
