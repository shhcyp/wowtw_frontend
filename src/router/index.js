import HomeView from '@/views/HomeView.vue'
import PromptView from '@/views/PromptView.vue'
import GearView from '@/views/GearView.vue'
import MatchView from '@/views/MatchView.vue'
import ShopView from '@/views/ShopView.vue'
// import DonationView from '@/views/DonationView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import PrivateView from '@/views/PrivateView.vue'
import ResetPasswordView from '@/views/ResetPasswordView.vue'
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
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
        // {
        //   path: '/donation',
        //   name: 'donation',
        //   component: DonationView,
        //   beforeEnter: (to, from, next) => {
        //     setTimeout(() => {
        //       next()
        //     }, 123)
        //   }
        // },
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
            path: '/private',
            name: 'private',
            component: PrivateView,
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
    ],
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router
