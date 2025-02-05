import {defineStore} from 'pinia'
import {ref} from 'vue'
import router from '@/router/index.js'
import {useInfoGroupsStore} from '@/stores'
import {useFilterStore} from '@/stores'


export const useUserStore = defineStore(
    'wowtw-user',
    () => {
        const isLogin = ref(false)

        const id = ref(null)

        const userID = ref(null)

        const userAvatar = ref(null)

        const nickname = ref(null)

        const identifier = ref(null)

        const token = ref(null)

        const sessionId = ref(null)

        const username = ref(null)

        let socket

        let heartbeatInterval

        const setToken = (newToken) => {
            token.value = newToken
        }

        const setSessionId = (newSessionId) => {
            sessionId.value = newSessionId
        }

        const setUsername = (newUsername) => {
            username.value = newUsername;
        };

        const resetUserData = () => {
            isLogin.value = false
            id.value = null
            userID.value = null
            userAvatar.value = null
            nickname.value = null
            identifier.value = null
            token.value = null
            sessionId.value = null
            username.value = null
            if (socket) {
                socket.close()
                socket = null
            }
        }

        const connectWebSocket = () => {
            const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws'
            // 生产环境
            const host = window.location.host
            if (username.value) {
                // 开发环境
                // socket = new WebSocket(`${protocol}://192.168.2.73:8080/websocket?username=${username.value}`)
                socket = new WebSocket(`${protocol}://localhost:8080/websocket?username=${username.value}`)
                // 生产环境
                // socket = new WebSocket(`${protocol}://${host}/websocket?username=${username.value}`)
                socket.onopen = function () {
                    // console.log('WebSocket connection opened')
                    startHeartbeat();
                }
                socket.onmessage = function (event) {
                    // console.log('Message from server ', event.data)
                    if (event.data === 'Session invalid') {
                        resetUserData()
                        router.push('/login').catch(err => {
                            console.error('Failed to navigate to login:', err)
                        })
                    }
                }
                socket.onclose = function () {
                    // console.log('WebSocket connection closed', event)
                    // console.log("Code:", event.code)
                    // console.log("Reason:", event.reason)
                    // console.log("Was clean?:", event.wasClean)
                    stopHeartbeat(); // 停止心跳
                    socket = null // 清除 socket 对象
                }
                socket.onerror = function (event) {
                    console.error('WebSocket error: ', event)
                    stopHeartbeat() // 停止心跳
                    socket = null // 清除 socket 对象
                }

                // eslint-disable-next-line no-inner-declarations
                function startHeartbeat() {
                    setInterval(() => {
                        if (socket && socket.readyState === WebSocket.OPEN) {
                            socket.send("ping")
                            // console.log("Ping sent to server")
                        }
                    }, 30000); // 每30秒发送一次心跳消息
                }

                // eslint-disable-next-line no-inner-declarations
                function stopHeartbeat() {
                    if (heartbeatInterval) {
                        clearInterval(heartbeatInterval);
                        heartbeatInterval = null;
                        console.log("Heartbeat stopped")
                    }
                }
            }
        }


        const filterStore = useFilterStore()
        const infoGroupStore = useInfoGroupsStore()

        const handleBeforeUnload = () => {
            // 在页面刷新时设置 sessionStorage 标志位
            sessionStorage.setItem('isPageRefresh', 'true')
            filterStore.resetState()
            infoGroupStore.resetPresentTalent()
            if (socket) {
                socket.close()
            }
        }

        const handlePageHide = () => {
            if (document.visibilityState === 'hidden') {
                sessionStorage.setItem('isPageHidden', 'true')
            } else {
                sessionStorage.removeItem('isPageHidden')
            }
        }

        const checkSessionStorage = () => {
            // 检查 sessionStorage 标志位
            const isPageRefresh = sessionStorage.getItem('isPageRefresh')
            const isPageHidden = sessionStorage.getItem('isPageHidden')

            if (!isPageRefresh && !isPageHidden) {
                // 重置userData
                resetUserData()
                // 重置bar状态
                filterStore.resetState()
                // 重置当前天赋
                infoGroupStore.resetPresentTalent()
            } else {
                sessionStorage.removeItem('isPageRefresh')
            }

            // 重新连接 WebSocket
            if (username.value) {
                connectWebSocket()
            }
        }

        return {
            isLogin,
            id,
            userID,
            userAvatar,
            nickname,
            identifier,
            token,
            sessionId,
            username,
            setToken,
            setSessionId,
            setUsername,
            resetUserData,
            connectWebSocket,
            handleBeforeUnload,
            handlePageHide,
            checkSessionStorage
        }
    },
    {
        persist: true
    }
)