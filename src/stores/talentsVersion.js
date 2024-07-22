import {defineStore} from 'pinia'
import {ref} from "vue";

export const useTalentsVersionStore = defineStore('talentsVersion', () => {
    const talentsVersionData = ref({})

    const latestTalentsVersionData = ref({})

    const setTalentsVersionData = () => {
        talentsVersionData.value = latestTalentsVersionData.value
        latestTalentsVersionData.value = null
    }

    // 比较版本号并返回不一致的id列表
    const getMismatchedIds = () => {
        const mismatchedIds = []
        for (const id in latestTalentsVersionData.value) {
            const adjustedId = parseInt(id) + 1 // 调整ID从0开始到从1开始
            if (latestTalentsVersionData.value[id].version !== talentsVersionData.value[id]?.version) {
                mismatchedIds.push(adjustedId)
            }
        }
        return mismatchedIds
    }

    return {talentsVersionData, latestTalentsVersionData, setTalentsVersionData, getMismatchedIds}
}, {
    persist: true
})