import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAvatarStore = defineStore('avatar', () => {
    const avatar = ref([
        { id:1, url: '/avatar/rat1.webp' },
        { id:2, url: '/avatar/ox1.webp' },
        { id:3, url: '/avatar/tiger1.webp' },
        { id:4, url: '/avatar/rabbit1.webp' },
        { id:5, url: '/avatar/dragon1.webp' },
        { id:6, url: '/avatar/snake1.webp' },
        { id:7, url: '/avatar/horse1.webp' },
        { id:8, url: '/avatar/goat1.webp' },
        { id:9, url: '/avatar/monkey1.webp' },
        { id:10, url: '/avatar/rooster1.webp' },
        { id:11, url: '/avatar/dog1.webp' },
        { id:12, url: '/avatar/pig1.webp' },
        { id:13, url: '/avatar/rat2.webp' },
        { id:14, url: '/avatar/ox2.webp' },
        { id:15, url: '/avatar/tiger2.webp' },
        { id:16, url: '/avatar/rabbit2.webp' },
        { id:17, url: '/avatar/dragon2.webp' },
        { id:18, url: '/avatar/snake2.webp' },
        { id:19, url: '/avatar/horse2.webp' },
        { id:20, url: '/avatar/goat2.webp' },
        { id:21, url: '/avatar/monkey2.webp' },
        { id:22, url: '/avatar/rooster2.webp' },
        { id:23, url: '/avatar/dog2.webp' },
        { id:24, url: '/avatar/pig2.webp' },
    ])

    return { avatar }
})