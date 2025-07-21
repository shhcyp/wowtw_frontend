import HomeView from '@/views/HomeView.vue'
import GuideView from '@/views/GuideView.vue'
import PromptView from '@/views/PromptView.vue'
import GearView from '@/views/GearView.vue'
import MatchView from '@/views/MatchView.vue'
import RankView from '@/views/RankView.vue'
import ShopView from '@/views/ShopView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import ResetPasswordView from '@/views/ResetPasswordView.vue'
import {createRouter, createWebHistory} from 'vue-router'
import {useUserStore} from '@/stores/index.js'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {requiresAuth: false},
        beforeEnter: (to, from, next) => {
            setTimeout(() => {
                next()
            }, 123)
        }
    },
    {
        path: '/guide',
        name: 'guide',
        component: GuideView,
        meta: {requiresAuth: false},
        beforeEnter: (to, from, next) => {
            setTimeout(() => {
                next()
            }, 123)
        }
    },
    {
        path: '/prompt',
        name: 'prompt',
        component: PromptView,
        // 添加 requiresAuth 元信息
        meta: {requiresAuth: true},
        beforeEnter: (to, from, next) => {
            setTimeout(() => {
                next()
            }, 123)
        }
    },
    {
        path: '/gear',
        name: 'gear',
        component: GearView,
        // 添加 requiresAuth 元信息
        meta: {requiresAuth: true},
        beforeEnter: (to, from, next) => {
            setTimeout(() => {
                next()
            }, 123)
        }
    },
    {
        path: '/match',
        name: 'match',
        component: MatchView,
        // 添加 requiresAuth 元信息
        meta: {requiresAuth: true},
        beforeEnter: (to, from, next) => {
            setTimeout(() => {
                next()
            }, 123)
        }
    },
    {
        path: '/mageTower',
        name: 'mageTower',
        component: MatchView,
        // 添加 requiresAuth 元信息
        meta: {requiresAuth: true},
        beforeEnter: (to, from, next) => {
            setTimeout(() => {
                next()
            }, 123)
        }
    },
    {
        path: '/rank',
        name: 'rank',
        component: RankView,
        beforeEnter: (to, from, next) => {
            setTimeout(() => {
                next()
            }, 123)
        }
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopView,
        beforeEnter: (to, from, next) => {
            setTimeout(() => {
                next()
            }, 123)
        }
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
        beforeEnter: (to, from, next) => {
            setTimeout(() => {
                next()
            }, 123)
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        beforeEnter: (to, from, next) => {
            setTimeout(() => {
                next()
            }, 123)
        }
    },
    {
        path: '/resetpassword',
        name: 'resetpassword',
        component: ResetPasswordView,
        beforeEnter: (to, from, next) => {
            setTimeout(() => {
                next()
            }, 123)
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!userStore.isLogin) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
