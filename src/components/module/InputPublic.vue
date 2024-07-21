<script setup>
import IconEyeClose from './IconEyeClose.vue'
import IconEyeOpen from './IconEyeOpen.vue'
import IconXmark from './IconXmark.vue'
import PanelAlert from './PanelAlert.vue'
import {ref, onMounted, watch, inject} from 'vue'
// import { responseData } from '@/utils/request'

const props = defineProps({
  type: String,
  name: String,
  maxlength: Number,
  isMatch: {
    type: Boolean,
    default: true
  },
  readonly: {
    type: Boolean,
    default: false
  },
  placeholder: String,
  required: {
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: String,
    default: 'false'
  }
})

const emits = defineEmits(['input', 'blur', 'clear', 'request', 'notPhoneNumber', 'barSms:state', 'submitBar:state'])

const usernameResponseData = inject('usernameVerifyResponse', ref('default'))
const phoneNumberResponseData = inject('phoneNumberVerifyResponse', ref('default'))
const questionResponseData = inject('questionResponse', ref('default'))
const verificationCodeResponseData = inject('codeVerifyResponse', ref('default'))
const inviteIdentifierResponseData = inject('inviteIdentifierResponseData', ref('default'))

const domInput = ref(null)
const inputValue = ref(null)
// 正则表达式
// const regex = /^[a-zA-Z0-9\s@]*$/
const regexAlpha = /^[a-zA-Z0-9@.]{6,24}$/
const regexBeta = /^[a-zA-Z0-9@.]*$/
const regexChi = /^.{6,24}$/
const regexDelta = /^1\d{10}$/
const regexEta = /^\d{6}$/
// 长度为34位，由数字和字母构成，每4个字符为一组，每组都需要同时包含数字和字母，字母全部为大写，不限制每组数字和字母的个数，只要有就可以，一共7组，中间用-分隔，-也计算在长度内
const regexFix = /^((?=.*[A-Z])(?=.*\d)[A-Z0-9]{4}-){6}((?=.*[A-Z])(?=.*\d)[A-Z0-9]{4})$/
const alertMessage = ref(null)
const switchGreen = ref(false)
// let alertKeywords = props.type === 'username' ? '用户名' : '密码'
let alertKeywords = ''

const mapKeywords = (inputName) => {
  switch (inputName) {
    case 'username':
      alertKeywords = '账号'
      break
    case 'password':
      alertKeywords = '密码'
      break
    case 'repassword':
      alertKeywords = '重复密码'
      break
    case 'nickname':
      alertKeywords = '昵称'
      break
    case 'email':
      alertKeywords = '邮箱'
      break
    case 'phoneNumber':
      alertKeywords = '手机号'
      break
    case 'verificationCode':
      alertKeywords = '验证码'
      break
    case 'question':
      alertKeywords = '密保问题'
      break
    case 'answer':
      alertKeywords = '密保答案'
      break
    case 'inviteIdentifier':
      alertKeywords = '邀请码'
      break
    default:
      break
  }
}

// 聚焦校验
const handleInput = (event) => {
  switchGreen.value = false
  inputValue.value = event.target.value

  // 有内容输入时就清除错误提示
  if (inputValue.value) {
    alertMessage.value = ''
    emits('input')
  }

  // 账号（长度+规则）、密码（长度）统一校验逻辑
  if (props.name === 'username' || props.name === 'password' || props.name === 'repassword') {
    if (props.name === 'username' && !regexBeta.test(inputValue.value)) {
      alertMessage.value = alertKeywords + '不能包含除.和@以外的特殊字符'
    } else if (inputValue.value.length < 6) {
      alertMessage.value = alertKeywords + '太短'
    } else if (inputValue.value.length > 24) {
      alertMessage.value = alertKeywords + '太长'
    } else {
      // 满足条件无错误提示
      alertMessage.value = ''
      emits('submitBar:state', inputValue.value)
    }
  }

  if (props.name === 'phoneNumber' && inputValue.value.length === 11) {
    regexDelta.test(inputValue.value) ? emits('request', inputValue.value) : alertMessage.value = '这不是一个手机号'
    // return
  }

  if (props.name === 'phoneNumber' && !regexDelta.test(inputValue.value)) {
    emits('notPhoneNumber')
    // alertMessage.value = '这不是一个手机号'
  }

  if (props.name === 'verificationCode' && inputValue.value.length === 6) {
    regexEta.test(inputValue.value) ? emits('request', inputValue.value) : alertMessage.value = '验证码有误'
  }

  if (props.name === 'inviteIdentifier' && inputValue.value.length === 34) {
    regexFix.test(inputValue.value) ? emits('request', inputValue.value) : alertMessage.value = '无效邀请码'
  }
}

// 失焦校验
const updateInput = (event) => {
  inputValue.value = event.target.value
  // 非空校验
  if (!props.readonly && !inputValue.value && props.name !== 'inviteIdentifier') {
    alertMessage.value = alertKeywords + '不能为空'
  }
  if (!props.readonly && props.name === 'username' && regexAlpha.test(inputValue.value)) {
    emits('blur', inputValue.value)
  }
  if (!props.readonly && props.name === 'password' && regexChi.test(inputValue.value)) {
    emits('blur', inputValue.value)
  }
  if (!props.readonly && props.name === 'repassword' && regexChi.test(inputValue.value)) {
    emits('blur', inputValue.value)
    alertMessage.value = props.isMatch ? '' : '前后密码不匹配'
  }
  if (!props.readonly && props.name === 'phoneNumber' && regexDelta.test(inputValue.value)) {
    emits('blur', inputValue.value)
  }
  if (!props.readonly && props.name === 'phoneNumber' && inputValue.value.length > 0 && inputValue.value.length < 11) {
    alertMessage.value = '这不是一个手机号'
  }
  // if (!props.readonly && props.name === 'verificationCode' && inputValue.value.length === 6) {
  //     emits('blur', inputValue.value)
  // }
  if (!props.readonly && props.name === 'question' && regexChi.test(inputValue.value)) {
    emits('blur', inputValue.value)
  }
  if (!props.readonly && props.name === 'answer' && regexChi.test(inputValue.value)) {
    emits('blur', inputValue.value)
  }
  if (!props.readonly && props.name === 'verificationCode' && inputValue.value.length > 0 && inputValue.value.length < 6) {
    alertMessage.value = '验证码有误'
  }
}

// 用户名占用验证
watch(usernameResponseData, () => {
  if (props.name === 'username') {
    alertMessage.value = usernameResponseData.value.message
    switchGreen.value = usernameResponseData.value.code === 1
  }
}, {
  deep: true
})

// 验证码校验
watch(verificationCodeResponseData, () => {
  if (props.name === 'verificationCode') {
    alertMessage.value = verificationCodeResponseData.value.message
    switchGreen.value = verificationCodeResponseData.value.code === 1
  }
}, {
  deep: true
})

// 手机号是否已注册验证
watch(phoneNumberResponseData, () => {
  if (props.name === 'phoneNumber') {
    alertMessage.value = phoneNumberResponseData.value.message
    switchGreen.value = phoneNumberResponseData.value.code === 1
  }
}, {
  deep: true
})

// 邀请码验证
watch(inviteIdentifierResponseData, () => {
  if (props.name === 'inviteIdentifier') {
    alertMessage.value = inviteIdentifierResponseData.value.message
    switchGreen.value = inviteIdentifierResponseData.value.code === 1
  }
}, {
  deep: true
})

// 重复密码是否匹配
watch(props, () => {
  if (props.name === 'repassword') {
    alertMessage.value = props.isMatch ? '' : '前后密码不匹配'
  }
}, {
  deep: true
})

// 密保答案验证提示
watch(questionResponseData, () => {
  if (props.name === 'answer') {
    alertMessage.value = questionResponseData.value.message
    switchGreen.value = questionResponseData.value.code === 1
  }
}, {
  deep: true
})

// 清空input内容
const clearInput = () => {
  inputValue.value = ''
  alertMessage.value = ''
  switchGreen.value = false
  emits('clear', inputValue.value)
  emits('submitBar:state', inputValue.value)
  // event.stopPropagation()
}

// 回车失焦
const keydownEnter = (event) => {
  event.target.blur()
}

// 在password状态下的input切换显示或隐藏密码
const showPassword = ref(false)
// const inputeType = computed(() => showPassword.value ? 'text' : 'password')
const passwordDisplay = () => {
  showPassword.value = !showPassword.value
  domInput.value.type = showPassword.value ? 'text' : 'password'
}

onMounted(() => {
  // 进入页面自动聚焦到用户名input
  if (props.type === 'username') {
    domInput.value.focus()
  }

  // 判断input用途
  mapKeywords(props.name)
})
</script>

<template>
  <!-- <label :for="'input-' + inputName"> -->
  <!-- <label style="width: 100%;"> -->
  <label>
    <h5 style="text-align: left">
      <slot></slot>
    </h5>
<!--    <PanelAlert v-if="props.name === 'inviteIdentifier'" :switchGreen="switchGreen">{{ alertMessage }}</PanelAlert>-->
    <div class="flex-row-align-center position-relative" id="group-input">
      <input v-model="inputValue" @keydown.enter="keydownEnter" @input="handleInput" @blur="updateInput"
             ref="domInput" :type="type" :class="{ 'no-focus': readonly }" :tabindex="readonly ? -1 : 0"
             class="input-public" :name="name" :autocomplete="autocomplete" :required="required" :readonly="readonly"
             :maxlength="maxlength" :placeholder="placeholder">
      <div v-show="!(name === 'password' || name === 'repassword') && inputValue" class="position-absolute-left"
           id="void-placeholder"></div>

      <div @mousedown.prevent="passwordDisplay" v-show="type === 'password' && inputValue"
           class="icon-placeholder position-absolute-left">
        <div v-show="showPassword" class="flex-row-align-center icon-placeholder">
          <IconEyeClose></IconEyeClose>
        </div>
        <div v-show="!showPassword" class="flex-row-align-center icon-placeholder">
          <IconEyeOpen></IconEyeOpen>
        </div>
      </div>

      <div v-if="!readonly" @mousedown.prevent="clearInput" v-show="inputValue"
           class="flex-row-align-center icon-placeholder position-absolute-right">
        <IconXmark></IconXmark>
      </div>
    </div>
    <!-- <PanelAlert v-if="name === 'repassword'">{{ messageForRepassword }}</PanelAlert> -->
    <!-- <PanelAlert v-else :switchGreen="switchGreen">{{ alertMessage }}</PanelAlert> -->
<!--    <PanelAlert v-if="!(props.name === 'inviteIdentifier')" :switchGreen="switchGreen">{{ alertMessage }}-->
    <PanelAlert :switchGreen="switchGreen">{{ alertMessage }}
    </PanelAlert>
  </label>
</template>

<style scoped>
#group-input {
  background: var(--bgcolor-navigation);
  width: 100%;
  height: 2.37rem;
  box-shadow: none;
  border: 1px solid var(--color-border);
}

.input-public {
  flex: 1;
  background: none;
  border: none;

  height: 100%;

  /* font-size: 1.3rem; */
  color: var(--color-text);
  text-align: center;
}

#void-placeholder {
  background: var(--bgcolor-navigation);
  aspect-ratio: 1;
  height: 100%;
}

.icon-placeholder {
  background: var(--bgcolor-navigation);
  aspect-ratio: 1;
  height: 100%;
  justify-content: center;
  cursor: pointer;
}


@media (max-width: 430px) {
  #group-input {
    width: auto;
    flex-grow: 0;
    height: 2.3rem;
  }

  .input-public {
    /* flex-grow: 0; */
  }
}

/* @media (max-width: 390px) {} */

@media (max-width: 375px) {
}
</style>