import request from '@/utils/request'
import {useUserStore} from '@/stores/index.js'

export const infoGroupService = (talentId) => {
    const userStore = useUserStore()

    if (!userStore.isLogin) {
        console.error('用户未登录，无法发送请求')
        return Promise.reject('用户未登录')
    }

    // const token = userStore.token

    return request.get(`/infoGroup/${talentId}`, {
        headers: {
            Authorization: `Bearer ${userStore.token}`,
            'X-Session-Id': userStore.sessionId
        }
    })
}

// 获取最新的天赋信息组
export const latestTalentsService = () => {
    const userStore = useUserStore()

    if (!userStore.isLogin) {
        console.error('用户未登录，无法发送请求')
        return Promise.reject('用户未登录')
    }

    // const token = userStore.token

    return request.get('/infoGroup/latestTalents', {
        headers: {
            Authorization: `Bearer ${userStore.token}`,
            'X-Session-Id': userStore.sessionId
        }
    })
}