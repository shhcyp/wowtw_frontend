<script setup>
import GroupPageHeader from '@/components/viewport/GroupPageHeader.vue'
import BlockLogin from '@/components/module/BlockLogin.vue'
import {provide} from 'vue'

provide('formType', 'login')
</script>

<template>
  <TheLayout>
    <template #page-header>
      <GroupPageHeader style="border-bottom: none;">
        <template #page-title>
          用户登录
        </template>
      </GroupPageHeader>
    </template>
    <template #page-main>
      <BlockLogin></BlockLogin>
    </template>
  </TheLayout>
</template>

<style scoped></style>
