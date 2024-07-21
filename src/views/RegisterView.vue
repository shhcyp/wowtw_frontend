<script setup>
import GroupPageHeader from '@/components/viewport/GroupPageHeader.vue'
import BlockRegister from '@/components/module/BlockRegister.vue'
import {provide} from 'vue'

provide('formType', 'register')
</script>

<template>
  <TheLayout>
    <template #page-header>
      <GroupPageHeader style="border-bottom: none;">
        <template #page-title>
          用户注册
        </template>
        <template #page-subtitle>
          <p>注册步骤非常重要，请尽量在电脑端进行操作</p>

        </template>
      </GroupPageHeader>
    </template>
    <template #page-main>
      <BlockRegister></BlockRegister>
    </template>
  </TheLayout>
</template>

<style scoped></style>
