import './assets/main.css'
import TheLayout from './components/viewport/TheLayout.vue'
import TheDivider from '@/components/module/TheDivider.vue'

import { createApp } from 'vue'
import pinia from './stores/index'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'
import router from './router'

// import { getTest } from './apis/test'
// getTest().then(res => {
//     console.log(res.data);
// })

const app = createApp(App)

app.use(pinia)
app.use(router)

app.component('TheLayout', TheLayout)
app.component('TheDivider', TheDivider)
app.use(autoAnimatePlugin)

app.mount('#app')
