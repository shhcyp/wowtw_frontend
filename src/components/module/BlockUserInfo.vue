<script setup>
</script>

<template>
  <div id="user-info">
    <div id="avatar-container">
      <img src="/legends/grandfathered.webp">
    </div>
    <RouterLink :to="`/private`">MCYP</RouterLink>
  </div>
</template>

<style scoped>
#user-info {
  display: flex;
  align-items: center;
  /* cursor: pointer; */
}

#avatar-container {
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
  margin-right: 0.7rem;
  overflow: hidden;
  cursor: pointer;
}
</style>
