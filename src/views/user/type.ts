import { reactive } from "vue";
import { unixTimestampToLocalTime } from "@/utils/method";

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
  {
    label: "性别",
    prop: "sex",
    width: "40",
    formatter(row: any, column: any, cellValue: any, index: number) {
      console.log();

      return cellValue === 1 ? "男" : "女";
    },
  },
  { label: "电话", prop: "phone", width: "100" },
  {
    label: "月销",
    prop: "monthly_sales",
    width: "100",
    formatter(row: any, column: any, cellValue: any, index: number) {
      return cellValue === 0 ? "--" : cellValue;
    },
  },
  {
    label: "总销",
    prop: "total_sales",
    width: "100",
    formatter(row: any, column: any, cellValue: any, index: number) {
      return cellValue === 0 ? "--" : `${cellValue}元`;
    },
  },
]);

export const tableSonLists = reactive<Array<tableListsType>>([
  { label: "课程", prop: "course_name", width: "45" },
  { label: "课价", prop: "course_price", width: "30" },
  { label: "课时", prop: "class_hour", width: "30" },
  { label: "每节价格", prop: "every_class", width: "45" },
  { label: "剩余课时", prop: "surplus", width: "45" },
  {
    label: "报名时间",
    prop: "start_date",
    width: "70",
    formatter(row: any, column: any, cellValue: any, index: number) {
      const time = unixTimestampToLocalTime(parseInt(cellValue));
      return cellValue === null ? "--" : time;
    },
  },
  {
    label: "截止日期",
    prop: "deadline_date",
    width: "70",
    formatter(row: any, column: any, cellValue: any, index: number) {
      const time = unixTimestampToLocalTime(parseInt(cellValue));
      return cellValue === null ? "--" : time;
    },
  },
  {
    label: "停卡日期",
    prop: "stop_card",
    width: "70",
    formatter(row: any, column: any, cellValue: any, index: number) {
      const time = unixTimestampToLocalTime(parseInt(cellValue));
      return cellValue === null ? "--" : time;
    },
  },
  {
    label: "复课日期",
    prop: "resume_classes",
    width: "70",
    formatter(row: any, column: any, cellValue: any, index: number) {
      const time = unixTimestampToLocalTime(parseInt(cellValue));
      return cellValue === null ? "--" : time;
    },
  },
  {
    label: "签到时间",
    prop: "register_time",
    width: "70",
    formatter(row: any, column: any, cellValue: any, index: number) {
      const time = unixTimestampToLocalTime(parseInt(cellValue));
      return cellValue === null ? "--" : time;
    },
  },
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
