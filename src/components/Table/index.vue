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
              <el-tag
                :type="
                  scope.row.state === '正常'
                    ? 'success'
                    : scope.row.state === '停卡'
                    ? 'warning'
                    : 'danger'
                "
                disable-transitions
                >{{ scope.row.state }}</el-tag
              >
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

const emits = defineEmits(['clickListData' as string])

const clickMethod = (discern: any, $index: any, row: any) => {
  emits('clickListData', discern, $index, row)
};
</script>

<style lang="scss" scoped></style>
