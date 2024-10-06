<script setup lang="ts">
import { toRef, watch, defineProps, defineEmits } from "vue";
import { ElMessageBox, type ElMessageBoxOptions } from "element-plus";

/**
 * @param visible 弹窗显示
 */
const porps = defineProps({
  options: {
    type: Object as () => ElMessageBoxOptions,
    required: true,
  },
  visible: {
    type: Boolean as any,
    default: false,
  },
  judge: {
    type: String as any,
    default: 'user',
  },
});

watch(toRef(porps, "visible"), (to: any) => {
  if (to) showMessageBox();
});

const emit = defineEmits(["ifRemove"]);

const showMessageBox = () => {
  ElMessageBox.confirm(
    "是否删除所选中数据？",
    "提示",
    {
      ...porps.options,
      closeOnClickModal: false,
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    }
  )
    .then((res: any) => {
      return emit("ifRemove", porps.judge);
    })
    .catch((err: any) => {
      return emit("ifRemove", err);
    });
};
</script>

<style lang="scss" scoped></style>
