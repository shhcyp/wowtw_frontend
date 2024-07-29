<script setup>
import GroupPageHeader from '@/components/viewport/GroupPageHeader.vue'
</script>

<template>
  <TheLayout>
    <template #page-header>
      <GroupPageHeader>
        <template #page-title>
          "漫游杯"辅助系统
        </template>
        <template #page-subtitle>
        </template>
      </GroupPageHeader>
    </template>
    <template #page-main>
      <div style="text-align: left; padding: 3rem; text-align: center">游戏内活动尚未开启，暂无内容</div>
    </template>
  </TheLayout>
</template>

<style scoped></style>
