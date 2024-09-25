<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    :size="formSize"
    status-icon
    style="height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    "
  >
    <div class="form_write">
      <el-form-item v-if="judge" label="姓名" prop="name" style="width: 370px">
        <el-select
          v-model="value"
          filterable
          placeholder="请选择姓名"
          style="width: 370px"
          v-if="judge"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        v-for="item in Input"
        :key="item"
        :label="item.label"
        :prop="item.prop"
        style="width: 370px"
      >
        <el-input v-model="ruleForm.name" :placeholder="item.hint" />
      </el-form-item>
      <el-form-item v-if="!judge" label="性别" prop="sex" style="width: 370px">
        <el-select v-model="ruleForm.region" placeholder="请选择性别">
          <el-option label="男" :value="1" />
          <el-option label="女" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item
        v-if="judge"
        v-for="item in courseTime"
        :key="item"
        :label="item.label"
        :prop="item.prop"
        style="width: 370px"
      >
        <el-date-picker
          v-model="value3"
          type="datetime"
          placeholder="请输入时间"
          style="width: 100%"
        />
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >确认</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">关闭</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive, ref, defineProps, watch, toRef, defineEmits } from "vue";
import type { ComponentSize, FormInstance, FormRules } from "element-plus";
import {
  userInput,
  courseInput,
  courseTime,
  courseVerify,
  userVerify,
} from "./type";

const porps = defineProps({
  distinction: {
    type: String,
    default: "",
  },
});

const rules = ref();
const judge = ref<boolean>();
const Input = ref();

watch(
  toRef(porps, "distinction"),
  (to: string) => {
    if (to === "user") {
      judge.value = false;
      rules.value = userVerify;
      Input.value = userInput;
    } else {
      judge.value = true;
      rules.value = courseVerify;
      Input.value = courseInput;
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

interface RuleForm {
  name: string;
  region: number | any;
  phone: number | any;
}
const value3 = ref("");
const formSize = ref<ComponentSize>("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  name: "",
  region: null,
  phone: null,
});

const emit = defineEmits(["dialogClick" as string]);

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      emit("dialogClick", false);
      console.log(ruleForm);
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  emit("dialogClick", false);
};

const value = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>
<style scoped>
.form_write {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
