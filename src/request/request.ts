import axios from 'axios'
import { message } from 'ant-design-vue'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60000,
  withCredentials: true,
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const { data } = response

    //未登录
    if (data.code === 40100) {
      // 如果不是获取用户信息的请求，并且没有在用户登录的页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes('user/get/login') &&
        !window.location.pathname.includes('/user/login')
      ) {
        message.error('未登录，请先登录')
        window.location.href = `/user/login?redirect=${window.location.href}`
      }
    }

    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default request
