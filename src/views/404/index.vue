<!--
 * @Description: 404页面
 * @Author: aliyun7571578412
 * @Date: 2024-10-08 11:26:13
 * @LastEditors: aliyun7571578412
 * @LastEditTime: 2024-10-08 11:29:37
-->
<template>
  <div class="mistake">
    <img src="../../assets/404-B3JyPfEa.svg" alt="" />
    <text>抱歉，您访问的页面不存在。</text>
    <el-button type="primary" @click="back">返回首页</el-button>
  </div>
</template>

<script setup lang="ts">
import router from "@/router/index";

const back = () => {
  router.push("/user");
};
</script>

<style scoped>
.mistake {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
img {
  width: 450px;
  height: 450px;
}
text {
  font-size: 15px;
  font-weight: 600;
  color: var(--el-color-info);
  margin-bottom: 25px;
}
</style>
