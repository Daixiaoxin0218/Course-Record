import type { FormRules } from "element-plus";

interface RuleForm {
  name: string;
  region: number | any;
  phone: number | any;
}

export const userInput = [
  { label: "姓名", prop: "name", hint: "请输入姓名" },
  { label: "手机号", prop: "sex", hint: "请输入手机号" },
];

export const userVerify = <FormRules<RuleForm>>{
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  sex: [{ required: true, message: "请选择性别", trigger: "change" }],
  phone: [
    { required: true, message: "请输入电话", trigger: "blur" },
    {
      pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
      message: "手机号格式不正确",
      trigger: "blur",
    },
  ],
};

export const courseInput = [
  { label: "课程", prop: "course_name", hint: "请输入课程" },
  { label: "课程价格", prop: "course_price", hint: "请输入课程价格" },
  { label: "课时", prop: "class_hour", hint: "请输入课时" },
  { label: "每节价格", prop: "every_class", hint: "请输入每节价格" },
  { label: "剩余课时", prop: "surplus", hint: "请输入剩余课时" },
];
export const courseTime = [
  {
    label: "报名时间",
    prop: "start_date",
    model: "start_date",
  },
  {
    label: "截止日期",
    prop: "deadline_date",
    model: "deadline_date",
  },
  {
    label: "停卡日期",
    prop: "stop_card",
    model: "stop_card",
  },
  {
    label: "复课日期",
    prop: "resume_classes",
    model: "resume_classes",
  },
];

export const courseVerify = <FormRules<RuleForm>>{
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  course_name: [{ required: true, message: "请输入课程", trigger: "blur" }],
  course_price: [
    { required: true, message: "请输入课程价格", trigger: "blur" },
  ],
  class_hour: [{ required: true, message: "请输入课时", trigger: "blur" }],
  every_class: [{ required: true, message: "请输入每节价格", trigger: "blur" }],
  surplus: [{ required: true, message: "请输入剩余课时", trigger: "blur" }],
  start_date: [{ required: true, message: "请输入报名时间", trigger: "blur" }],
  deadline_date: [
    { required: true, message: "请输入截止日期", trigger: "blur" },
  ],
};
