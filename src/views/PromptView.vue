<script setup>
import GroupPageHeader from '@/components/viewport/GroupPageHeader.vue'
import GroupPromptLegend from '@/components/viewport/GroupPromptLegend.vue'
import GroupPrompt from '@/components/viewport/GroupPrompt.vue'
</script>

<template>
    <TheLayout>
        <template #page-header>
            <GroupPageHeader>
                <template #page-title>
                    漫游指引
                </template>
                <template #page-subtitle1>
                    <div class="short-row-wrapper">一些时光漫游小细节，请务必查看，节约时间，避免踩坑</div>
                </template>
            </GroupPageHeader>
        </template>
        <template #page-main>
            <GroupPromptLegend></GroupPromptLegend>
            <GroupPrompt></GroupPrompt>
        </template>
    </TheLayout>
</template>

<style scoped></style>
