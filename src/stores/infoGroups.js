import {defineStore} from "pinia"
import {ref} from "vue";

export const infoGroupsStore = defineStore("infoGroupResponse", () => {
        const infoGroupData = ref({0: []})

        const presentTalent = ref(null)

        const setInfoGroupData = (id, data) => {
            infoGroupData.value = {
                ...infoGroupData.value,
                [id]: data
            }
        }

        const resetPresentTalent = () => {
            presentTalent.value = 0
        }

        return {infoGroupData, presentTalent, resetPresentTalent, setInfoGroupData}
    },
    {
        persist: true
    })