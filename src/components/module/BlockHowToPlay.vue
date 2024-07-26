<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div class="container-dark">
    <div class="title-dark">NEW 价值观</div>
    <div @click="openModal('twFun')" class="home-portal">> 时光漫游的可玩性 ></div>
    <div class="temp-placeholder"></div>
    <div class="theme" id="how-container">
      <div>慢节奏的娱乐方式</div>
      <div>核武器级的输出</div>
      <div>轻松通关法师塔</div>
    </div>
  </div>
</template>

<style scoped>
#how-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>