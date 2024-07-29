<script setup>
import {ref} from 'vue'
import BarAvatar from './BarAvatar.vue'
import DialogModal from './DialogModal.vue'
import {useSwitchStore} from '@/stores/switch'
import {storeToRefs} from 'pinia'
import {useUserStore} from '@/stores'
import {useRouter} from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const {currenBoolean} = storeToRefs(useSwitchStore())
const {toggleBoolean} = useSwitchStore()

const isModalOpen = ref(false)
const target = ref('')

const confirm = () => {
  if (target.value === 'quitBar') {
    userStore.dropToken()
    userStore.isLogin = false
    router.push('/')
    isModalOpen.value = false
  }
}

const openModal = (value) => {
  isModalOpen.value = true
  target.value = value
}
</script>

<template>
  <div v-if="currenBoolean" class="list-navigation-container">
    <div class="flex-grow">
      <div v-if="userStore.isLogin" class="flex-row-align-center justify-center" id="list-header">
        <BarAvatar @click="openModal('avatar')" :url="userStore.userAvatar"></BarAvatar>
        <div @click="openModal('nickname')" class="custom-button" id="nickname">{{ userStore.nickname }}</div>
      </div>

      <div id="list-navigation">
        <RouterLink v-if="!userStore.isLogin" @click="toggleBoolean" :to="`/register`">注册</RouterLink>
        <RouterLink v-if="!userStore.isLogin" @click="toggleBoolean" :to="`/login`">登录</RouterLink>
        <RouterLink @click="toggleBoolean" :to="`/`">首页</RouterLink>
        <RouterLink @click="toggleBoolean" :to="`/prompt`">指引</RouterLink>
        <RouterLink @click="toggleBoolean" :to="`/gear`">装配</RouterLink>
        <RouterLink @click="toggleBoolean" :to="`/match`">漫游杯</RouterLink>
        <RouterLink @click="toggleBoolean" :to="`/rank`">漫游榜</RouterLink>
        <!-- <RouterLink @click="toggleBoolean" :to="`/shop`">地精商店</RouterLink> -->
        <div v-if="userStore.isLogin" @click="openModal('identifier')" class="custom-button" id="generate-identifier">
          邀请码
        </div>
        <RouterLink v-if="userStore.isLogin" @click="toggleBoolean" :to="`/resetpassword`">重置密码</RouterLink>
        <div v-if="userStore.isLogin" @click="openModal('quitBar')" class="custom-button" id="quit-button">退出</div>
      </div>
    </div>
  </div>

  <DialogModal :isOpen="isModalOpen" @update:isOpen="isModalOpen = $event" @update:confirm="confirm">
    <div v-if="target === 'quitBar'" class="text-center slot-content">
      <h3>退出确认</h3>
      <p class="padding-mini">勇士，你确定要退出时光漫游吗？</p>
    </div>

    <div v-if="target === 'nickname'" class="text-center slot-content">
      <h3>修改昵称</h3>
      <p class="padding-mini">昵称只能修改一次，请谨慎操作</p>
    </div>

    <div v-if="target === 'avatar'" class="text-center slot-content">
      <h3>修改头像</h3>
      <p class="padding-mini">勇士，你确定要退出时光漫游吗？</p>
    </div>
  </DialogModal>
</template>

<style scoped>
.list-navigation-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 47px 0 1.7rem 0;
  background: var(--color-background-mute);

  font-size: 1rem;
  font-weight: bold;

  z-index: 6;
}

#list-header {
  padding: 1.3rem;
}

#list-navigation {
  width: 90%;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-border);
}

#list-navigation * {
  width: 100%;
  padding: 1.3rem;
  border-bottom: 1px solid var(--color-border);
  text-align: center;
}

</style>