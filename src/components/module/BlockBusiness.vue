<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div class="container-dark">
    <div class="title-dark">会员策略</div>
    <div @click="openModal('membershipPolicy')" class="home-portal">> 了解更多 ></div>
    <div class="temp-placeholder"></div>
    <div class="title-dark">终身会员制</div>
  </div>
</template>

<style scoped>

</style>