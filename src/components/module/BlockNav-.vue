<script setup>
import BlockUserInfo from './BlockUserInfo.vue'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
// import BarSchemeMode from './BarSchemeMode.vue'

const userStore = useUserStore()
const router = useRouter()

const quit = () => {
    userStore.dropToken()
    userStore.isLogin = false
    router.push('/')

}
</script>

<template>
    <!-- 按钮导航 -->
    <div id="bar-navigation">
        <div id="bars-left">
            <RouterLink :to="`/`">首页</RouterLink>
            <RouterLink :to="`/prompt`">指引</RouterLink>
            <RouterLink :to="`/gear`">装配</RouterLink>
            <!-- <RouterLink :to="`/match`">竞速赛</RouterLink> -->
            <!-- <RouterLink :to="`/shop`">地精商店</RouterLink> -->
        </div>

        <div id="bars-right">
            <div v-if="!userStore.isLogin">
                <RouterLink :to="`/register`">注册</RouterLink>
                <RouterLink :to="`/login`">登录</RouterLink>
            </div>
            <div v-else>
                <BlockUserInfo>
                    <template #avatar>
                        <img src="@/assets/legends/grandfathered.webp">
                    </template>
                    <template #nickname>
                        凑足七个字六七
                    </template>
                </BlockUserInfo>
                <RouterLink :to="`/private`">个人中心</RouterLink>
                <RouterLink :to="`/donation`">捐助此站</RouterLink>
                <div @click="quit">退出</div>
            </div>
            <!-- <BarSchemeMode></BarSchemeMode> -->
        </div>
    </div>

    <!-- 列表导航 -->


</template>

<style scoped>
#bar-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.left,
.right,
.stranger,
.visitor {
    display: flex;
    align-items: center;
}
</style>
