<script setup>
import IconVerticalArrow from './IconVerticalArrow.vue';
import {ref, provide} from 'vue'

const showSelect = ref(false)

provide('key-boolean', showSelect)
</script>

<template>
  <div v-auto-animate="{ easing: 'linear' }" class="flex-column position-relative">
    <h4>
      <slot>标题</slot>
    </h4>

    <div @click="showSelect = !showSelect" class="flex-row-align-center position-relative" id="select-wrapper">
      <input value="12345" type="text" name="" id="select-alpha" readonly>
      <div class="flex-center-center position-absolute-right" id="arrow-container">
        <IconVerticalArrow></IconVerticalArrow>
      </div>
    </div>

    <ul v-if="showSelect" id="select-options">
      <li id="select-option">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
    </ul>
  </div>
</template>

<style scoped>
#select-wrapper {
  border: 1px solid var(--color-border);
  background: var(--bgcolor-navigation);
  height: 3rem;

  cursor: pointer;

}

#select-alpha {
  flex: 1;
  background: none;
  height: 100%;
  text-align: center;
  color: var(--color-text);

  cursor: pointer;
}

#select-alpha:focus {
  border: none;
  box-shadow: none;
}

#arrow-container {

  aspect-ratio: 1;
  height: 100%;
}

#select-options {
  width: 100%;
  border: 1px solid var(--color-border);
  border-top: none;
  background: var(--bgcolor-navigation);
  padding: 1rem;
  padding-top: 0;

  position: absolute;
  top: 4.6rem;
  left: 0;
  z-index: 7;
}

#select-options * {
  padding: 0.3rem;
  margin: 0.3rem;
  border-radius: 0.3rem;
  background: var(--c-divider-light-1);
}

#select-options *:hover {
  background: var(--color-hover);
  border-radius: 0.3rem;
  cursor: pointer;
}
</style>