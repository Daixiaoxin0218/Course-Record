<template>
  <div class="user_head">
    <div>
      姓名<el-input
        v-model="input"
        style="width: 240px; margin-left: 10px"
        placeholder="请输入姓名"
      />
    </div>
    <el-button type="primary" style="margin-left: 10px">搜索</el-button>
    <el-button type="primary" @click="addUser">新增用户</el-button>
    <el-button type="primary">新增课程</el-button>
  </div>

  <div class="user_table">
    <user-table
      :tableData="tableData"
      :tableSonLists="tableSonLists"
      :tableSonButton="tableSonButton"
      :tableFatherLists="tableFatherLists"
      :tableFatherButton="tableFatherButton"
      @clickListData="clickListData"
    />
  </div>

  <div
    style="border-top: 1px solid var(--el-border-color-lighter); padding: 20px"
  >
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[10, 20, 30, 50, 100]"
      :size="size"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>

  <user-dialog
    :dialogControl="dialogControl"
    :dialogTitle="dialogTitle"
    :dialogWidth="500"
    @dialogClick="dialogClick"
  />
  <!-- <user-form /> -->
</template>

<script lang="ts" setup>
import UserTable from "@/components/Table/index.vue";
import UserDialog from "@/components/Dialog/index.vue";
// import UserForm from '@/components/Form/index.vue'
import { ref } from "vue";
import {
  tableFatherLists,
  tableSonLists,
  tableFatherButton,
  tableSonButton,
} from "./type";
import type { User } from "./type";
import type { ComponentSize } from "element-plus";

const dialogTitle = ref("新增用户");
const dialogControl = ref(false);

const input = ref("");
const currentPage4 = ref<Number>(1);
const pageSize4 = ref<Number>(10);
const size = ref<ComponentSize>("default");
const background = ref<Boolean>(false);
const disabled = ref<Boolean>(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

const addUser = () => {
  dialogControl.value = true;
};

const tableData: any[] = [];
for (let i = 0; i < 20; ++i) {
  tableData.push({
    key: i,
    name: `张三 ${i + 1}`,
    sex: "女",
    course: "基础班",
    phone: 15642567547,
    family: [
      {
        course_name: "基础班",
        class_hour: "36",
        course_price: "599",
        every_class: "16/课",
        apply_time: "2014-12-24 23:12:00",
        surplus: "20",
        state: "正常",
        start_date: "2024-9-3 23:12:00",
        deadline_date: "2025-9-3 23:12:00",
        stop_card: "",
        resume_classes: "",
      },
      {
        course_name: "进阶班",
        class_hour: "36",
        course_price: "999",
        every_class: "27/课",
        apply_time: "2014-12-24 23:12:00",
        surplus: "0",
        state: "到期",
        start_date: "2024-9-3 23:12:00",
        deadline_date: "2025-9-3 23:12:00",
        stop_card: "",
        resume_classes: "",
      },
      {
        course_name: "舞蹈",
        class_hour: "12",
        course_price: "999",
        every_class: "83/课",
        apply_time: "2014-12-24 23:12:00",
        surplus: "5",
        state: "停卡",
        start_date: "2024-9-3 23:12:00",
        deadline_date: "2025-9-3 23:12:00",
        stop_card: "2024-10-3 23:12:00",
        resume_classes: "2024-10-3 23:12:00",
      },
    ],
  });
}
const clickMethod = (param: string, index: number, row: User) => {
  console.log(param, index, row);
};
const dialogClick = (param: boolean) => {
  dialogControl.value = param;
};
const clickListData = (param: string, index: number, row: object) => {
  console.log(param, index, row);
};
</script>
<style scoped>
.user_head {
  border-bottom: 1px solid var(--el-border-color-lighter);
  padding: 20px;
  display: flex;
}
.user_table {
  padding: 20px;
}
</style>
