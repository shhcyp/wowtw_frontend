<script setup>
defineProps({
  url: String
})
</script>

<template>
  <div id="avatar-container">
    <img :src="url || '/legends/grandfathered.webp'" alt="头像">
  </div>
</template>

<style scoped>
#avatar-container {
  width: 1.77rem;
  height: 1.77rem;
  border-radius: 0.3rem;
  margin-right: 0.7rem;
  overflow: hidden;
  cursor: pointer;
}
</style>
