import axios from 'axios'
import {useUserStore} from '@/stores'
import router from "@/router"

// 生产环境
// const baseURL = `${window.location.origin}/api`

// 开发环境
const baseURL = 'http://localhost:8080/api'
// const baseURL = 'http://192.168.2.73:8080/api'

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
            config.headers.Authorization = `Bearer ${userStore.token}`
        }
        // 2.携带sessionId
        if (userStore.sessionId) {
            config.headers['X-Session-Id'] = userStore.sessionId
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
        // 1.处理响应/获取响应数据
        // console.log('后端响应的数据', response.data);
        if (response.data.code === 1) {
            return response
        }
        if (response.data.code === 0) {
            return response
        }
        return Promise.reject(response.data)
    },
    (error) => {
        // 2.处理错误响应
        const userStore = useUserStore()

        // 401错误（权限不足或token过期或会话失效，需要拦截到登录）
        if (error.response?.status === 401) {
            if (error.response.data.message === "Session invalid") {
                userStore.resetUserData()
            }
            router.push('/login').catch(err => {
                console.log(err)
            })
        }

        // 默认错误
        return Promise.reject(error)
    }
)

export default instance

export {baseURL}