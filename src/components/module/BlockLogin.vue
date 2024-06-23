<script setup>
import InputPublic from './InputPublic.vue'
import PanelAlert from './PanelAlert.vue'
import BarFormSubmit from './BarFormSubmit.vue'
import PanelFormFooter from './PanelFormFooter.vue'
import { ref, reactive, provide, watch } from 'vue'
import { useRouter } from 'vue-router'
import { userLoginService } from '@/apis/user'
import { useUserStore } from '@/stores'

const userStore = useUserStore()

const loginFormData = reactive({
    username: { value: '', state: 0 },
    password: { value: '', state: 0 }
})

const { username, password } = loginFormData

const submitbarState = ref(false)

const updateUsername = (inputValue) => {
    username.value = (inputValue)
    username.state = 1
}
const updatePassword = (inputValue) => {
    password.value = inputValue
    password.state = 1
}

const clearAlert = () => {
    alertMessage.value = ''
}

const clearUsername = () => {
    alertMessage.value = ''
    username.value = ''
    username.state = 0
    submitbarState.value = false
}

const clearPassword = () => {
    alertMessage.value = ''
    password.value = ''
    password.state = 0
    submitbarState.value = false
}

// 似乎在这里用不上
const alertMessageInput = ref(null)
provide('messageForInput', alertMessageInput)

// 提交表单
const loginForm = ref(null)
const alertMessage = ref(null)
const submitAnimateRun = ref(false)
const messageForButton = ref(null)
const router = useRouter()

const handleSubmit = async () => {
    const submitData = {
        username: username.value,
        password: password.value
    }

    const passport = Object.values(loginFormData).every(field => field.state === 1) && username && password && !alertMessage.value

    if (passport && submitAnimateRun.value === false) {
        console.log('表单提交了', submitData);
        submitAnimateRun.value = !submitAnimateRun.value

        const result = await userLoginService(submitData)
        console.log('result:', result);

        setTimeout(() => {
            // 登录成功，直接跳转
            if (result.data.code === 1) {
                userStore.isLogin = true
                messageForButton.value = result.data.message
                userStore.id = result.data.data.id
                userStore.userID = result.data.data.userID
                userStore.userAvatar = result.data.data.userAvatar || 'public/avatar/grandfathered.webp'
                userStore.nickname = result.data.data.nickname || '时光漫游靓仔'
                userStore.identifier = result.data.data.identifier
                userStore.setToken(result.data.data.token)
                userStore.editCount = result.data.data.editCount

                router.push('/prompt')
                // setTimeout(() => {
                //     router.push('/private')
                // }, 1234)
            }
            // 登录失败，账号或密码错误，请重试
            if (result.data.code === 0) {
                alertMessage.value = result.data.message
                submitAnimateRun.value = false
            }
        }, 1234)
    }
}

// const focusNextInput = () => {
//     passwordInput.value.focus()
// }

const handleEnter = (event) => {
    event.target.blur()
    handleSubmit()
}

watch([loginFormData, alertMessage], () => {
    if (username.value && password.value) {
        submitbarState.value = true
    }
    if (alertMessage.value) {
        submitbarState.value = false
    }
})
</script>

<template>
    <div class="container- wrapper flex-row-align-center">
        <!-- <form @submit.prevent="handleSubmit" class="flex-column" id="login-form-container"> -->
        <form @submit.prevent="handleSubmit" ref="loginForm" class="flex-column" id="login-form-container">
            <div class="flex-column" id="login-form">
                <!-- v-model="loginFormData.username"似乎是无效的 -->
                <!-- <InputPublic @blur="updateUsername" v-model="loginFormData.username" type="username">账号
                </InputPublic> -->
                <InputPublic @keydown.enter="handleEnter" @clear="clearUsername" @input="clearAlert"
                    @blur="updateUsername" @submitBar:state="updateUsername" type="text" name="username">账号
                </InputPublic>
                <InputPublic @keydown.enter="handleEnter" @clear="clearPassword" @input="clearAlert"
                    @blur="updatePassword" @submitBar:state="updatePassword" type="password" name="password">密码
                </InputPublic>
                <PanelAlert>{{ alertMessage }}</PanelAlert>
                <BarFormSubmit :barState="submitbarState" :messageForButton="messageForButton"
                    :submitAnimateRun="submitAnimateRun" @click="handleSubmit" @keydown.enter="handleSubmit"
                    type="login">
                </BarFormSubmit>
                <PanelFormFooter></PanelFormFooter>
            </div>
        </form>
    </div>
</template>

<style scoped>
#login-form-container {
    margin: 0 auto;

    background: var(--color-gear-backgroud);
    width: 850px;
    /* border-radius: 0.5rem; */
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);

    padding: 3rem 7rem;

    user-select: none;
}

#login-form {
    width: 60%;
    height: 500px;
    margin: 0 auto;

    justify-content: space-between;
}

#submit-button {
    margin-top: 10rem;
}

@media (max-width: 1180px) {
    .container- {
        padding-top: 0;
    }

    #login-form-container {
        padding: 3rem 0;
    }

    #login-form {
        height: 400px;
    }

    #submit-button {
        margin-top: 7rem;
    }
}

/* @media (orientation: landscape) and (max-width: 1180px) {} */

@media (max-width: 820px) {
    #login-form-container {
        width: 90%;
    }

    #login-form {
        width: 77%;
    }

    #submit-button {
        margin-top: 5rem;
    }
}

@media (max-width: 620px) {
    #login-form-container {
        width: 100%;
    }
}

@media (max-width: 500px) {
    #login-form {
        width: 83%;
    }
}

@media (max-width: 430px) {
    .container- {
        padding: 0;
    }

    #login-form-container {
        padding: 2rem 0;
    }

    #login-form {
        width: 87%;
        height: 43vh;
    }

    #submit-button {
        margin-top: 1rem;
    }
}

/* @media (max-width: 390px) {} */

@media (max-width: 375px) {
    #login-form-container {
        padding: 1rem 0.7rem;
    }

    #login-form {
        width: 90%;
        height: 50vh;
    }
}
</style>
