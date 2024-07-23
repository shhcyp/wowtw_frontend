<script setup>
import GroupPageHeader from '@/components/viewport/GroupPageHeader.vue'
import InputPublic from '@/components/module/InputPublic.vue'
import InputReadonly from '@/components/module/InputReadonly.vue'
import BarFormSubmit from '@/components/module/BarFormSubmit.vue'
import {ref, reactive, watch, provide} from 'vue'
import {resetPasswordVerifyService, answerMatchService, resetPasswordSubmitService} from '@/apis/user'
import router from '@/router/index.js'
import {useUserStore} from '@/stores'

const userStore = useUserStore()

const resetPasswordFormData = reactive({
  count: {value: 0, state: 1, isUpdated: false},
  username: {value: '', state: 0, isUpdated: false},
  password: {value: '', state: 0, isUpdated: false},
  repassword: {value: '', state: 0, isUpdated: false},
  phoneNumber: {value: '', state: 0, isUpdated: false},
  question: {value: '', state: 0, isUpdated: false},
  answer: {value: '', state: 0, isUpdated: false},
})

const {username, password, repassword, phoneNumber, question, answer} = resetPasswordFormData
const passport = ref(false)

const updateUsername = (inputValue) => {
  username.value = inputValue
  // count.value++
  username.isUpdated = true
  phoneNumber.isUpdated = true
}

const updatePhoneNumber = (inputValue) => {
  phoneNumber.value = inputValue
  // count.value++
  username.isUpdated = true
  phoneNumber.isUpdated = true
}

const updateAnswer = (inputValue) => {
  answer.value = inputValue
  answer.isUpdated = true
}

const messageForRepassword = ref('')
const isMatch = ref(true);

const matchPassword = () => {
  if (password.value !== repassword.value) {
    messageForRepassword.value = '前后密码不匹配'
    isMatch.value = false
  } else {
    messageForRepassword.value = ''
    isMatch.value = true
  }
}
const updatePassword = (inputValue) => {
  password.value = inputValue
  matchPassword()
  isMatch.value && password.value ? password.state = 1 : password.state = 0
  isMatch.value && repassword.value ? repassword.state = 1 : repassword.state = 0
}
const updateRepassword = (inputValue) => {
  repassword.value = inputValue
  matchPassword()
  isMatch.value && password.value ? password.state = 1 : password.state = 0
  isMatch.value && repassword.value ? repassword.state = 1 : repassword.state = 0
}

const phoneNumberResponseData = ref(null)
const questionResponseData = ref(null)
provide('phoneNumberVerifyResponse', phoneNumberResponseData)
provide('questionResponse', questionResponseData)

const isReadonly = ref(false)
const isAnswerReadonly = ref(false)
let isVerify = false

// 用户名、手机号验证
watch(resetPasswordFormData, async () => {
  console.log('表单form实时数据', resetPasswordFormData);
  // 检查state是不是都是1
  passport.value = Object.values(resetPasswordFormData).every(field => field.state === 1)

  const verifyData = {
    username: username.value,
    phoneNumber: phoneNumber.value
  }
  const verifyPassport = username.value && username.isUpdated && phoneNumber.value && phoneNumber.isUpdated

  if (verifyPassport) {
    const result = await resetPasswordVerifyService(verifyData)
    console.log('result', result.data);
    question.value = result.data.data
    console.log(question.value);
    phoneNumberResponseData.value = result.data
    console.log(phoneNumberResponseData.value);

    username.isUpdated = false
    phoneNumber.isUpdated = false
    username.state = result.data.code
    phoneNumber.state = result.data.code
    question.state = result.data.code

    isReadonly.value = result.data.code === 1
    isVerify = result.data.code === 1
  }

  const matchData = {
    username: username.value,
    answer: answer.value
  }
  const matchPassport = answer.value && answer.isUpdated && isVerify
  if (matchPassport) {
    const result = await answerMatchService(matchData)

    questionResponseData.value = result.data
    console.log(questionResponseData.value);
    answer.state = result.data.code
    answer.isUpdated = false

    isAnswerReadonly.value = result.data.code === 1
  }
}, {
  deep: true
})

// 提交重置请求
// 触发提交按钮动画的开关
const submitAnimateRun = ref(false)
const messageForButton = ref(null)

const handleSubmit = async () => {
  // 把要提交的字段重新打包，别写到方法外面去了
  const submitData = {
    username: username.value,
    password: password.value,
  }

  if (passport.value && submitAnimateRun.value === false) {
    submitAnimateRun.value = !submitAnimateRun.value
    const result = await resetPasswordSubmitService(submitData)

    setTimeout(() => {
      // 修改成功，跳转登录页或首页
      if (result.data.code === 1) {
        messageForButton.value = result.data.message
        if (userStore.isLogin === true) {
          router.push('/')
        } else {
          router.push('/login')
        }
      }
      // 修改失败，请重试
      if (result.data.code === 0) {
        messageForButton.value = result.data.data ? result.data.data : result.data.message
      }
    }, 2000)
  }
}

const handleEnter = (event) => {
  event.target.blur()
  handleSubmit()
}
</script>

<template>
  <TheLayout>
    <template #page-header>
      <GroupPageHeader>
        <template #page-title>
          重置密码
        </template>
      </GroupPageHeader>
    </template>
    <template #page-main>
      <div class="wrapper flex-row-align-center" id="main-container">
        <form @submit.prevent="handleSubmit" ref="loginForm" class="flex-column"
              id="reset-password-form-container">
          <div class="flex-column" id="reset-password-container">
            <InputPublic :readonly="isReadonly" @blur="updateUsername" type="text" name="username">账号
            </InputPublic>
            <InputPublic :readonly="isReadonly" @blur="updatePhoneNumber" type="text" name="phoneNumber">
              手机号码
            </InputPublic>
            <InputReadonly :question="question.value">密保问题</InputReadonly>
            <InputPublic :readonly="isAnswerReadonly" @blur="updateAnswer" type="text" name="answer">密保答案
            </InputPublic>
            <InputPublic @submitBar:state="updatePassword" @keydown.enter="handleEnter"
                         @blur="updatePassword" :isMatch="isMatch" type="password" name="password">新密码
            </InputPublic>
            <InputPublic @submitBar:state="updateRepassword" @keydown.enter="handleEnter"
                         @blur="updateRepassword" :isMatch="isMatch" type="password" name="repassword">重复新密码
            </InputPublic>
            <BarFormSubmit @keydown.enter="handleEnter" @click="handleSubmit" :barState="passport"
                           :messageForButton="messageForButton" :submitAnimateRun="submitAnimateRun">
            </BarFormSubmit>
          </div>
        </form>
      </div>
    </template>
  </TheLayout>
</template>

<style scoped>
#main-container {
  border-bottom: 1px solid var(--color-border);
}

#reset-password-form-container {
  margin: 0 auto;
  width: 850px;
  padding: 3rem 7rem;
}

#reset-password-container {
  margin: 0 auto;
  width: 60%;
}
</style>
