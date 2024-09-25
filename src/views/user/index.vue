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
    <el-button type="primary" @click="clickAdd('user')">新增用户</el-button>
    <el-button type="primary" @click="clickAdd('course')">新增课程</el-button>
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

  <div class="user_pagination">
    <user-pagination
      :total="total"
      :currentPage="currentPage"
      :pageSize="pageSize"
      @clickStrip="clickStrip"
      @clickPage="clickPage"
    />
  </div>

  <user-dialog
    :dialogControl="dialogControl"
    :dialogTitle="dialogTitle"
  >
    <user-form :distinction="distinction" @dialogClick="dialogClick" />
  </user-dialog>
</template>

<script lang="ts" setup>
import UserTable from "@/components/Table/index.vue";
import UserPagination from "@/components/Pagination/index.vue";
import UserDialog from "@/components/Dialog/index.vue";
import UserForm from "@/components/Form/index.vue";
import { ref } from "vue";
import {
  tableFatherLists,
  tableSonLists,
  tableFatherButton,
  tableSonButton,
} from "./type";

const total = ref(100);
const currentPage = ref(1);
const pageSize = ref(10);

const distinction = ref<string>("user");

const dialogTitle = ref("新增用户");
const dialogControl = ref(false);

const input = ref("");

const clickAdd = (param: string) => {
  console.log(param);

  distinction.value = param;
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

const dialogClick = (param: boolean) => {
  dialogControl.value = param;
};
const clickListData = (param: string, index: number, row: object) => {
  console.log(param, index, row);
};
const clickStrip = (param: number) => {
  console.log(param);
  pageSize.value = param;
};
const clickPage = (param: number) => {
  console.log(param);
  currentPage.value = param;
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

.user_pagination {
  border-top: 1px solid var(--el-border-color-lighter);
  padding: 20px;
}
</style>
