<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div class="container-light">
    <div class="title-light">站外互动</div>

    <div class="temp-placeholder"></div>
    <div class="theme">游戏内公会</div>
    <div class="subtitle-light">（魔兽世界时空漫游粉丝基地）</div>
    <div class="subtitle-light">名称：WOWTW，会长：Hithere</div>
    <br/>
    <div class="theme">WarcraftLogs</div>
    <div @click="openModal('guild')" class="home-portal">> 相关链接 ></div>
    <br/>
  </div>
</template>

<style scoped>

</style>