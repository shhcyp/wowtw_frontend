<script setup>
import IconLightScheme from './IconLightScheme.vue'
import IconDarkScheme from './IconDarkScheme.vue'
// import { ref, onUnmounted } from 'vue'
// import { useSchemeStore } from '@/stores/scheme'
// import { storeToRefs } from 'pinia'

</script>

<template>
  <div class="container margin">
    <div v-if="true" class="iconlight container animate">
      <IconLightScheme></IconLightScheme>
    </div>
    <div v-else class="icondark container animate">
      <IconDarkScheme></IconDarkScheme>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1.7rem;
  height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* display: inline-block; */
  cursor: pointer;

  position: relative;

  transition: 0.3s;
}

.margin {
  margin-left: 0.7rem;
}

.iconlight,
.icondark {
  position: absolute;
}

.animate:hover {
  transform: rotate(-23deg);
}
</style>
