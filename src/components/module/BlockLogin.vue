<script setup>
import InputPublic from './InputPublic.vue'
import PanelAlert from './PanelAlert.vue'
import BarFormSubmit from './BarFormSubmit.vue'
import PanelFormFooter from './PanelFormFooter.vue'
import {ref, reactive, provide, watch} from 'vue'
import {useRouter} from 'vue-router'
import {userLoginService} from '@/apis/user'
import {useUserStore} from '@/stores'
import {useFilterStore} from '@/stores/filter.js'
import {latestTalentsService} from '@/apis/infoGroup.js'
import {useTalentsVersionStore} from '@/stores/talentsVersion.js'
import {useInfoGroupsStore} from '@/stores'


const userStore = useUserStore()
const filterStore = useFilterStore()
const talentsVersionStore = useTalentsVersionStore()
const infoGroupStore = useInfoGroupsStore()

const loginFormData = reactive({
  username: {value: '', state: 0},
  password: {value: '', state: 0}
})

const {username, password} = loginFormData

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
const alertMessage = ref('')
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

    try {
      const result = await userLoginService(submitData)
      console.log('result:', result);

      setTimeout(async () => {
        // 登录成功，直接跳转
        if (result.data.code === 1) {
          userStore.isLogin = true
          userStore.setUsername(username.value)
          messageForButton.value = result.data.message
          userStore.id = result.data.data.id
          userStore.userID = result.data.data.userID
          userStore.userAvatar = result.data.data.userAvatar || 'public/avatar/grandfathered.webp'
          userStore.nickname = result.data.data.nickname || '时光漫游靓仔'
          userStore.identifier = result.data.data.identifier
          userStore.setToken(result.data.data.token)
          userStore.setSessionId(result.data.data.sessionId)
          filterStore.resetState()

          // 建立 WebSocket 连接
          userStore.connectWebSocket()

          await router.push('/prompt')

          // 调用 latestTalentsService获取最新的天赋数据并等待结果
          const latestTalents = await latestTalentsService()
          console.log(latestTalents.data.data)

          // 更新latestTalentsVersionData
          talentsVersionStore.latestTalentsVersionData = latestTalents.data.data

          if (!Object.keys(talentsVersionStore.talentsVersionData).length) {
            // talentsVersionData 为空，直接设置 latestTalentsVersionData
            talentsVersionStore.setTalentsVersionData()
          } else {
            // talentsVersionData 不为空，进行版本比对和删除操作

            // 获取不一致的 id 列表
            const mismatchedIds = talentsVersionStore.getMismatchedIds()

            // 删除 infoGroupData 中对应的项
            mismatchedIds.forEach(id => {
              delete infoGroupStore.infoGroupData[id]
            })

            // 更新 talentsVersionData
            talentsVersionStore.setTalentsVersionData()
          }
        }
        // 登录失败，账号或密码错误，请重试
        if (result.data.code === 0) {
          alertMessage.value = result.data.message
          submitAnimateRun.value = false
        }
      }, 777)
    } catch (error) {
      console.error('登录请求失败:', error)
      alertMessage.value = '登录请求失败，请稍后再试'
      submitAnimateRun.value = false
    }
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
}

/* @media (orientation: landscape) and (max-width: 1180px) {} */

@media (max-width: 820px) {
  #login-form-container {
    width: 90%;
  }

  #login-form {
    width: 77%;
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
}

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
