import {defineStore} from 'pinia'
import {ref} from 'vue'
import router from "@/router/index.js";

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

        const username = ref(null);

        let socket = null;

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
            if (username.value) {
                socket = new WebSocket(`ws://localhost:8080/websocket?username=${username.value}`)
                socket.onopen = function () {
                    console.log('WebSocket connection opened')
                }
                socket.onmessage = function (event) {
                    console.log('Message from server ', event.data)
                    if (event.data === 'Session invalid') {
                        resetUserData()
                        router.push('/login').catch(err => {
                            console.error('Failed to navigate to login:', err)
                        })
                    }
                }
                socket.onclose = function () {
                    console.log('WebSocket connection closed')
                }
                socket.onerror = function (event) {
                    console.error('WebSocket error: ', event)
                }
            }
        }

        const handleBeforeUnload = () => {
            // 在页面刷新时设置 sessionStorage 标志位
            sessionStorage.setItem('isPageRefresh', 'true')
        }

        const checkSessionStorage = () => {
            // 检查 sessionStorage 标志位
            const isPageRefresh = sessionStorage.getItem('isPageRefresh')
            if (!isPageRefresh) {
                isLogin.value = false
            } else {
                sessionStorage.removeItem('isPageRefresh')
            }
        }

        return {isLogin, id, userID, userAvatar, nickname, identifier, token, sessionId, username, setToken, setSessionId, setUsername, resetUserData, connectWebSocket, handleBeforeUnload, checkSessionStorage}
    },
    {
        persist: true
    }
)