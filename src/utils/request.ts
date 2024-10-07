import axios from "axios";
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { ElMessage } from "element-plus";

const service: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    ElMessage.error('请求出错')
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status !== 200) {
      console.error(
        "Process HTTP response error: ",
        response.status,
        response.data
      );
      return Promise.reject(new Error("Error: " + response.status));
    } else {
      if(response.data.data.message != '获取成功'){
        ElMessage({ message: response.data.data.message, type: "success" });
      }
      return response.data;
    }
  },
  (error: any) => {
    console.error("Response Error:", error);
    return Promise.reject(error);
  }
);

export default service;
