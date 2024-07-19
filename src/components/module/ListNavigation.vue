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
const target = ref(false)

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
    <div id="list-navigation">
      <div class="flex-row-align-center">
        <BarAvatar @click="openModal('avatar')"></BarAvatar>
        <div @click="openModal('nickname')" class="custom-button" id="nickname">MCYP</div>
      </div>
      <RouterLink @click="toggleBoolean" :to="`/`">首页</RouterLink>
      <RouterLink @click="toggleBoolean" :to="`/prompt`">指引</RouterLink>
      <RouterLink @click="toggleBoolean" :to="`/gear`">装配</RouterLink>
      <RouterLink @click="toggleBoolean" :to="`/match`">竞速赛</RouterLink>
      <!-- <RouterLink @click="toggleBoolean" :to="`/shop`">地精商店</RouterLink> -->
      <div v-if="userStore.isLogin" class="custom-button" id="quit-button" @click="quit">退出</div>
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

  z-index: 6;
}

#list-navigation {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: bold;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#list-navigation a,
#quit-button,
#userinfo-container {
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 0.7rem;
  border-bottom: 1px solid var(--color-border);
}

@media (orientation: portrait) {
  #list-navigation {
    padding-top: 3rem;
    padding-bottom: 1.7rem;
  }

  #userinfo-container {
    margin-bottom: 3.3rem;
  }

  #quit-button {
    margin-top: 3.3rem;
  }
}

@media (orientation: landscape) {
  .list-navigation-container {
    padding: 37px 0 17px 0;
  }

  #list-navigation {
    font-size: 0.87rem;
  }
}
</style>