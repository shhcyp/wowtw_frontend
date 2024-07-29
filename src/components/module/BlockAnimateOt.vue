<script setup>
import { ref, onMounted } from 'vue'

const isOVisible = ref(false)
const isTVisible = ref(false)
const isWVisible = ref(false)
const isExpanding = ref(false)
const isLetter = ref(false)

const startAnimation = () => {
  setTimeout(() => {
    isOVisible.value = true
    setTimeout(() => {
      isTVisible.value = true
      setTimeout(() => {
        isWVisible.value = true
        setTimeout(() => {
          isExpanding.value = true
          setTimeout(() => {
            isLetter.value = true
            setTimeout(() => {
              resetAnimation()
              setTimeout(() => {
                startAnimation()
              }, 1000)
            }, 1314)
          }, 3000)
        }, 500)
      }, 1314)
    }, 500)
  }, 1000)
}

const resetAnimation = () => {
  isOVisible.value = false
  isTVisible.value = false
  isWVisible.value = false
  isExpanding.value = false
  isLetter.value = false
}

onMounted(() => {
  startAnimation()
})
</script>

<template>
  <div class="ot-container wrapper" :class="{ 'expanding': isExpanding, 'letter': isLetter }">
    <span v-if="isWVisible || isExpanding">W</span>
    <span v-if="isOVisible || isExpanding">O</span>
    <span v-if="isWVisible || isExpanding">W</span>
    <span v-if="isTVisible || isExpanding">T</span>
    <span v-if="isWVisible || isExpanding">W</span>
  </div>
</template>

<style scoped>
.ot-container {
  height: 12rem;
  font-size: 10rem;
  line-height: 10rem;
  font-weight: 900;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.expanding {
  justify-content: space-between;
}

.letter {
  opacity: 0;
  transform: translateY(-37px);
  transition: all 1.3s ease-out;
}

@media (max-width: 768px) {
  .ot-container {
    height: 7rem;
    font-size: 7rem;
    line-height: 7rem;
  }
}

@media (max-width: 430px) {
  .ot-container {
    height: 4.3rem;
    font-size: 4.3rem;
    line-height: 4.3rem;
  }
}
</style>