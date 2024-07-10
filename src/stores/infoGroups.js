import {defineStore} from "pinia"
import {ref} from "vue";

export const infoGroupsStore = defineStore("infoGroupResponse", () => {
    const infoGroupData = ref(null)

    return {infoGroupData}
},
    {
    persist: true
})