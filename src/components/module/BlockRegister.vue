<script setup>
import {provide, reactive, ref, watch} from 'vue'
import {useRouter} from 'vue-router'
import InputPublic from './InputPublic.vue'
import BarGetCode from './BarGetCode.vue'
import QRCodeGenerator from "@/components/module/QRCodeGenerator.vue"
import BarFormSubmit from './BarFormSubmit.vue'
import PanelFormFooter from './PanelFormFooter.vue'
import {
  checkIdentifierService,
  codeVerifyService,
  phoneNumberService,
  smsService,
  usernameService,
  userRegisterService,
} from '@/apis/user'
import {cancelPaymentService, createOrderService, queryPaymentService} from '@/apis/order'
import PanelAlert from "@/components/module/PanelAlert.vue";


const router = useRouter()
// 绑定form表单dom
const registerForm = ref(null)
// 触发提交按钮动画的开关
const submitAnimateRun = ref(false)
const messageForButton = ref(null)
// 验证码消息
const verificationCodeResponseData = ref(null)

const registerFormData = reactive({
  count: {value: 0, state: 1},
  username: {value: '', state: 0},
  password: {value: '', state: 0},
  repassword: {value: '', state: 0},
  question: {value: '', state: 0},
  answer: {value: '', state: 0},
  phoneNumber: {value: '', state: 0},
  verificationCode: {value: '', state: 0},
  inviteIdentifier: {value: '', state: 0},
  paymentInfo: {value: '', state: -1}
})

const {
  count,
  username,
  password,
  repassword,
  question,
  answer,
  phoneNumber,
  verificationCode,
  inviteIdentifier,
  paymentInfo
} = registerFormData

const passport = ref(false)

const alertMessageInput = ref(null)

// 发送验证码bar状态
const barSmsState = ref(0)

// 用于判断数据是否更新
let isUsernameUpdated = false
let isPhoneNumberUpdated = false

// 用于判断前后密码是否匹配
const isMatch = ref(true);

// 用于存储响应结果数据
const usernameResponseData = ref(null)
const phoneNumberResponseData = ref(null)
const inviteIdentifierResponseData = ref(null)

// 传递给input组件的provide都在这里
provide('usernameVerifyResponse', usernameResponseData)
provide('phoneNumberVerifyResponse', phoneNumberResponseData)
provide('codeVerifyResponse', verificationCodeResponseData)
provide('inviteIdentifierResponseData', inviteIdentifierResponseData)

// form数据更新方法
const updateUsername = (inputValue) => {
  username.value = inputValue
  count.value++
  isUsernameUpdated = true
}
const matchPassword = () => {
  isMatch.value = password.value === repassword.value
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
const updatePhoneNumber = (inputValue) => {
  phoneNumber.value = inputValue
  count.value++
  isPhoneNumberUpdated = true
}
// 清空input
const clearUserName = (value) => {
  username.value = value
  username.state = 0
}
const clearPassword = (value) => {
  password.value = value
  password.state = 0
}
const clearRePassword = (value) => {
  repassword.value = value
  repassword.state = 0
}
const clearQuestion = (value) => {
  question.value = value
  question.state = 0
}
const clearAnswer = (value) => {
  answer.value = value
  answer.state = 0
}
const clearPhoneNumber = (value) => {
  phoneNumber.value = value
  phoneNumber.state = 0
}
const clearVerificationCode = (value) => {
  verificationCode.value = value
  verificationCode.state = 0
}
const clearInviteIdentifier = (value) => {
  inviteIdentifier.value = value
  inviteIdentifier.state = 0
}
const notPhoneNumber = () => {
  phoneNumber.value = ''
  phoneNumber.state = 0
}
const updateQuestion = (inputValue) => {
  question.value = inputValue
  question.state = 1
}
const updateAnswer = (inputValue) => {
  answer.value = inputValue
  answer.state = 1
}

// 短信验证码发送请求
const codeVerifyPassport = ref(false)
const handleSms = async () => {
  // console.log(phoneNumber.state, barSmsState.value);
  if (phoneNumber.state === 1 && !isPhoneNumberUpdated && barSmsState.value === 0) {
    // console.log(phoneNumber.value, '发送发送验证码请求')
    await smsService(phoneNumber.value)
    barSmsState.value = 1
    codeVerifyPassport.value = true
  }
}

// 短信验证码校验请求
const handleCodeVerify = async (inputValue) => {
  if (phoneNumber.state === 1) {
    verificationCode.value = inputValue
    const result = await codeVerifyService(phoneNumber.value, verificationCode.value)
    verificationCodeResponseData.value = result.data
    verificationCode.state = result.data.code
  }
}

// 提交按钮状态配合项
const updateBarState = (newValue) => {
  barSmsState.value = newValue
  isPhoneNumberUpdated = false
}

// 用户名占用、手机号是否可用
watch(() => registerFormData.username.value, async () => {
  if (username.value && isUsernameUpdated) {
    const result = await usernameService(username.value)
    usernameResponseData.value = result.data
    isUsernameUpdated = false
    username.state = result.data.code
  }
})
watch(() => registerFormData.phoneNumber.value, async () => {
  if (phoneNumber.value && isPhoneNumberUpdated) {
    // console.log('发送电话号码验证请求')
    const result = await phoneNumberService(phoneNumber.value)
    phoneNumberResponseData.value = result.data
    isPhoneNumberUpdated = false
    phoneNumber.state = result.data.code
  }
})

// 邀请码验证请求
const handleInviteIdentifier = async (inputValue) => {
  const result = await checkIdentifierService(inputValue)
  inviteIdentifierResponseData.value = result.data
  if (result.data.code === 1) {
    inviteIdentifier.value = inputValue
  }
  inviteIdentifier.state = result.data.code
}

// 支付宝二维码生成
const outTradeNo = ref(null)
const alipayQRCodeContent = ref(null)
// 存储轮询任务的标识符
/** @type {import('vue').Ref<number | null>} */
const intervalId = ref(0)

// 支付剩余时间
// 定义倒计时初始值
const initialCountdown = 180

// 定义倒计时状态
const payCountdown = ref(initialCountdown)
const isCounting = ref(false)

let payIntervalId = null

const createOrder = async () => {
  const result = await createOrderService(phoneNumber.value, inviteIdentifier.value)
  // console.log('请求预创建订单返回数据', result)
  alipayQRCodeContent.value = result.data.data.alipayQRCode
  // console.log('支付二维码链接', alipayQRCodeContent.value)
  outTradeNo.value = result.data.data.outTradeNo
  console.log("当前订单号：", outTradeNo.value)
  paymentInfo.state = -1

  setTimeout(async () => {
    paymentPollQuery(outTradeNo.value)
  }, 7000)
}

// 支付状态轮询
const paymentPollQuery = (outTradeNo) => {
  if (intervalId.value) {
    clearInterval(intervalId.value); // 清除之前的轮询任务
  }
  let retries = 0;
  const maxRetries = 10;

  intervalId.value = setInterval(async () => {
    const result = await queryPaymentService(outTradeNo)
    const tradeStatus = result.data.data

    if (tradeStatus === 'TRADE_SUCCESS') {
      clearInterval(intervalId.value)
      intervalId.value = null; // 清空轮询标识符
      // 处理支付成功逻辑
      paymentInfo.value = outTradeNo
      paymentInfo.state = 1
    } else if (tradeStatus === 'TRADE_CLOSED') {
      clearInterval(intervalId.value);
      intervalId.value = null; // 清空轮询标识符
      // 处理支付失败或关闭逻辑
      paymentInfo.state = 0
    } else {
      retries++;
      if (retries >= maxRetries) {
        clearInterval(intervalId.value)
        intervalId.value = null; // 清空轮询标识符

        // 开始支付倒计时
        isCounting.value = true
        payIntervalId = setInterval(() => {
          if (payCountdown.value > 0) {
            payCountdown.value--
          } else {
            clearInterval(payIntervalId)
            payCountdown.value = initialCountdown
            isCounting.value = false
          }
        }, 1000)


        // 设置3分钟后的最终检查
        setTimeout(async () => {
          const finalResult = await queryPaymentService(outTradeNo)
          const finalTradeStatus = finalResult.data.data;

          if (finalTradeStatus === 'TRADE_SUCCESS') {
            // console.log("支付成功！感谢您的支持！")
            // 处理支付成功逻辑
            paymentInfo.value = outTradeNo
            paymentInfo.state = 1
          } else {
            await cancelPaymentService(outTradeNo)
            // console.log("支付时间超时，交易已关闭")
            paymentInfo.state = 0
          }
        }, 180000); // 3分钟后进行最终检查
      }
    }
  }, 5000); // 每5秒查询一次
}

// 创建订单生成二维码
watch(() => ({
  phoneNumber: registerFormData.phoneNumber,
  verificationCode: registerFormData.verificationCode,
  inviteIdentifier: registerFormData.inviteIdentifier
}), async () => {
  const conditionI = phoneNumber.value && phoneNumber.state === 1
  const conditionII = verificationCode.value && verificationCode.state === 1
  const conditionIII = !inviteIdentifier.value && inviteIdentifier.state === 0
  const conditionIV = inviteIdentifier.value && inviteIdentifier.state === 1
  const fullPayPassport = conditionI && conditionII && conditionIII
  const discountPassport = conditionI && conditionII && conditionIV

  // 没有邀请码
  if (fullPayPassport) {
    if (outTradeNo.value) {
      // console.log("准备取消前面的订单:", outTradeNo.value)
      await cancelPaymentService(outTradeNo.value)
      // console.log("有新二维码取消前面的订单", cancelPastTrade)
      paymentInfo.state = -1
    }
    await createOrder()
  }

  // 有邀请码
  if (discountPassport) {
    if (outTradeNo.value) {
      // console.log("准备取消前面的订单:", outTradeNo.value);
      await cancelPaymentService(outTradeNo.value)
      // console.log("有新二维码取消前面的订单", cancelPastTrade)
      paymentInfo.state = -1
    }
    await createOrder()
  }
}, {
  deep: true
})

// 检查state是不是都是1
watch(registerFormData, () => {
  console.log("表单实时数据:", registerFormData)
  passport.value = Object.entries(registerFormData)
      .filter(([key]) => key !== 'inviteIdentifier' && key !== 'paymentInfo') // 过滤掉 inviteIdentifier 和 paymentInfo
      .every(([, field]) => field.state === 1)
}, {
  deep: true
})

// 支付状态提示消息
const switchGreen = ref(false)
const paymentAlert = ref('')
watch(() => registerFormData.paymentInfo.state, () => {
  if (paymentInfo.state === 1) {
    switchGreen.value = true
    paymentAlert.value = '支付成功，感谢您的支持！请点击提交完成注册'
  }
  if (paymentInfo.state === 0) {
    switchGreen.value = false
    paymentAlert.value = '订单已过期，请刷新页面重新填写表单！'
  }
})

// 提交表单
const handleSubmit = async () => {
  const paymentStatus = await queryPaymentService(outTradeNo.value)
  const finalTradeStatus = paymentStatus.data.data
  const finalMessage = paymentStatus.data.message

  if (finalTradeStatus === 'TRADE_SUCCESS') {
    if (intervalId.value) {
      clearInterval(intervalId.value); // 清除之前的轮询任务
    }
    // console.log("支付成功")
    // 处理支付成功逻辑
    paymentInfo.value = outTradeNo.value
    paymentInfo.state = 1

    // 把要提交的字段重新打包，别写到方法外面去了
    const submitData = {
      username: username.value,
      password: password.value,
      phoneNumber: phoneNumber.value,
      question: question.value,
      answer: answer.value,
      avatar: '/avatar/rabbit1.webp',
      nickname: '时光漫游靓仔',
      inviteIdentifier: inviteIdentifier.value,
      paymentInfo: paymentInfo.value
    }

    // console.log("=====提交的数据=====", submitData)

    clearInterval(payIntervalId)
    payCountdown.value = initialCountdown
    isCounting.value = false


    if (passport.value && submitAnimateRun.value === false) {
      // console.log('表单提交了', submitData);
      submitAnimateRun.value = !submitAnimateRun.value
      const result = await userRegisterService(submitData)
      // alertMessageInput.value = '注册成功，即将跳转'

        // 注册成功，即将跳转
        if (result.data.code === 1) {
          messageForButton.value = result.data.message
          await router.push('/login')
        }
        // 注册失败，请重试
        if (result.data.code === 0) {
          messageForButton.value = result.data.data ? result.data.data : result.data.message
        }
    }
  } else if (finalMessage === '支付超时，订单已关闭' || paymentInfo.state === 0) {
    switchGreen.value = false
    paymentAlert.value = '订单已过期，请刷新页面重新填写表单！'
  } else {
    console.log("还没有付款")
    switchGreen.value = false
    paymentAlert.value = '请完成支付后再试'
  }
}

const handleEnter = (event) => {
  event.target.blur()
  handleSubmit()
}
</script>

<template>
  <div class="container- wrapper flex-row-align-center">
    <form @submit.prevent="handleSubmit" ref="registerForm" class="flex-column space-evenly"
          id="register-form-container">
      <div id="register-form-input">
        <!--账号-->
        <InputPublic :alertMessageInput="alertMessageInput" @clear="clearUserName" @keydown.enter="handleEnter"
                     @blur="updateUsername"
                     autocomplete="true" type="text" name="username" :maxlength="24">
          账号
        </InputPublic>
        <div class="placeholder"></div>
        <!--密码-->
        <InputPublic @clear="clearPassword" @keydown.enter="handleEnter" @blur="updatePassword" :isMatch="isMatch"
                     autocomplete="true"
                     type="password" name="password" :maxlength="24">密码
        </InputPublic>
        <!--重复密码-->
        <InputPublic @clear="clearRePassword" @keydown.enter="handleEnter" @blur="updateRepassword" :isMatch="isMatch"
                     type="password"
                     name="repassword" :maxlength="24">
          重复密码
        </InputPublic>
        <!--问题-->
        <InputPublic @clear="clearQuestion" @keydown.enter="handleEnter" @blur="updateQuestion" type="text"
                     name="question" :maxlength="24">
          密保问题
        </InputPublic>
        <!--答案-->
        <InputPublic @clear="clearAnswer" @keydown.enter="handleEnter" @blur="updateAnswer" type="text" name="answer" :maxlength="24">
          密保答案
        </InputPublic>
        <!--手机号-->
        <InputPublic @clear="clearPhoneNumber" @keydown.enter="handleEnter" @request="updatePhoneNumber"
                     @notPhoneNumber="notPhoneNumber" type="text" name="phoneNumber" :maxlength="11">手机号码
        </InputPublic>
        <!--验证码-->
        <div class="flex-row-align-center" id="verification-get-bar-container">
          <InputPublic @clear="clearVerificationCode" @keydown.enter="handleEnter" @request="handleCodeVerify"
                       type="text" name="verificationCode"
                       :maxlength="6" style="flex: 1;">
            验证码
          </InputPublic>
          <!--获取验证码按钮-->
          <BarGetCode @updateBarState="updateBarState" :phoneNumberState="phoneNumber.state" @click="handleSms">
          </BarGetCode>
        </div>
      </div>
      <TheDivider></TheDivider>
      <!--支付部分-->
      <div id="payment-container">
        <div class="flex-column space-between" id="payment-tips">
          <!--邀请码-->
          <InputPublic @clear="clearInviteIdentifier" @request="handleInviteIdentifier" :maxlength="34"
                       name="inviteIdentifier"
                       placeholder="邀请码（选填）">
          </InputPublic>
        </div>
        <div class="flex-center-center" id="payment-code">
          <div class="flex-center-center" id="qrcode-container">
            <QRCodeGenerator :alipayQRCodeContent="alipayQRCodeContent"
                             :paymentInfo="paymentInfo.state"></QRCodeGenerator>
          </div>
        </div>
        <PanelAlert :switch-green="switchGreen">{{ paymentAlert }}</PanelAlert>


        <ul style="font-size: 12px;" id="payment-announcement">
          <li v-if="!isCounting">请先完成支付再提交。</li>
          <li v-else>订单剩余有效时间：{{ payCountdown }}秒。</li>
          <li>本站会员价格为人民币420元，使用邀请码价格为390元。付款方式仅支持<span style="color: var(--c-blue);font-size: 0.87rem;font-style: italic; font-weight: bold;">支付宝</span>。</li>
          <li>
            注册后，系统会自动为用户生成专属邀请码，使用邀请码邀请好友注册为会员，你将获得30元返现，邀请码使用次数无限制，返现收益系统统计后于每月初发放。
          </li>
        </ul>
      </div>
      <TheDivider></TheDivider>
      <BarFormSubmit @keydown.enter="handleEnter" @click="handleSubmit" :barState="passport"
                     :messageForButton="messageForButton" :submitAnimateRun="submitAnimateRun" type="register">
      </BarFormSubmit>
      <PanelFormFooter></PanelFormFooter>
    </form>
  </div>
</template>

<style scoped>
.container- {
  margin-bottom: 7rem;
}

#register-form-container {
  margin: 0 auto;

  background: var(--color-gear-backgroud);
  width: 850px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);

  padding: 3rem 7rem;

  user-select: none;
}

#register-form-input {
  display: grid;
  grid-template-columns:  repeat(2, 1fr);
  column-gap: 3rem;
}

#payment-container {
  margin-top: 1rem;
}

#payment-announcement {
  text-align: left;
}

#payment-code {
  place-self: center;
  border: 1px solid var(--color-border);
  margin-top: 0.7rem;
}

#qrcode-container {
  width: 150px;
  height: 150px;
  margin: 1rem;
}

@media (max-width: 820px) {
  #register-form-container {
    width: 100%;
    padding: 3rem 3rem;
  }

  .wrapper {
    width: 100%;
  }
}

@media (max-width: 760px) {
  #register-form-container {
    width: auto;
  }

  #register-form-input {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 550px) {
  #register-form-container {
    width: auto;
    padding: 3rem;
  }

  #register-form-input {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 430px) {
  #register-form-container {
    padding: 3rem 1.7rem;
  }
}
</style>
