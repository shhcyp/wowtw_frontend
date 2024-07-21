<script setup>
import GroupPageHeader from '@/components/viewport/GroupPageHeader.vue'
import GroupWelcome from '@/components/viewport/GroupWelcome.vue'
import GroupDonation from '@/components/viewport/GroupDonation.vue'
</script>

<template>
  <TheLayout>
    <template #page-header>
      <GroupPageHeader>
        <template #page-title>
          欢迎来到时光漫游<br/><br/>
          建设中......
        </template>
        <template #page-subtitle>
          <!-- <div class="short-row-wrapper">专注时光漫游装备搭配，助你成为团队中最靓的仔</div> -->
        </template>
        <!-- <template #page-subtitle2>
            这是第二段说明
        </template> -->
      </GroupPageHeader>
    </template>
    <template #page-main>
      <!-- <GroupWelcome></GroupWelcome> -->
      <!-- <GroupDonation></GroupDonation> -->
    </template>
  </TheLayout>
</template>

<style scoped></style>
