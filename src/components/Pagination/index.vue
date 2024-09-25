<template>
  <el-pagination
    :current-page="currentPage"
    :page-size="pageSize"
    :page-sizes="[10, 20, 30, 50, 100]"
    :size="size"
    :disabled="disabled"
    :background="background"
    layout="total, sizes, prev, pager, next, jumper"
    :total="porps.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from "vue";
import type { ComponentSize } from "element-plus";

const size = ref<ComponentSize>("default");
const background = ref<Boolean>(false);
const disabled = ref<Boolean>(false);

const porps = defineProps({
  total: {
    type: Number,
    default: 100,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
});

const emit = defineEmits(<Array<string>>["clickStrip", "clickPage"]);

const handleSizeChange = (val: number) => {  
  emit("clickStrip", val);
};
const handleCurrentChange = (val: number) => {
  emit("clickPage", val);
};
</script>

<style lang="scss" scoped></style>
