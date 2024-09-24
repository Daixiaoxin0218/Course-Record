import "@/assets/main.css";

import { createApp } from "vue";
import ElementPlus from "element-plus";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";

import "element-plus/dist/index.css";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);

app.use(router);
app.use(Antd);
app.use(ElementPlus);
app.mount("#app");
