<script setup>
defineProps({
  switchGreen: Boolean
})
</script>

<template>
  <div id="alert-container">
        <span :class="{ 'in-green': switchGreen }" class="alert" id="alert-message">
            <slot></slot>
        </span>
  </div>
</template>

<style scoped>
#alert-container {
  height: 1.77rem;
}
#alert-message {
  display: inline-block;
  width: 100%;
  font-size: 0.83rem;
  text-align: left;
}
</style>
