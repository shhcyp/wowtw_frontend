import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useUserStore = defineStore(
    'wowtw-user',
    () => {
        const isLogin = ref(false)

        const id = ref(null)

        const userID = ref(null)

        const userAvatar = ref(null)

        const nickname = ref(null)

        const identifier = ref(null)

        const editCount = ref(null)

        const token = ref(null)

        const setToken = (newToken) => {
            token.value = newToken
        }

        const resetUserData = () => {
            isLogin.value = false
            id.value = null
            userID.value = null
            userAvatar.value = null
            nickname.value = null
            identifier.value = null
            editCount.value = null
            token.value = null
        }

        return {isLogin, id, userID, userAvatar, nickname, identifier, editCount, token, setToken, resetUserData}
    },
    {
        persist: true
    }
)