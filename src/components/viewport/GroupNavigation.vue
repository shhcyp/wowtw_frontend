<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import BlockNavLogo from '../module/BlockNavLogo.vue'
import BlockBarNav from '../module/BlockBarNav.vue'
import BlockListNav from '../module/BlockListNav.vue'
import { useBrowserWidthListenStore } from '@/stores/browserWidthListen'
import { storeToRefs } from 'pinia'

const { innerWidth, showBarNav } = storeToRefs(useBrowserWidthListenStore())
const { addResizeListener, removeResizeListener, updateInnerWidthState } = useBrowserWidthListenStore()

onMounted(() => {
    addResizeListener()
    updateInnerWidthState()
})

watch(innerWidth, () => {
    updateInnerWidthState()
})

onUnmounted(() => {
    removeResizeListener()
})
</script>

<template>
    <div id="navigation">
        <ul class="wrapper">
            <li id="logo-container">
                <BlockNavLogo></BlockNavLogo>
            </li>
            <li v-if="showBarNav" id="bar-navigation">
                <BlockBarNav></BlockBarNav>
            </li>
            <li v-else class="rows">
                <BlockListNav></BlockListNav>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#navigation {
    height: 4.3rem;

    background-color: var(--bgcolor-navigation);
    /* backdrop-filter: blur(10px); */
    /* -webkit-backdrop-filter: blur(10px); */
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); */

    /* border-bottom: 1px solid var(--color-border); */

    display: flex;
    align-items: center;

    padding-top: 0.7rem;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#bar-navigation {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

li {
    padding: 0 0.5rem;
}

@media (max-width: 430px) {
    #navigation {
        height: 47px;
        padding-top: 0.3rem;
    }

    #logo-container {
        scale: 0.8;
    }
}

@media (orientation:landscape) and (max-width: 932px) {
    #navigation {
        height: 47px;
        padding-top: 0.3rem;
    }

    #logo-container {
        scale: 0.8;
    }
}

@media (max-width: 1024px) {
    #navigation {
        font-size: 0.87rem;
    }
}
</style>
