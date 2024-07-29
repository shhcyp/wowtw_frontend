<script setup>
</script>

<template>

  <div id="talent-tree-string">
    <slot name="talent-name"><h3>123</h3></slot>
    <div class="flex-grow flex-center-center" id="talent-string"><slot name="talent-string"></slot></div>
    <span class="flex-column" id="notice">单击复制</span>
  </div>
</template>

<style scoped>
#talent-tree-string {
  padding: 1.3rem;
  margin-bottom: 3rem;
  width: 100%;
  background-color: var(--color-gear-backgroud);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

#talent-string {
  text-align: justify;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  padding: 0.7rem 0 0.3rem 0;
}

#notice {
  font-size: 0.87rem;
  align-items: end;
}

@media (max-width: 768px) {
}

@media (max-width: 430px) {
}
</style>
