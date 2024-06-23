<script setup>
import { ref } from 'vue'

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
    // emits('updatephoneNumberState', 1)

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
        class="flex-center-center" id="bar-get-code">
        <span v-if="!isCounting">获取验证码</span>
        <span v-else>{{ countdown }}</span>
    </div>
</template>

<style scoped>
#bar-get-code {
    /* background: var(--c-gray); */
    /* background: var(--color-border); */
    /* color: gray; */
    height: calc(2.37rem - 2px);
    padding: 0 1rem;
    /* cursor: pointer; */
    /* border: 1px solid var(--color-border); */
    margin-left: 3rem;
    font-size: 12px;
}

#bar-get-code * {
    cursor: inherit;
}


@media (max-width: 430px) {
    #bar-get-code {
        /* flex: 1; */
        height: calc(2.7rem - 1px);
        /* min-width: 97px; */
        padding: 0 0.7rem;
        margin-left: 1rem;
        font-size: 11px;
    }
}

/* @media (max-width: 390px) {} */

@media (max-width: 375px) {}
</style>