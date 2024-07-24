<script setup>
import {onMounted, onBeforeUnmount} from 'vue'
import {useUserStore} from '@/stores'

const userStore = useUserStore()

onMounted(() => {
  window.addEventListener('beforeunload', userStore.handleBeforeUnload)
  window.addEventListener('visibilitychange', userStore.handlePageHide)
  userStore.checkSessionStorage()
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', userStore.handleBeforeUnload)
  window.removeEventListener('visibilitychange', userStore.handlePageHide)
})
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
