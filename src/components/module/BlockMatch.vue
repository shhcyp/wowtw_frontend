<script setup>
import {useHomeModalStore} from '@/stores/index'

const homeModalStore = useHomeModalStore()

const openModal = (value) => {
  homeModalStore.openHomeModal(value)
}
</script>

<template>
  <div class="container-dark">
    <div class="title-dark">漫游杯</div>

    <div @click="openModal('match')" class="home-portal">> 了解更多 ></div>
    <div class="temp-placeholder"></div>

    <div class="title-dark">组建战队，一同穿越</div>
  </div>
</template>

<style scoped>

</style>