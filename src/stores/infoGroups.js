import {defineStore} from "pinia"
import {ref} from "vue";

export const useInfoGroupsStore = defineStore("infoGroupResponse", () => {
        const infoGroupData = ref({})

        const presentTalent = ref(null)

        const setInfoGroupData = (id, data) => {
            infoGroupData.value = {
                ...infoGroupData.value,
                [id]: data
            }
        }

        const resetPresentTalent = () => {
            presentTalent.value = null
        }

        return {infoGroupData, presentTalent, resetPresentTalent, setInfoGroupData}
    },
    {
        persist: false
    })