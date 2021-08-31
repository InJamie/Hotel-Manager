// 请求相关
import Vue from 'vue'
import axios from 'axios'
// Nprogress加载条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//导入 axios————此处写在main.js内
// Vue.prototype.axios = axios
// 此处创建axios实例来配置基础信息等。
const instance = axios.create({
    baseURL: 'http://localhost:9528/',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
});

// 通过拦截器可做一个加载条的效果
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  NProgress.start()
  next()
  console.log("拦截前");
  return config;
}, function (error) {
  // 对请求错误做些什么
  NProgress.done()
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  NProgress.done()
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  NProgress.done()
  return Promise.reject(error);
});

 
/*
 *封装get方法
 *@param{String} url [请求地址]
 *@param{Object} params 请求参数
 */
 export function Get(url, params) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}
 
/**
 *封装post方法
 *@param{String} url 请求地址
 *@param{Object} params 请求参数
 */
export function Post(url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, params).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}
 
/**
 *封装put方法
 *@param{String} url 请求地址
 *@param{Object} params 请求参数
 */
export function Put(url, params) {
  return new Promise((resolve, reject) => {
    instance.put(url, params).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}
 
/**
 *封装delete方法
 *@param{String} url [请求地址]
 *@param{Object} params [请求参数]
 */
export function Delete(url, params) {
  return new Promise((resolve, reject) => {
    instance.delete(url, {
      params: params
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
};
