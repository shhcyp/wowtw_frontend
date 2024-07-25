<script setup>
const emits = defineEmits(['open-modal'])

const openModal = () => {
  emits('open-modal')
}
</script>

<template>
  <div class="container-light">
    <div class="title-light">站内资源</div>
    <div @click="openModal" class="home-portal">> 资源简介 ></div>
    <div class="temp-placeholder"></div>
    <div class="title-light">
      <div>绝对不会让你失望</div>
      <br />
      <div>只需要下一次副本</div>
    </div>
  </div>
</template>

<style scoped>

</style>