import { reactive } from "vue";

interface tableListsType {
  label: string;
  prop: string;
  width: string;
  formatter?: any;
}

interface tableButtonType {
  title: string;
  size: string;
  discern: string;
  type?: string;
}

export interface User {
  date: string;
  name: string;
  address: string;
}

export const tableFatherLists = reactive<Array<tableListsType>>([
  { label: "姓名", prop: "name", width: "50" },
  { label: "性别", prop: "sex", width: "40" },
  { label: "电话", prop: "phone", width: "100" },
  { label: "月销", prop: "monthly_sales", width: "100" },
  { label: "总销", prop: "total_sales", width: "100" },
]);

export const tableSonLists = reactive<Array<tableListsType>>([
  { label: "课程", prop: "course_name", width: "45" },
  { label: "课程价格", prop: "course_price", width: "45" },
  { label: "课时", prop: "class_hour", width: "35" },
  { label: "每节价格", prop: "every_class", width: "45" },
  { label: "剩余课时", prop: "surplus", width: "45" },
  { label: "报名时间", prop: "start_date", width: "70" },
  { label: "截止日期", prop: "deadline_date", width: "70" },
  { label: "停卡日期", prop: "stop_card", width: "70" },
  { label: "复课日期", prop: "resume_classes", width: "70" },
]);

export const tableFatherButton = reactive<Array<tableButtonType>>([
  { title: "修改", size: "small", discern: "fatherEdit" },
  { title: "删除", size: "small", type: "danger", discern: "fatherDelete" },
]);

export const tableSonButton = reactive<Array<tableButtonType>>([
  { title: "签到", size: "small", type: "primary", discern: "signIn" },
  { title: "修改", size: "small", discern: "sonEdit" },
  { title: "删除", size: "small", type: "danger", discern: "sonDelete" },
]);
