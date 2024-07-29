<script setup>
import GroupPageHeader from "@/components/viewport/GroupPageHeader.vue";
import MatchCharts from "@/components/module/BlockMatchCharts.vue";
</script>

<template>
  <TheLayout>
    <template #page-header>
      <GroupPageHeader>
        <template #page-title>
          漫游杯排行榜
        </template>
        <template #page-subtitle>
<!--          正在开发正在开发正在开发正在开发正在开发正在开发正在开发-->
        </template>
      </GroupPageHeader>
    </template>
    <template #page-main>
      <MatchCharts class="main-details wrapper" id="part-I"></MatchCharts>
    </template>
  </TheLayout>
</template>

<style scoped>

</style>