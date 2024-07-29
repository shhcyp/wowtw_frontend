<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div class="container-dark flex-column-align-center" id="resources">
    <div class="title-dark">站内资源</div>
    <div @click="openModal('webResources')" id="about-resources">资源简介</div>
    <div class="temp-placeholder"></div>
  </div>
</template>

<style scoped>
#resources {
  background-image: url("/homepage/resource.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#about-resources {
  color: white;
  cursor: pointer;
  width: 7rem;
  height: 2.7rem;
  line-height: 2.7rem;
  text-align: center;
  border: 1px solid white;
  border-radius: 2.7rem 2.7rem;
}
</style>