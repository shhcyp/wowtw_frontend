<script setup>
defineProps({
  url: String
})
</script>

<template>
  <div id="avatar-container">
    <img :src="url || '/legends/grandfathered.webp'" alt="">
  </div>
</template>

<style scoped>
#avatar-container {
  width: 1.77rem;
  height: 1.77rem;
  border-radius: 0.3rem;
  overflow: hidden;
  cursor: pointer;
}
</style>
