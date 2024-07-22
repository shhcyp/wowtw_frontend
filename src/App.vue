<script setup>
import {onMounted, onBeforeUnmount} from 'vue'
import {useUserStore} from '@/stores'

const userStore = useUserStore()

onMounted(() => {
  window.addEventListener('beforeunload', userStore.handleBeforeUnload)
  userStore.checkSessionStorage()
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', userStore.handleBeforeUnload)
})
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
