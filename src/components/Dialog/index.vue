<template>
  <el-dialog
    v-model="porps.dialogControl"
    :title="porps.dialogTitle"
    :width="porps.dialogWidth"
    align-center
  >
    <slot></slot>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogClick()">确认</el-button>
        <el-button type="primary" @click="dialogClick()"> 取消 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, defineEmits, defineProps } from "vue";
import type { EmitsOptions, PropType } from "vue";

const centerDialogVisible = ref(false);
const porps = defineProps({
  dialogControl: {
    type: Boolean as PropType<true | false>,
    default: false,
  },
  dialogTitle: {
    type: String,
    default: "",
  },
  dialogWidth: {
    type: String,
    default: "500",
  },
});
const emit = defineEmits(["dialogClick" as string] as EmitsOptions);

const dialogClick = () => {
  centerDialogVisible.value = false;
  emit("dialogClick", centerDialogVisible.value);
};
</script>
