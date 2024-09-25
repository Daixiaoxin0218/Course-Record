<template>
  <el-dialog
    v-model="porps.dialogControl"
    :title="porps.dialogTitle"
    :width="porps.dialogWidth"
    :destroy-on-close="true"
    :show-close="false"
    style="height: 500px;"
    align-center
  >
    <div class="dialog_slot">
      <slot></slot>
    </div>
    <!-- <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogClick()">确认</el-button>
        <el-button type="primary" @click="dialogClick()"> 取消 </el-button>
      </div>
    </template> -->
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, defineProps } from "vue";
import type { PropType } from "vue";

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
    default: "900",
  },
});
</script>
<style scoped>
.dialog_slot{
  padding: 30px;
}
</style>
