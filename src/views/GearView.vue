<script setup>
import GroupPageHeader from '@/components/viewport/GroupPageHeader.vue'
import GroupGearLegend from '@/components/viewport/GroupGearLegend.vue'
import GroupFilterBars from '@/components/viewport/GroupFilterBars.vue'
import GroupGears from '@/components/viewport/GroupGears.vue'
import GroupTalentTree from '@/components/viewport/GroupTalentTree.vue'
// import { useFilterStore } from '@/stores/filter'
// import { storeToRefs } from 'pinia'

// const { classData, classIndex, talentIndex } = storeToRefs(useFilterStore())
</script>

<template>
    <TheLayout>
        <template #page-header>
            <GroupPageHeader>
                <template #page-title>
                    全职业装备搭配表
                </template>
                <template #page-subtitle1>
                    一般情况下，装备按照从上到下，从左到右，毕业的排在前面，备用的排在后面
                </template>
            </GroupPageHeader>
        </template>
        <template #page-main>
            <GroupGearLegend></GroupGearLegend>
            <GroupFilterBars></GroupFilterBars>
            <!-- <GroupGears v-for="item in classData[classIndex].talents[talentIndex].gears" :key="item.id"></GroupGears> -->
            <GroupGears></GroupGears>
            <GroupTalentTree></GroupTalentTree>
        </template>
    </TheLayout>

</template>

<style scoped></style>
