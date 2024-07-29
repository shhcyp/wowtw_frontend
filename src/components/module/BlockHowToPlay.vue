<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div class="container-light flex-column-align-center">
    <div class="title-light">NEW 价值观</div>
    <div @click="openModal('twFun')" id="about-value">时空漫游知新</div>
    <div id="value-container">
      <div class="flex-column-align-center">
        <div><img src="/homepage/havefun.webp" alt=""></div>
        <div class="description-theme">慢节奏，真养生魔兽</div>
      </div>
      <div class="flex-column-align-center">
        <div><img src="/homepage/dps.webp" alt=""></div>
        <div class="description-theme">漫游事件周，我要打十个！</div>
      </div>
      <div class="flex-column-align-center">
        <div><img src="/homepage/magetower.webp" alt=""></div>
        <div class="description-theme">“轻松”通关法师塔</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#about-value {
  color: black;
  cursor: pointer;
  width: 9rem;
  height: 2.7rem;
  line-height: 2.7rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 2.7rem 2.7rem;
}

#value-container {
  width: 100%;
  margin: 3.3rem 0 2rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 1024px) {
  #value-container {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }
}

@media (max-width: 430px) {
  #about-value {
    font-size: 0.87rem;
    width: 7.7rem;
    height: 2.3rem;
    line-height: 2.3rem;
    border-radius: 2.3rem 2.3rem;
  }
}
</style>