<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div class="container-dark" id="cup-bg-img">
    <div class="title-dark">拉力赛"漫游杯"</div>
    <div @click="openModal('roamingCup')" id="about-cup">了解更多</div>
    <div id="cup-placeholder"></div>
    <div class="title-dark" id="cup-description">组建战队，一起穿越</div>
  </div>
</template>

<style scoped>
#cup-bg-img {
  background-image: url("/homepage/cup.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#about-cup {
  color: white;
  cursor: pointer;
  width: 7rem;
  height: 2.7rem;
  line-height: 2.7rem;
  text-align: center;
  border: 1px solid white;
  border-radius: 2.7rem 2.7rem;
}

#cup-placeholder {
  flex: 1;
}

#cup-description {
  margin-bottom: 1.3rem;
}
</style>