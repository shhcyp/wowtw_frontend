<script setup>
import GroupPageHeader from '@/components/viewport/GroupPageHeader.vue'
import GroupGearLegend from '@/components/viewport/GroupGearLegend.vue'
import GroupFilterBars from '@/components/viewport/GroupFilterBars.vue'
import GroupGears from '@/components/viewport/GroupGears.vue'
</script>

<template>
  <TheLayout>
    <template #page-header>
      <GroupPageHeader>
        <template #page-title>
          全职业装备搭配表
        </template>
        <template #page-subtitle>
          大多数情况下，装备按照从上到下，从左到右，毕业在前，备用在后，但是也有例外
        </template>
      </GroupPageHeader>
    </template>
    <template #page-main>
      <GroupGearLegend></GroupGearLegend>
      <GroupFilterBars></GroupFilterBars>
      <GroupGears></GroupGears>
    </template>
  </TheLayout>

</template>

<style scoped></style>
