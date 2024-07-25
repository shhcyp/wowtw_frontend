<script setup>
const emits = defineEmits(['open-modal'])

const openModal = () => {
  emits('open-modal')
}
</script>

<template>
  <div class="container-dark">
    <div class="title-dark">漫游杯</div>

    <div @click="openModal" class="home-portal">> 了解更多 ></div>
    <div class="temp-placeholder"></div>

    <div class="title-dark">组建战队，一同穿越</div>
  </div>
</template>

<style scoped>

</style>