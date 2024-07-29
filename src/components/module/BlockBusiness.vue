<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div class="container-light flex-column-align-center" id="business">
    <div class="title-dark">会员福利</div>
    <div @click="openModal('membershipPolicy')" id="about-business">了解更多</div>
    <div class="temp-placeholder"></div>
  </div>
</template>

<style scoped>
#business {
  background-image: url("/homepage/business.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#about-business {
  color: white;
  cursor: pointer;
  width: 7rem;
  height: 2.7rem;
  line-height: 2.7rem;
  text-align: center;
  //background-color: white;
  border: 1px solid white;
  border-radius: 2.7rem 2.7rem;
}
</style>