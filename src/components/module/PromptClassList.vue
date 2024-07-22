<script setup>
import {ref} from 'vue'

const charts = ref([
  {image: '/charts/tank_raid.webp', name: '坦克（团本）'},
  {image: '/charts/tank_dungeon.webp', name: '坦克（副本）'},
  {image: '/charts/healer_raid.webp', name: '治疗（团本）'},
  {image: '/charts/healer_dungeon.webp', name: '治疗（副本）'},
  {image: '/charts/dps_raid.webp', name: 'DPS（团本）'},
  {image: '/charts/dps_dungeon.webp', name: 'DPS（副本）'},
])
</script>

<template>
  <li class="prompt-details-container-image no-select">
    <div v-for="item in charts" :key="item.id" id="prompt-details">
      <span style="text-align: left">{{ item.name }}</span>
      <img :src="item.image" class="box-size-class-list" alt="">
    </div>
  </li>
</template>

<style scoped>
.prompt-details-container-image {
  margin-left: 0.7rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

#prompt-details {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
}

@media (max-width: 1080px) {
  .prompt-details-container-image {
    grid-auto-flow: row;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .prompt-details-container-image {
    margin-left: 0.7rem;
  }

  span {
    font-size: 0.87rem;
  }
}

@media (max-width: 700px) {
  .prompt-details-container-image {
    margin-left: 0;
    grid-auto-flow: column;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);

    place-items: center;
  }
}
</style>
