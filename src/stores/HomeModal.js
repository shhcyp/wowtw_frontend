import {defineStore} from 'pinia'
import {ref} from 'vue'
import router from "@/router/index.js";

export const useHomeModalStore = defineStore('HomeModal', () => {
    const isModalOpen = ref(false)
    const isContentLoaded = ref(false)
    const postPath = ref('')

    const preventDefault = (e) => {
        if (!document.getElementById('modal-content').contains(e.target)) {
            e.preventDefault()
        }
    }
    const openHomeModal = (value) => {
        isModalOpen.value = true
        isContentLoaded.value = false
        postPath.value = value

        document.body.style.overflow = 'hidden'  // 禁止滚动
        document.addEventListener('touchmove', preventDefault, {passive: false})
    }

    const closeHomeModal = () => {
        isModalOpen.value = false
        isContentLoaded.value = false
        postPath.value = ''

        document.body.style.overflow = 'auto'  // 恢复滚动
        document.removeEventListener('touchmove', preventDefault, {passive: false})
    }

    router.beforeEach((to, from, next) => {
        closeHomeModal()
        document.body.style.overflow = 'auto'  // 在导航时恢复滚动
        document.removeEventListener('touchmove', preventDefault, {passive: false})
        next()
    })

    return {
        isModalOpen,
        isContentLoaded,
        postPath,
        openHomeModal,
        closeHomeModal
    }
})
