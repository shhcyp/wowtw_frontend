<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div class="container-dark flex-column-align-center">
    <div class="title-dark">时空漫游简史</div>
    <div @click="openModal('wowTW')" id="about-wowtw">时空漫游温故</div>
    <div id="wowtw-placeholder"></div>
    <div id="history-container">
      <div class="flex-column-align-center">
        <div id="birth"><img src="/homepage/birthday.webp" alt=""></div>
        <div class="year">2015年</div>
        <div class="description-theme">时空漫游正式推出</div>
      </div>
      <div class="flex-column-align-center">
        <div id="mage-tower"><img src="/homepage/join_mage_tower.webp" alt=""></div>
        <div class="year">2021年</div>
        <div class="description-theme">法师塔重启加入时空漫游</div>
      </div>
      <div class="flex-column-align-center">
        <div id="nowadays"><img src="/homepage/present.webp" alt=""></div>
        <div class="year">2024年</div>
        <div class="description-theme">漫游五人本机制变更</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#about-wowtw {
  color: white;
  cursor: pointer;
  width: 9rem;
  height: 2.7rem;
  line-height: 2.7rem;
  text-align: center;
  border: 1px solid white;
  border-radius: 2.7rem 2.7rem;
}

#history-container {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
}

#wowtw-placeholder {
  height: 4.3rem;
}
.year {
  padding-top: 1.7rem;
  font-weight: bold;
  color: white;
}

#birth {
  width: 23rem;
}

#mage-tower {
  width: 23rem;
}

#nowadays {
  width: 23rem;
}

@media (max-width: 1020px) {
  #history-container {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
}

@media (max-width: 430px) {
  #about-wowtw {
    font-size: 0.87rem;
    width: 7.7rem;
    height: 2.3rem;
    line-height: 2.3rem;
    border-radius: 2.3rem 2.3rem;
  }
}
</style>