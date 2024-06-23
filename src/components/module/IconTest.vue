<script setup>
import { onMounted } from 'vue'
import { watch, inject } from 'vue'

const currenBoolean = inject('key-boolean')

// onMounted(() => {
//     const expand = document.getElementById('expand')
//     const collapse = document.getElementById('collapse')

//     watch(currenBoolean, () => {
//         currenBoolean.value ? expand.className += 'active' : collapse.className += 'active'
//     })
// })
</script>

<template>
    <!-- <div @click="toggleeTest" id="vertical-arrow-button"> -->
    <div v-auto-animate>
        <div v-if="currenBoolean" id="expand" style="background-color: red;"></div>
        <div v-else id="collapse" style="background-color: green;"></div>
    </div>
    <!-- </div> -->
</template>

<style scoped>
#vertical-arrow-button:hover {
    /* cursor: pointer; */
}

.active {
    display: block;
}

#expand,
#collapse {
    /* display: none; */
    width: 10px;
    height: 10px;
}
</style>
