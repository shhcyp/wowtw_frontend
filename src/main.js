import './assets/main.css'
import TheLayout from './components/viewport/TheLayout.vue'
import TheDivider from '@/components/module/TheDivider.vue'

import { createApp } from 'vue'
import pinia from './stores/index'
import piniaPersist from 'pinia-plugin-persistedstate'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'
import router from './router'

import {useFilterStore} from '@/stores/filter.js'
import {infoGroupsStore} from '@/stores/index'

const app = createApp(App)
pinia.use(piniaPersist)

app.use(pinia)
app.use(router)

app.component('TheLayout', TheLayout)
app.component('TheDivider', TheDivider)
app.use(autoAnimatePlugin)

const filterStore = useFilterStore()
const infoStore = infoGroupsStore()
window.addEventListener('beforeunload', () => {
    filterStore.resetState()
    infoStore.resetPresentTalent()
})

app.mount('#app')
