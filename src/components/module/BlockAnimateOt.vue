<script setup>
import {ref, onMounted} from 'vue';

const isFading = ref(false);
const isFadingOT = ref(false)
const isJumpingO = ref(false);
const isJumpingT = ref(false);
const isInitialFadeIn = ref(false);


onMounted(() => {
  // Initial fade-in
  setTimeout(() => {
    isInitialFadeIn.value = true;
    // Pause for 1 second after fade-in
    setTimeout(() => {
      // Start the rest of the animation sequence
      isFading.value = true;
      setTimeout(() => {
        isJumpingO.value = true;
        setTimeout(() => {
          isJumpingO.value = false;
          isJumpingT.value = true;
          setTimeout(() => {
            isJumpingT.value = false;
            setTimeout(() => {
              isFadingOT.value = true;
              // Animation ends here
            }, 567);
            // Animation ends here
          }, 567); // T跳动的持续时间
        }, 567); // O跳动结束后T开始跳动的时间
      }, 2345); // 透明度降低后O开始跳动的时间
    }, 2345); // 初始淡入后停顿时间
  }, 1500); // 初始淡入动画时间
});
</script>

<template>
  <div class="ot-container" :class="{ 'initial-fade-in': isInitialFadeIn }">
    <span :class="{ fade: isFading }">W</span>
    <span :class="[isJumpingO ? 'jumpO' : '', isFadingOT ? 'fadeOT' : '']">O</span>
    <span :class="{ fade: isFading }">W</span>
    <span :class="[isJumpingT ? 'jumpT' : '', isFadingOT ? 'fadeOT' : '']">T</span>
    <span :class="{ fade: isFading }">W</span>
  </div>
</template>

<style scoped>
.ot-container {
  font-size: 6rem;
  line-height: 6rem;
  font-weight: 900;
  color: var(--c-text-light-1);
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

span {
  padding: 2.7rem;
}

.initial-fade-in {
  opacity: 1;
}

.fade {
  opacity: 0.2;
  transition: opacity 1s ease-in-out;
}

.fadeOT {
  opacity: 0.2;
  transition: opacity 1s linear;
}

span:not(.fade) {
  transition: opacity 1s ease-in-out;
}

.jumpO {
  animation: jump 0.5s ease-out;
}

.jumpT {
  animation: jump 0.5s ease-out;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-17px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>