<script setup>
import {ref} from 'vue'

const props = defineProps({
  phoneNumberState: Number
})

const emits = defineEmits(['updateBarState'])

// 定义倒计时初始值
const initialCountdown = 90

// 定义倒计时状态
const countdown = ref(initialCountdown)
const isCounting = ref(false)

let intervalId = null

// 开始倒计时
const startCountdown = () => {
  if (isCounting.value || props.phoneNumberState === 0) return

  isCounting.value = true
  intervalId = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--
    } else {
      clearInterval(intervalId)
      countdown.value = initialCountdown
      isCounting.value = false
      emits('updateBarState', 0)
    }
  }, 1000)
}
</script>

<template>
  <div @click="startCountdown"
       :class="{ 'bar-useable': phoneNumberState === 1 && !isCounting, 'bar-unuseable': phoneNumberState === 0 || isCounting }"
       class="flex-center-center no-wrap" id="bar-get-code">
    <span v-if="!isCounting">获取</span>
    <span v-else>{{ countdown }}</span>
  </div>
</template>

<style scoped>
#bar-get-code {
  height: 2.37rem;
  //height: calc(2.37rem - 2px);
  padding: 0 1rem;
  font-size: 0.87rem;
  width: 52px;
}

#bar-get-code * {
  cursor: inherit;
}
</style>