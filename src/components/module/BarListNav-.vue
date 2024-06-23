<script setup>
import IconXmark from './IconXmark.vue'
import IconShowNav from './IconShowNav.vue'
</script>

<template>
    <div class="box-size-light" id="bar-list-nav">
        <div v-if="true" class="box-size-light" id="icon-show-nav">
            <IconShowNav></IconShowNav>
        </div>
        <div v-else class="box-size-light" id="icon-x">
            <IconXmark></IconXmark>
        </div>
    </div>
</template>

<style scoped>
#bar-list-nav {
    position: relative;

    cursor: pointer;
    margin-left: 0.6rem;
    margin-right: 0.5rem;
}

#icon-show-nav,
#icon-x {
    position: absolute;
}

#icon-x {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
