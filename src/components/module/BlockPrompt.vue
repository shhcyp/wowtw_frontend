<script setup>
import IconVerticalArrow from './IconVerticalArrow.vue'
// import IconTest from './IconTest.vue'
import { ref, provide } from 'vue'

const showDetails = ref(false)

provide('key-boolean', showDetails)

</script>

<template>
  <ul v-auto-animate class="position-static container wrapper">
    <li @click="showDetails = !showDetails" class="prompt-title">
      <div class="prompt-title-left">
        <div class="box-size-regular prompt-title-icon">
          <slot name="prompt-icon"></slot>
        </div>
        <h3>
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
  padding: 0.7rem;
}

.prompt-title:hover {
  background: var(--bgcolor-navigation);
  border-radius: 0.3rem;
}

.prompt-title-left {
  display: flex;
  align-items: center;
}

.prompt-title-icon {
  border-radius: 0.3rem;
  background-color: black;
  margin-right: 1rem;
}
</style>