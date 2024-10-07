<template>
  <div class="user_head">
    <div>
      用户名<el-input
        v-model="pagerData.name"
        style="width: 240px; margin-left: 10px"
        placeholder="请输入用户名"
      />
    </div>
    <el-button type="primary" @click="userDataList" style="margin-left: 10px"
      >搜索</el-button
    >
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
      :total="pagerData.total"
      :currentPage="pagerData.page"
      :pageSize="pagerData.size"
      @clickStrip="clickStrip"
      @clickPage="clickPage"
    />
  </div>
  <user-dialog :dialogControl="dialogControl" :dialogTitle="dialogTitle">
    <user-form
      :distinction="distinction"
      :formData="formData"
      :userData="userData"
      @dialogClick="dialogClick"
      @dialogForm="dialogForm"
    />
  </user-dialog>
  <user-eimessage
    :visible="eimessSwitch"
    :options="{}"
    :judge="eimessageJudge"
    @ifRemove="ifRemove"
  />
</template>

<script lang="ts" setup>
import UserTable from "@/components/Table/index.vue";
import UserPagination from "@/components/Pagination/index.vue";
import UserDialog from "@/components/Dialog/index.vue";
import UserForm from "@/components/Form/index.vue";
import UserEimessage from "@/components/Eimessage/index.vue";
import { ref, onMounted } from "vue";
import { convertDateStringsToTimestamps } from "@/utils/method";
import {
  userList,
  userAdd,
  userUpdate,
  userDelete,
  courseAdd,
  courseUpdate,
  courseDelete,
} from "@/api/user";
import {
  tableFatherLists,
  tableSonLists,
  tableFatherButton,
  tableSonButton,
} from "./type";

/**
 * 表格数据
 * @param userData 用户数据
 * @param tableData 表格数据
 * @param pagerData 列表分页数
 * @function userDataList() 列表
 */
const userData = ref<Array<any>>([]);
const tableData = ref<Array<any>>([]);
const pagerData = ref({ total: 0, page: 1, size: 10, name: "" });

const userDataList = () => {
  userList(pagerData.value).then((res) => {
    const { data, page, size, total } = res.data;
    tableData.value = data;
    pagerData.value.page = page;
    pagerData.value.size = size;
    pagerData.value.total = total;
    userData.value = tableData.value.map((item: any) => ({
      id: item.id,
      name: item.name,
    }));
  });
};

/**
 * 新增按钮
 * @param param 区分参数
 */
const clickAdd = (param: string) => {
  param == "user"
    ? (dialogTitle.value = "新增用户")
    : (dialogTitle.value = "新增课程");
  distinction.value = param;
  dialogControl.value = true;
};

const formData = ref({});

const distinction = ref<string>("user");
const dialogTitle = ref<string>("");
const dialogControl = ref(false);
const eimessageJudge = ref("fatherDelete");
const SingleData = ref();

const clickListData = (param: string, index: number, row: any) => {
  console.log(param, index, row);
  switch (param) {
    case "fatherEdit":
      distinction.value = "user";
      dialogControl.value = true;
      dialogTitle.value = "修改用户";
      formData.value = row;
      break;
    case "sonEdit":
      distinction.value = "course";
      dialogControl.value = true;
      dialogTitle.value = "修改课程";
      formData.value = row;
      break;
    case "fatherDelete":
      eimessageJudge.value = "fatherDelete";
      eimessSwitch.value = true;
      SingleData.value = row;
      break;
    case "sonDelete":
      eimessageJudge.value = "sonDelete";
      eimessSwitch.value = true;
      SingleData.value = row;
      break;
    case "signIn":
      const currentTime: number = Date.now(); // 获取当前时间
      row.surplus = row.surplus - 1
      row.register_time = currentTime.toString()
      usersInterface(courseUpdate, row);
      break;
    default:
  }
};

const dialogForm = (param: any) => {
  switch (dialogTitle.value) {
    case "新增用户":
      usersInterface(userAdd, param);
      break;
    case "新增课程":
      const addTime = convertDateStringsToTimestamps(param);
      usersInterface(courseAdd, addTime);
      break;
    case "修改用户":
      const { id, name, phone, sex } = param;
      usersInterface(userUpdate, { id, name, phone, sex });
      break;
    case "修改课程":
      const updatetTime = convertDateStringsToTimestamps(param);
      usersInterface(courseUpdate, updatetTime);
      break;
    default:
      console.log("错误!");
  }
};

/**
 * 接口请求
 * @param url api方法
 * @param param 提交数据
 */
const usersInterface = (url: any, param: object) => {
  url(param).then((res: any) => {
    userDataList();
  });
};

/**
 * 删除弹窗提示
 * @param eimessSwitch 弹窗参数
 * @param param 接受参数
 * @param judge 关闭参数
 */
let eimessSwitch = ref<boolean>(false);

const ifRemove = (param: any) => {
  eimessSwitch.value = false;
  if (param == "cancel") return;
  const url = param === "sonDelete" ? courseDelete : userDelete;
  const { id } = SingleData.value;
  url({ id: id }).then((res) => {
    userDataList();
  });
};

/**
 * 弹窗关闭
 * @param param 关闭参数
 */
const dialogClick = (param: boolean) => {
  formData.value = {};
  dialogControl.value = param;
};

/**
 * 分页器
 * @param param 页数
 */
const clickStrip = (param: number) => {
  pagerData.value.size = param;
  userDataList();
};
/**
 * 分页器
 * @param param 条数
 */
const clickPage = (param: number) => {
  pagerData.value.page = param;
  userDataList();
};

onMounted(userDataList);
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
