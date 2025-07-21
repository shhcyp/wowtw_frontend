<script setup>
import {onMounted, onUnmounted, ref} from 'vue'
import BarAvatar from './BarAvatar.vue'
import DialogModal from './DialogModal.vue'
import {useSwitchStore} from '@/stores/switch'
import {storeToRefs} from 'pinia'
import {useAvatarStore, useFilterStore, useInfoGroupsStore, useUserStore} from '@/stores'
import {useRouter} from 'vue-router'
import {forbiddenWords} from "@/utils/illegal.js";
import {avatarService, nicknameService} from "@/apis/user.js";



const {currenBoolean} = storeToRefs(useSwitchStore())
const {toggleBoolean} = useSwitchStore()

const userStore = useUserStore()
const {avatar} = storeToRefs(useAvatarStore())
const router = useRouter()


const isModalOpen = ref(false)
const target = ref('')
const avatarUrl = ref('')
const choosenIndex = ref('')
const newNickname = ref('')
const alertMessage = ref('')
const isAccess = ref(false)
const textToCopy = ref('')
const isCopied = ref(false)

const inforStore = useInfoGroupsStore()
const filterStore = useFilterStore()

const isOverlayShow = ref(false)

const openModal = (value) => {
  isModalOpen.value = true
  target.value = value
  document.body.style.overflow = 'hidden'  // 禁止滚动
  document.addEventListener('touchmove', preventDefault, {passive: false})
}

// 修改头像
const chooseAvatar = (item, index) => {
  avatarUrl.value = item.url
  choosenIndex.value = index
}

// 修改昵称
const validateNickname = (nickname) => {
  const validNicknamePattern = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/

  if (!nickname) {
    return alertMessage.value = ''
  }

  if (!validNicknamePattern.test(nickname)) {
    alertMessage.value = '只能是汉字、字母或数字'
    return isAccess.value = false
  }

  for (const word of forbiddenWords) {
    if (nickname.includes(word)) {
      alertMessage.value = '对不起，不能含有非法字符'
      return isAccess.value = false
    }
  }
  return isAccess.value = true
}

const handleInput = (event) => {
  newNickname.value = event.target.value
  if (!newNickname.value || newNickname.value) {
    alertMessage.value = ''
  }
}

// 复制邀请码
const copyToClipboard = () => {
  const text = userStore.identifier
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
        .then(() => {
          isCopied.value = true
          alertMessage.value = '复制成功'
          setTimeout(() => {
            alertMessage.value = ''
          }, 2000) // 2秒后隐藏提示消息
        })
        .catch(() => {
          fallbackCopyToClipboard(text)
        })
  } else {
    fallbackCopyToClipboard(text)
  }
}

const fallbackCopyToClipboard = (text) => {
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed'
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    document.execCommand('copy')
    isCopied.value = true
    alertMessage.value = '复制成功'
    setTimeout(() => {
      alertMessage.value = ''
    }, 2000) // 2秒后隐藏提示消息
  } catch (err) {
    isCopied.value = false
    alertMessage.value = '复制失败'
  }

  document.body.removeChild(textArea)
}

// 退出、头像、昵称、邀请码
const confirm = async () => {
  if (target.value === 'quitBar') {
    userStore.resetUserData()
    userStore.isLogin = false
    await router.push('/')
    isModalOpen.value = false
    inforStore.resetPresentTalent()
    filterStore.resetState()

    document.body.style.overflow = 'auto'  // 恢复滚动
    document.removeEventListener('touchmove', preventDefault, {passive: false})
  }

  if (target.value === 'avatar' && choosenIndex.value !== null) {
    const result = await avatarService(userStore.id, avatarUrl.value)
    if (result.data.code === 1) {
      userStore.userAvatar = avatarUrl
      isModalOpen.value = false
      choosenIndex.value = null
    }

    document.body.style.overflow = 'auto'  // 恢复滚动
    document.removeEventListener('touchmove', preventDefault, {passive: false})
  }

  if (target.value === 'nickname' && isAccess.value) {
    //发起新昵称请求
    const result = await nicknameService(userStore.id, newNickname.value)
    userStore.nickname = result.data.message
    newNickname.value = ''
    isModalOpen.value = false
    isAccess.value = false

    document.body.style.overflow = 'auto'  // 恢复滚动
    document.removeEventListener('touchmove', preventDefault, {passive: false})
  }

  if (target.value === 'identifier') {
    isModalOpen.value = false

    document.body.style.overflow = 'auto'  // 恢复滚动
    document.removeEventListener('touchmove', preventDefault, {passive: false})
  }
}

const cancel = () => {
  document.body.style.overflow = 'auto'  // 恢复滚动
  document.removeEventListener('touchmove', preventDefault, {passive: false})
  if (target.value === 'quitBar') {
    isModalOpen.value = false
  }

  if (target.value === 'avatar') {
    choosenIndex.value = null
  }

  if (target.value === 'nickname') {
    isModalOpen.value = false
    isAccess.value = false
    newNickname.value = ''
    alertMessage.value = ''
  }
}

const closeDialog = () => {
  isOverlayShow.value = false
  document.body.style.overflow = 'auto'  // 恢复滚动
  document.removeEventListener('touchmove', preventDefault, {passive: false})
}

const preventDefault = (e) => {
  e.preventDefault()
}

const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    closeDialog()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
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
        <RouterLink @click="toggleBoolean" :to="`/prompt`">使用说明</RouterLink>
        <RouterLink @click="toggleBoolean" :to="`/gear`">装备搭配</RouterLink>
<!--        <RouterLink @click="toggleBoolean" :to="`/mageTower`">法塔杯</RouterLink>-->
<!--        <RouterLink @click="toggleBoolean" :to="`/match`">漫游杯</RouterLink>-->
<!--        <RouterLink @click="toggleBoolean" :to="`/rank`">荣耀榜</RouterLink>-->
        <!-- <RouterLink @click="toggleBoolean" :to="`/shop`">地精商店</RouterLink> -->
        <div v-if="userStore.isLogin" @click="openModal('identifier')" class="custom-button" id="generate-identifier">
          邀请码
        </div>
        <RouterLink v-if="userStore.isLogin" @click="toggleBoolean" :to="`/resetpassword`">重置密码</RouterLink>
        <div v-if="userStore.isLogin" @click="openModal('quitBar')" class="custom-button" id="quit-button">退出</div>
      </div>
    </div>
  </div>

  <DialogModal :isOpen="isModalOpen" @update:isOpen="isModalOpen = $event" @update:confirm="confirm"
               @update:cancel="cancel" class="no-select">
    <div v-if="target === 'quitBar'" class="text-center slot-content">
      <h3>退出确认</h3>
      <p class="padding-mini">勇士，你确定要退出登录吗？</p>
    </div>

    <div v-if="target === 'identifier'" class="text-center slot-content">
      <h3 @click="copyToClipboard">单击复制</h3>
      <div :class="isCopied ? 'in-green' : 'alert'" id="alert-container">{{ alertMessage }}</div>
      <p @click="copyToClipboard" ref="textToCopy" style="font-size: 12px;cursor: pointer;">{{ userStore.identifier }}
      </p>
    </div>

    <div v-if="target === 'nickname'" class="text-center slot-content">
      <h3>修改昵称</h3>
      <div class="alert" id="alert-container">{{ alertMessage }}</div>
      <!-- <p class="padding-mini">昵称长度不能超过七个字符</p> -->
      <input v-model="newNickname" @keyup.enter="validateNickname(newNickname)" @blur="validateNickname(newNickname)"
             @input="handleInput" maxlength="7" autocomplete="false" type="text" id="new-nickname">
      <br>
    </div>

    <div v-if="target === 'avatar'" class="text-center slot-content">
      <h3>更换头像</h3>
      <p class="padding-mini"></p>
      <div id="avatars-container">
        <BarAvatar @click="chooseAvatar(item, index)" v-for="(item, index) in avatar" :key="index" :url="item.url"
                   :class="{ 'active-border': choosenIndex === index }">
        </BarAvatar>
      </div>
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

#nickname {
  margin-left: 1rem;
  color: var(--c-good);
}

#avatars-container {
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 1.3rem;
  margin: 1.3rem 1rem 2.7rem 1rem;
}

#new-nickname {
  background: none;
  font-size: 1.3rem;
  width: 77%;
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 1rem 0.5rem 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: var(--color-text);
}

#alert-container {
  height: 2rem;
}

</style>