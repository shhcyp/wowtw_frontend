<script setup>
const emits = defineEmits(['open-modal'])

const openModal = () => {
  emits('open-modal')
}
</script>

<template>
  <div class="container-light">
    <div class="title-light">会员策略</div>
    <div @click="openModal" class="home-portal">> 了解更多 ></div>
    <div class="temp-placeholder"></div>
    <div class="title-light">终身会员制</div>
  </div>
</template>

<style scoped>

</style>