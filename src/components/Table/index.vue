<template>
  <el-table
    :data="porp.tableData"
    style="width: 100%"
    max-height="calc(100vh - 290px)"
    border
  >
    <el-table-column type="expand">
      <template #default="props">
        <el-table :data="props.row.posts">
          <el-table-column
            v-for="(item, index) in porp.tableSonLists"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :min-width="item.width"
            :formatter="item.formatter"
            align="center"
            fixed
          />
          <el-table-column
            prop="state"
            label="状态"
            width="70"
            align="center"
            filter-placement="bottom-end"
          >
            <template #default="scope">
              <el-tag :type="stateColor[scope.row.state]" disable-transitions>{{
                columnState(scope.row.state)
              }}</el-tag>
            </template>
          </el-table-column>

          <el-table-column label="操作" min-width="90" align="center">
            <template #default="scope">
              <el-button
                v-for="item in porp.tableSonButton"
                :key="item"
                :size="item.size"
                :type="item.type"
                @click="clickMethod(item.discern, scope.$index, scope.row)"
                >{{ item.title }}</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column
      v-for="(item, index) in porp.tableFatherLists"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      :formatter="item.formatter"
      :min-width="`${item.width}`"
      align="center"
    />
    <el-table-column label="操作" min-width="100" align="center">
      <template #default="scope">
        <el-button
          v-for="item in porp.tableFatherButton"
          :key="item"
          :size="item.size"
          :type="item.type"
          @click="clickMethod(item.discern, scope.$index, scope.row)"
          >{{ item.title }}</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref, reactive, defineEmits, defineProps } from "vue";

const porp = defineProps({
  tableData: {
    type: Object,
    default: {},
  },
  tableSonLists: {
    type: Object,
    default: {},
  },
  tableSonButton: {
    type: Object,
    default: {},
  },
  tableFatherLists: {
    type: Object,
    default: {},
  },
  tableFatherButton: {
    type: Object,
    default: {},
  },
});

const stateColor = ref<any>({
  1: "success",
  2: "warning",
  3: "danger",
});

const emits = defineEmits(["clickListData" as string]);

const clickMethod = (discern: any, $index: any, row: any) => {
  emits("clickListData", discern, $index, row);
};

/**
 * 状态信息替换
 * @param param 状态类型
 */
const columnState = (param: Number) => {
  return param === 1 ? "正常" : param === 2 ? "停卡" : "到期";
};
</script>

<style lang="scss" scoped></style>
