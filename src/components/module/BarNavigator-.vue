<script setup>
</script>

<template>
  <span>
    <slot></slot>
  </span>
</template>

<style scoped>
span {
  line-height: 2.3rem;
  border-radius: 0.35rem;
  padding: 0 1.3rem;
  cursor: pointer;
  margin: 0 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;
}

span:hover {
  background-color: var(--color-highlight-block);
  color: var(--color-highlight-text);
}

@media (max-width: 1240px) and (min-width: 1024px) {
  span {
    padding: 0 0.7rem;
  }
}

@media (max-width: 1024px) and (min-width: 768px) {
  span {
    padding: 0 0.5rem;
  }
}

@media (max-width: 768px) {
  span {
    padding: 0 0.5rem;
  }
}
</style>
