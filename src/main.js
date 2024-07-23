import './assets/main.css'
import TheLayout from './components/viewport/TheLayout.vue'
import TheDivider from '@/components/module/TheDivider.vue'

import { createApp } from 'vue'
import pinia from './stores/index'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'
import router from './router'

import {useFilterStore} from '@/stores'
import {useInfoGroupsStore} from '@/stores'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.component('TheLayout', TheLayout)
app.component('TheDivider', TheDivider)
app.use(autoAnimatePlugin)

const filterStore = useFilterStore()
const infoStore = useInfoGroupsStore()
window.addEventListener('beforeunload', () => {
    filterStore.resetState()
    infoStore.resetPresentTalent()
})

app.mount('#app')
