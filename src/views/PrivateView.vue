<script setup>
import GroupPageHeader from '@/components/viewport/GroupPageHeader.vue'
</script>

<template>
    <TheLayout>
        <template #page-header>
            <GroupPageHeader>
                <template #page-title>
                    欢迎 MCYP，您的会员ID为1373
                </template>
                <template #page-subtitle1>
                    记住您的ID，如果您将本站推荐给您的好友，不要忘记告诉对方您的ID
                </template>
                <template #page-subtitle2>
                    如果对方注册后购买了“VIP”，您将获得66元的返现红包，系统统计后于次月初发放，不限次数
                </template>
            </GroupPageHeader>
        </template>
        <template #page-main>
            home
        </template>
    </TheLayout>
</template>

<style scoped></style>
