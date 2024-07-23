<script setup>
import { inject } from 'vue'

const formType = inject('formType')

const linkKeyWords = formType === 'login' ? ['没有账号？去注册', '忘记密码', true, '/register', '/resetpassword'] : ['有账号？去登录', '', false, '/login']

</script>

<template>
    <div class="flex-row-align-center" id="form-footer">
        <a @click="$router.push(linkKeyWords[3])" id="redirection">{{ linkKeyWords[0] }}</a>
        <a @click="$router.push(linkKeyWords[4])" id="reset-password">{{ linkKeyWords[1] }}</a>
    </div>
</template>

<style scoped>
#form-footer {
    justify-content: space-between;
    font-size: 0.87rem;
    padding: 1rem 0;
}
</style>
