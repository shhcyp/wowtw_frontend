<script setup>
import GroupPageHeader from '@/components/viewport/GroupPageHeader.vue'
import BlockRegister from '@/components/module/BlockRegister.vue'
import { provide } from 'vue'

provide('formType', 'register')
</script>

<template>
    <TheLayout>
        <template #page-header>
            <GroupPageHeader style="border-bottom: none;">
                <template #page-title>
                    用户注册
                </template>
            </GroupPageHeader>
        </template>
        <template #page-main>
            <BlockRegister></BlockRegister>
        </template>
    </TheLayout>
</template>

<style scoped>
/* #register-page-header {
    padding-bottom: 1rem;
} */
</style>
