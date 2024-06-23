<script setup>
import IconEyeClose from '@/components/module/IconEyeClose.vue'
import IconEyeOpen from '@/components/module/IconEyeOpen.vue'
import IconXmark from '@/components/module/IconXmark.vue'
// import IconTextPassword from '@/components/module/IconTextPassword.vue'
// import IconDotPassword from '@/components/module/IconDotPassword.vue'
import GroupPageHeader from '@/components/viewport/GroupPageHeader.vue'
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 注册按钮动画
const animateRun = ref(false)

// 显示/隐藏密码切换
const showPassword = ref(true)

const inputeType = computed(() => showPassword.value ? 'password' : 'text')

// 表单输入框、提交按钮
const form = ref({
    username: '',
    password: ''
})

const alertMessage = ref(null)
const alertMessageUsername = ref(null)
const alertMessagePassword = ref(null)

const domUsername = ref(null)
const domPassword = ref(null)

// 清空用户名/密码功能
const clearUsername = () => {
    form.value.username = ''
    domUsername.value.focus()
}

const clearPassword = () => {
    form.value.password = ''
    domPassword.value.focus()
}

// 表单验证
watch(form, () => {
    if (domUsername.value === document.activeElement) {
        if (form.value.username.length < 6) {
            alertMessageUsername.value = '用户名太短'
        } else if (form.value.username.length > 25) {
            alertMessageUsername.value = '用户名太长'
        } else {
            alertMessageUsername.value = ''
        }
    }

    if (domPassword.value === document.activeElement) {
        if (form.value.password.length < 6) {
            alertMessagePassword.value = '密码太短'
        } else if (form.value.password.length > 25) {
            alertMessagePassword.value = '密码太长'
        } else {
            alertMessagePassword.value = ''
        }
    }
}, {
    deep: true
})

const handleBlurUsername = () => {
    if (!form.value.username) {
        alertMessageUsername.value = '用户名不能为空'
    }
}
const handleBlurPassword = () => {
    if (!form.value.password) {
        alertMessagePassword.value = '密码不能为空'
    }
}

// 提交表单
const submitForm = async (data) => {
    console.log(data);

}

const handleSubmit = async (event) => {
    event.preventDefault()

    // 按钮动画
    animateRun.value = !animateRun.value
    // 表单验证
    console.log('表单数据：', form.value)
    //提交表单操作

    try {
        await submitForm(form)
        console.log('提交了表单', form);
        // test
        if (form.value.username === 'qweasd' && form.value.password === '123qwe') {
            router.push('/')
        } else if (form.value.username !== 'qweasd' || form.value.password !== '123qwe') {
            alertMessage.value = '账号或密码有误请重试'
            animateRun.value = false
        }
    } catch (error) {
        alert('wrong message')
    }
}

onMounted(() => {
    // 进入页面自动聚焦username输入框
    domUsername.value.focus()
})
</script>

<template>
    <TheLayout>
        <template #page-header>
            <GroupPageHeader style="border-bottom: none;">
                <template #page-title>
                    用户登录
                </template>
            </GroupPageHeader>
        </template>
        <template #page-main>
            <div class="container- wrapper flex-row-align-center">
                <!-- <form ref="formEl" action="#" class="flex-column" id="login-form-container"> -->
                <form @submit.prevent="handleSubmit" action="http://www.jd.com" class="flex-column"
                    id="login-form-container">

                    <div class="flex-column" id="login-form" method="get">
                        <label for="input-username">
                            <h3>账号</h3>
                            <div class="flex-row-align-center" id="group-username">
                                <div v-show="form.username" id="placeholder-container"></div>

                                <input ref="domUsername" @blur="handleBlurUsername" v-model="form.username" type="text"
                                    placeholder="" class="position-static" id="input-username" name="username"
                                    autocomplete="true">

                                <div @click="clearUsername" v-show="form.username" class="flex-row-align-center"
                                    id="xmark-container">
                                    <IconXmark></IconXmark>
                                </div>
                            </div>

                            <div class="alert-container">
                                <span class="alert" id="alert-username-message">
                                    {{ alertMessageUsername }}
                                </span>
                            </div>
                        </label>

                        <label for="input-password">
                            <h3>密码</h3>
                            <div class="flex-row-align-center" id="group-password">
                                <div @click="showPassword = !showPassword" v-show="!showPassword && form.password"
                                    class="flex-row-align-center" id="hide-password">
                                    <IconEyeClose></IconEyeClose>
                                </div>
                                <div @click="showPassword = !showPassword" v-show="showPassword && form.password"
                                    class="flex-row-align-center" id="show-password">
                                    <IconEyeOpen></IconEyeOpen>
                                </div>

                                <input ref="domPassword" @blur="handleBlurPassword" v-model="form.password"
                                    :type="inputeType" placeholder="" class="position-static" id="input-password"
                                    name="password" autocomplete="true">

                                <div @click="clearPassword" v-show="form.password" class="flex-row-align-center"
                                    id="xmark-container">
                                    <IconXmark></IconXmark>
                                </div>
                            </div>

                            <div class="alert-container">
                                <span class="alert" id="alert-password-message">
                                    {{ alertMessagePassword }}
                                </span>
                            </div>
                        </label>


                        <div class="alert" id="alert-message">
                            <span>{{ alertMessage }}</span>
                        </div>

                        <!-- <div>
                            <h3>验证码</h3>
                            <input type="text" placeholder="" id="check-code">
                            <div>4f3s</div>
                        </div> -->

                        <div @click="handleSubmit" class="login-button" type="button">
                            <div id="login-background"></div>
                            <div :class="{ 'animate-active': animateRun }" id="login-center-layer"></div>
                            <span v-if="!animateRun" class="login-button">登录</span>
                            <span v-else class="login-button">登录中</span>
                            <div id="button-active"></div>
                        </div>

                        <div class="flex-row-align-center" id="login-form-footer">
                            <a @click="$router.push('/')" id="reset-password">忘记密码</a>
                            <a @click="$router.push('/register')" id="redirection">没有账号？去注册</a>
                        </div>
                    </div>
                </form>
            </div>
        </template>
    </TheLayout>
</template>

<style scoped>
#login-form-container {
    margin: 0 auto;

    background: var(--color-gear-backgroud);
    width: 850px;
    /* width: 77%; */
    /* height: 50%; */
    border-radius: 0.5rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);

    padding: 3rem 7rem;

    user-select: none;
}

#login-form {
    /* width: 500px; */
    width: 60%;
    height: 500px;
    margin: 0 auto;

    justify-content: space-between;
}

#group-username,
#group-password,
#check-code {
    background: var(--bgcolor-navigation);
    width: 100%;
    height: 3.7rem;
    box-shadow: none;
    border: 1px solid var(--color-border);

    /* padding-left: 1rem; */

}

#input-username,
#input-password {
    flex: 1;
    background: none;
    border: none;

    /* width: 100%; */
    height: 3.7rem;

    font-size: 1.3rem;
    color: var(--color-text);
    text-align: center;
}

input:focus {
    outline: none;
    /* border: none; */
    /* box-shadow: none; */
    border: 2px solid silver;

}

#password-title {
    justify-content: space-between;
}

#placeholder-container,
#xmark-container,
#hide-password,
#show-password {
    aspect-ratio: 1;
    height: 100%;
    justify-content: center;
    cursor: pointer;
    /* background: red; */
}

/* #show-password,
#hide-password {
    display: flex;
    align-items: center;
} */

/* input[type="checkbox"] {
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 0;
    background: var(--bgcolor-navigation);
    border: 1px solid var(--color-border);
} */

/* input[type="checkbox"]:indeterminate::before {
    content: 'T';
} */

/* input[type="checkbox"]:checked {
    border: 1px solid red;
} */

/* input[type="checkbox"]:checked:before { */
/* content: '·'; */
/* 可以自定义选中状态下的内容 */
/* opacity: 1; */
/* width: 14px;
    height: 14px;
    background: var(--bgcolor-navigation);
    border: 1px solid var(--color-border); */
/* } */

.alert-container {
    width: 100%;
    height: 1.77rem;
}

#alert-message {
    width: 100%;
    height: 5.7rem;
    /* text-align: center; */
}

.login-button {
    width: 100%;
    height: 4.3rem;
    position: relative;
    /* position: relative; */
    /* display: flex; */
    cursor: pointer;

    z-index: 5;

    overflow: hidden;

    text-align: center;
    line-height: 4.3rem;
    color: var(--c-text-dark-2);
    font-size: 1.3rem;
    font-weight: bold;
}

#login-background {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    /* background: -webkit-linear-gradient(right, #e48356, #ea5601, #e48356, #ea5601); */
    /* background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea); */
    /* background: var(--c-theme-wowtw); */
    background: var(--c-blue);
}

#login-center-layer {
    width: 100%;
    height: 100%;
    position: absolute;
    left: -77%;
    background: -webkit-linear-gradient(left, var(--c-blue), var(--c-theme-wowtw), var(--c-blue));
    transition: all 0.3s;

}

.animate-active {
    /* transform: translateX(150%); */
    animation: active 1.7s infinite;
}

#show-password *,
#hide-password * {
    cursor: pointer;
}

#button-active {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    /* background-color: #fff; */
}

@keyframes active {
    0% {
        /* transform: translateX(154%); */
        /* left: -77% */
        left: -77%;
    }

    50% {
        /* transform: translateX(154%); */
        left: 77%;
    }

    100% {
        /* transform: translateX(-38.5%); */
        left: -77%
    }
}

.login-button:active {
    transform: scale(99%);
}

.login-button:active #button-active {
    background: rgba(255, 255, 255, 0.3)
}

#show-password label {
    padding-right: 1rem;
    line-height: 3rem;
}

#login-form-footer {
    justify-content: space-between;
}

#reset-password,
#redirection {
    /* line-height: 2.3rem; */
}

/* #login-form-container {
    margin: 0 auto;

    background: var(--color-gear-backgroud);
    width: 850px;
    border-radius: 0.5rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);

    padding: 3rem 7rem;

    user-select: none;
}

#login-form {
    width: 60%;
    height: 500px;
    margin: 0 auto;

    justify-content: space-between;
} */

@media (max-width: 1180px) {
    #login-form-container {
        /* width: 90%; */
        padding: 3rem 0;
    }

    #login-form {
        /* margin: auto; */
        /* width: 70%; */
        height: 430px;
    }

    #alert-message {
        height: 3.7rem;
    }
}

@media (orientation: landscape) and (max-width: 1180px) {
    .container- {
        padding-top: 0;
    }
}

@media (max-width: 1024px) {
    #page-head-container {
        min-height: 3.3rem;
    }

    #login-form-container {
        /* width: 90%; */
        padding: 2.3rem 0;
    }

    #login-form {
        /* margin: auto; */
        /* width: 70%; */
        height: 400px;
    }
}

@media (max-width: 820px) {
    #login-form-container {
        width: 90%;
        padding: 3rem 0rem;
    }

    #login-form {
        /* margin: auto; */
        /* width: 70%; */
        width: 27rem;
    }
}

@media (max-width: 620px) {
    #login-form-container {
        width: 100%;
    }

    /* #login-form {} */
}

@media (max-width: 500px) {
    #login-form {
        width: 80%;
    }
}

@media (max-width: 430px) {
    #login-form-container {
        width: 100%;
        padding: 2rem 0;
    }

    #login-form {
        width: 87%;
        height: 37vh;
    }

    #group-username,
    #group-password,
    #check-code {
        /* width: 100%; */
        height: 3rem;
    }

    #input-username,
    #input-password {
        height: 3rem;
        font-size: 1rem;
    }

    #alert-message {
        height: 2.3rem;
    }

    .login-button {
        height: 3.3rem;
        line-height: 3.3rem;
        font-size: 1.13rem;
    }

    span,
    a {
        font-size: 0.9rem;
    }

    h3 {
        font-size: 1rem;
    }
}

@media (max-width: 390px) {
    #login-form {
        width: 90%;
        height: 40vh;
    }
}

@media (max-width: 375px) {
    .container- {
        padding-top: 0;
    }

    #login-form-container {
        padding: 1rem 0rem;
    }

    #login-form {
        width: 90%;
        height: 47vh;
    }
}
</style>
