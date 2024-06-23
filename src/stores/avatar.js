import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAvatarStore = defineStore('avatar', () => {
    const avatar = ref([
        { id:1, icon: 'alpha', url: '/avatar/alliance.webp' },
        { id:2, icon: 'beta', url: '/avatar/chromietime.webp' },
        { id:3, icon: 'chi', url: '/avatar/dh_havoc.webp' },
        { id:4, icon: 'delta', url: '/avatar/dh_vengeance.webp' },
        { id:5, icon: 'eta', url: '/avatar/dk_blood.webp' },
        { id:6, icon: 'fix', url: '/avatar/dk_frost.webp' },
        { id:7, icon: 'gamma', url: '/avatar/dk_unholy.webp' },
        { id:8, icon: 'howdy', url: '/avatar/druid_balance.webp' },
        { id:9, icon: 'iota', url: '/avatar/druid_feral.webp' },
        { id:10, icon: 'javay', url: '/avatar/druid_guardian.webp' },
        { id:11, icon: 'kappa', url: '/avatar/druid_restoration.webp' },
        { id:12, icon: 'mu', url: '/avatar/evoker_devastation.webp' },
        { id:13, icon: 'nu', url: '/avatar/evoker_preservation.webp' },
    ])

    return { avatar }
})