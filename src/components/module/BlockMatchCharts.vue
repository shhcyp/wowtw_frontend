<script setup>
const emits = defineEmits(['open-modal'])

const openModal = () => {
  emits('open-modal')
}
</script>

<template>
  <div class="container-dark">
    <div class="title-dark">漫游杯排行榜</div>
    <div @click="openModal" class="home-portal">> 更多排行 ></div>
    <div class="wrapper" id="block-team">
      <div>🏆冠军</div>
      <div>🥈亚军</div>
      <div>🥉季军</div>
      <div>殿军</div>
      <div>第五名</div>
      <div>第六名</div>
      <div>第七名</div>
    </div>
  </div>
</template>

<style scoped>
#block-team {
  margin-top: 1rem;
  color: var(--c-white);
  padding: 1rem 0;
}

</style>