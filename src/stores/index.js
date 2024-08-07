import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(persist)

export default pinia

export * from './user'
export * from './counter'
export * from './avatar'
export * from './infoGroups'
export * from './filter'
export * from './HomeModal.js'