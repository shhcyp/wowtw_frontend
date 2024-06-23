import axios from 'axios'
import { useUserStore } from '@/stores'
import router from "@/router"

// const baseURL = `${window.location.origin}/api`
const baseURL = 'http://localhost:8080/api'

const instance = axios.create({
    baseURL,
    timeout: 7000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 1.携带token
        const userStore = useUserStore()
        if (userStore.token) {
            config.headers.Authorization = userStore.token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        // 2.处理响应
        console.log('后端响应的数据', response.data);
        if (response.data.code === 1) {
            // 3.获取响应数据
            return response
        }
        if (response.data.code === 0) {
            return response
        }
        return Promise.reject(response.data)
    },
    (error) => {
        // 5.401错误（权限不足或token过期，需要拦截得到登录）
        if (error.response?.status === 401) {
            router.push('/login')
        }

        // 6.默认错误提示
        // responseMessage.value = error.response.data.message
        return Promise.reject(error)
    }
)

export default instance

export { baseURL }