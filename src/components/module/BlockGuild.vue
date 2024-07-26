<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div class="container-dark">
    <div class="title-dark">站外互动</div>

    <div class="temp-placeholder"></div>
    <div class="theme">游戏内公会</div>
    <div class="subtitle-dark">名称：WOWTW，服务器：灰谷</div>
    <br/>
    <div class="theme">WarcraftLogs公会</div>
    <div class="subtitle-dark">名称：WOWTW，区域：美服</div>
    <div @click="openModal('guild')" class="home-portal">> 了解更多 ></div>
    <br/>
  </div>
</template>

<style scoped>

</style>