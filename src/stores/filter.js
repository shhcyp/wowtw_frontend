import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useFilterStore = defineStore('filter', () => {
    const classData = ref([
        {
            id: 1,
            icon: '/classes/warrior.webp',
            name: '战士',
            abbreviation: '战士',
            talents: [
                {talentId: 1, icon: '/talents/warrior_fury.webp', name: '狂怒（团）'},
                {talentId: 2, icon: '/talents/warrior_fury.webp', name: '狂怒（副）'},
                {talentId: 3, icon: '/talents/warrior_arm.webp', name: '武器（团）'},
                {talentId: 4, icon: '/talents/warrior_arm.webp', name: '武器（副）'},
                {talentId: 5, icon: '/talents/warrior_protection.webp', name: '防御（团）'},
                {talentId: 6, icon: '/talents/warrior_protection.webp', name: '防御（副）'},
                {talentId: 7, icon: '/talents/magetower.webp', name: '法师塔'},
            ]
        },
        {
            id: 2,
            icon: '/classes/hunter.webp',
            name: '猎人',
            abbreviation: '猎人',
            talents: [
                {talentId: 8, icon: '/talents/hunter_marksmanship.webp', name: '射击（团）'},
                {talentId: 9, icon: '/talents/hunter_marksmanship.webp', name: '射击（副）'},
                {talentId: 10, icon: '/talents/hunter_beast.webp', name: '野兽（团）'},
                {talentId: 11, icon: '/talents/hunter_beast.webp', name: '野兽（副）'},
                {talentId: 12, icon: '/talents/hunter_survival.webp', name: '生存（团）'},
                {talentId: 13, icon: '/talents/hunter_survival.webp', name: '生存（副）'},
                {talentId: 14, icon: '/talents/magetower.webp', name: '法师塔'},
            ]
        },
        {
            id: 3,
            icon: '/classes/shaman.webp',
            name: '萨满',
            abbreviation: '萨满',
            talents: [
                {talentId: 15, icon: '/talents/shaman_enhancement.webp', name: '增强（团）'},
                {talentId: 16, icon: '/talents/shaman_enhancement.webp', name: '增强（副）'},
                {talentId: 17, icon: '/talents/shaman_elemental.webp', name: '元素（团）'},
                {talentId: 18, icon: '/talents/shaman_elemental.webp', name: '元素（副）'},
                {talentId: 19, icon: '/talents/shaman_restoration.webp', name: '恢复'},
                {talentId: 20, icon: '/talents/magetower.webp', name: '法师塔'},
            ]
        },
        {
            id: 4,
            icon: '/classes/rogue.webp',
            name: '潜行者',
            abbreviation: 'RL',
            talents: [
                {talentId: 21, icon: '/talents/rogue_assassination.webp', name: '奇袭（团）'},
                {talentId: 22, icon: '/talents/rogue_assassination.webp', name: '奇袭（副）'},
                {talentId: 23, icon: '/talents/rogue_subtlety.webp', name: '敏锐（团）'},
                {talentId: 24, icon: '/talents/rogue_subtlety.webp', name: '敏锐（副）'},
                {talentId: 25, icon: '/talents/rogue_outlaw.webp', name: '狂徒（团）'},
                {talentId: 26, icon: '/talents/rogue_outlaw.webp', name: '狂徒（副）'},
                {talentId: 27, icon: '/talents/magetower.webp', name: '法师塔'},
            ]
        },
        {
            id: 5,
            icon: '/classes/mage.webp',
            name: '法师',
            abbreviation: '法师',
            talents: [
                {talentId: 28, icon: '/talents/mage_fire.webp', name: '火焰（团）'},
                {talentId: 29, icon: '/talents/mage_fire.webp', name: '火焰（副）'},
                {talentId: 30, icon: '/talents/mage_frost.webp', name: '冰霜（团）'},
                {talentId: 31, icon: '/talents/mage_frost.webp', name: '冰霜（副）'},
                {talentId: 32, icon: '/talents/mage_arcane.webp', name: '奥术（团）'},
                {talentId: 33, icon: '/talents/mage_arcane.webp', name: '奥术（副）'},
                {talentId: 34, icon: '/talents/magetower.webp', name: '法师塔'},
            ]
        },
        {
            id: 6,
            icon: '/classes/druid.webp',
            name: '德鲁伊',
            abbreviation: '小德',
            talents: [
                {talentId: 35, icon: '/talents/druid_feral.webp', name: '野性（团）'},
                {talentId: 36, icon: '/talents/druid_feral.webp', name: '野性（副）'},
                {talentId: 37, icon: '/talents/druid_balance.webp', name: '平衡（团）'},
                {talentId: 38, icon: '/talents/druid_balance.webp', name: '平衡（副）'},
                {talentId: 39, icon: '/talents/druid_guardian.webp', name: '守护（团）'},
                {talentId: 40, icon: '/talents/druid_guardian.webp', name: '守护（副）'},
                {talentId: 41, icon: '/talents/druid_restoration.webp', name: '恢复'},
                {talentId: 42, icon: '/talents/magetower.webp', name: '法师塔'},
            ]
        },
        {
            id: 7,
            icon: '/classes/paladin.webp',
            name: '圣骑士',
            abbreviation: '骑士',
            talents: [
                {talentId: 43, icon: '/talents/paladin_retribution.webp', name: '惩戒（团）'},
                {talentId: 44, icon: '/talents/paladin_retribution.webp', name: '惩戒（副）'},
                {talentId: 45, icon: '/talents/paladin_protection.webp', name: '防护（团）'},
                {talentId: 46, icon: '/talents/paladin_protection.webp', name: '防护（副）'},
                {talentId: 47, icon: '/talents/paladin_holy.webp', name: '神圣'},
                {talentId: 48, icon: '/talents/magetower.webp', name: '法师塔'},
            ]
        },
        {
            id: 8,
            icon: '/classes/warlock.webp',
            name: '术士',
            abbreviation: '术士',
            talents: [
                {talentId: 49, icon: '/talents/warlock_affliction.webp', name: '痛苦（团）'},
                {talentId: 50, icon: '/talents/warlock_affliction.webp', name: '痛苦（副）'},
                {talentId: 51, icon: '/talents/warlock_demonology.webp', name: '恶魔（团）'},
                {talentId: 52, icon: '/talents/warlock_demonology.webp', name: '恶魔（副）'},
                {talentId: 53, icon: '/talents/warlock_destruction.webp', name: '毁灭（团）'},
                {talentId: 54, icon: '/talents/warlock_destruction.webp', name: '毁灭（副）'},
                {talentId: 55, icon: '/talents/magetower.webp', name: '法师塔'},
            ]
        },
        {
            id: 9,
            icon: '/classes/priest.webp',
            name: '牧师',
            abbreviation: '牧师',
            talents: [
                {talentId: 56, icon: '/talents/priest_shadow.webp', name: '暗影（团）'},
                {talentId: 57, icon: '/talents/priest_shadow.webp', name: '暗影（副）'},
                {talentId: 58, icon: '/talents/priest_holy.webp', name: '神伤（团）'},
                {talentId: 59, icon: '/talents/priest_holy.webp', name: '神伤（副）'},
                {talentId: 60, icon: '/talents/priest_holy.webp', name: '神圣（疗）'},
                {talentId: 61, icon: '/talents/priest_discipline.webp', name: '戒律（团）'},
                {talentId: 62, icon: '/talents/priest_discipline.webp', name: '戒律（副）'},
                {talentId: 63, icon: '/talents/magetower.webp', name: '法师塔'},
            ]
        },
        {
            id: 10,
            icon: '/classes/dk.webp',
            name: '死亡骑士',
            abbreviation: 'DK',
            talents: [
                {talentId: 64, icon: '/talents/dk_frost.webp', name: '冰霜（团）'},
                {talentId: 65, icon: '/talents/dk_frost.webp', name: '冰霜（副）'},
                {talentId: 66, icon: '/talents/dk_unholy.webp', name: '邪恶（团）'},
                {talentId: 67, icon: '/talents/dk_unholy.webp', name: '邪恶（副）'},
                {talentId: 68, icon: '/talents/dk_blood.webp', name: '鲜血（团）'},
                {talentId: 69, icon: '/talents/dk_blood.webp', name: '鲜血（副）'},
                {talentId: 70, icon: '/talents/magetower.webp', name: '法师塔'},
            ]
        },
        {
            id: 11,
            icon: '/classes/monk.webp',
            name: '武僧',
            abbreviation: '武僧',
            talents: [
                {talentId: 71, icon: '/talents/monk_windwalker.webp', name: '踏风（团）'},
                {talentId: 72, icon: '/talents/monk_windwalker.webp', name: '踏风（副）'},
                {talentId: 73, icon: '/talents/monk_brewmaster.webp', name: '酒仙（团）'},
                {talentId: 74, icon: '/talents/monk_brewmaster.webp', name: '酒仙（副）'},
                {talentId: 75, icon: '/talents/monk_mistweaver.webp', name: '织雾（团）'},
                {talentId: 76, icon: '/talents/monk_mistweaver.webp', name: '织雾（副）'},
                {talentId: 77, icon: '/talents/magetower.webp', name: '法师塔'},
            ]
        },
        {
            id: 12,
            icon: '/classes/dh.webp',
            name: '恶魔猎手',
            abbreviation: 'DH',
            talents: [
                {talentId: 78, icon: '/talents/dh_havoc.webp', name: '浩劫（团）'},
                {talentId: 79, icon: '/talents/dh_havoc.webp', name: '浩劫（副）'},
                {talentId: 80, icon: '/talents/dh_vengeance.webp', name: '复仇'},
                {talentId: 81, icon: '/talents/magetower.webp', name: '法师塔'},
            ]
        },
        {
            id: 13,
            icon: '/classes/evoker.webp',
            name: '唤魔师',
            abbreviation: '龙人',
            talents: [
                {talentId: 82, icon: '/talents/evoker_devastation.webp', name: '湮灭（团）'},
                {talentId: 83, icon: '/talents/evoker_devastation.webp', name: '湮灭（副）'},
                {talentId: 84, icon: '/talents/evoker_preservation.webp', name: '恩护'},
            ]
        },
    ])

    const classIndex = ref(null)

    const talentIndex = ref(null)


    return {classData, classIndex, talentIndex}
})
