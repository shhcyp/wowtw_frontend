<script setup>
import IconVerticalArrow from './IconVerticalArrow.vue'
import {ref, provide} from 'vue'

const showDetails = ref(false)

provide('key-boolean', showDetails)

</script>

<template>
  <ul class="position-static container wrapper">
    <li @click="showDetails = !showDetails" class="prompt-title">
      <div class="prompt-title-left">
        <div class="flex-center-center" id="prompt-title-icon">
          <slot name="prompt-icon"></slot>
        </div>
        <h3 class="no-select">
          <slot name="prompt-title"></slot>
        </h3>
      </div>
      <div class="prompt-title-right">
        <IconVerticalArrow></IconVerticalArrow>
      </div>
    </li>
    <li v-if="showDetails">
      <slot name="details"></slot>
    </li>
  </ul>
</template>

<style scoped>
.prompt-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.37rem;
}

.prompt-title:hover {
  background: var(--bgcolor-navigation);
  border-radius: 0.3rem;
}

.prompt-title-left {
  display: flex;
  align-items: center;
}

#prompt-title-icon {
  width: 2rem;
  height: 2rem;
  overflow: hidden;

  border-radius: 0.3rem;
  background-color: black;
  margin-right: 1rem;
}

@media (max-width: 767px) {
  h3 {
    font-size: 1rem;
  }

  #prompt-title-icon {
    height: 1.7rem;
    width: 1.7rem;
  }
}
</style>