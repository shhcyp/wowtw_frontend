<script setup>
</script>

<template>
  <div class="container wrapper no-select">
    <div id="page-head-container">
      <h1>
        <slot name="page-title"></slot>
      </h1>
      <div id="sub-title"><slot name="page-subtitle"></slot></div>

    </div>
  </div>
</template>

<style scoped>
#page-head-container {
  text-align: center;
  margin-top: 1.7rem;
}

#sub-title {
  padding-top: 1rem;
  line-height: 2rem;
  white-space: pre-line;
}

@media screen and (max-width: 432px) {
  #page-head-container {
    margin-top: 0;
  }
  #sub-title {
    text-align: center;
    font-size: 0.87rem;
  }
}
</style>
