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
                    时光漫游细节指引
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
