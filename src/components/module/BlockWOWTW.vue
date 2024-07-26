<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div class="container-light">
    <div class="title-light">魔兽世界时光漫游历程</div>
    <div class="subtitle-light">不知不觉已经这么长时间了</div>
    <div @click="openModal('wowTW')" class="home-portal">> 了解更多 ></div>
    <div class="temp-placeholder"></div>
    <div class="theme" id="history-container">
      <div>2015年</div>
      <div>2017年</div>
      <div>2021年</div>
      <div>现在</div>
    </div>
  </div>
</template>

<style scoped>
#history-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

</style>