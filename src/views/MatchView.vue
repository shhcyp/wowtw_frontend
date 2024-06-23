<script setup>
import GroupPageHeader from '@/components/viewport/GroupPageHeader.vue'
</script>

<template>
    <TheLayout>
        <template #page-header>
            <GroupPageHeader>
                <template #page-title>
                    开发中
                </template>
                <!-- <template #page-subtitle1>
                    这是第一段说明这是第一段说明这是第一段说明这是第一段说明这是第一段说明
                </template>
                <template #page-subtitle2>
                    这是第二段说明这是第二段说明这是第二段说明这是第二段说明这是第二段说明这是第二段说明这是第二段说明这是第二段说明
                </template> -->
            </GroupPageHeader>
        </template>
        <template #page-main>
            开发中
        </template>
    </TheLayout>
</template>

<style scoped></style>
