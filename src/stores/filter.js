import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
    const classData = ref([
      // {
        // type: 1,
        // classes: [
          {
            id: 1,
            icon: '/classes/warrior.webp',
            name: '战士',
            abbreviation: '战士',
            talents: [
              { 
                icon: '/talents/warrior_fury.webp',
                name: '狂怒（团）',
                gearsGroup: [
                  {
                    title: '护甲、戒指、饰品',
                    gears: [
                      { 
                        icon: '/plate/second_sight_helm.webp',
                        part: '头部',
                        name: '现实心像巨盔',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '尼奥罗萨，觉醒之城 - 恩佐斯',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/gathering_storm.webp', desc: '聚焦风暴', quality: '--white'},
                          {icon: '/enhancement/bastion_of_might.webp', desc: '千钧堡垒', quality: '--white'},
                          {icon: '/enhancement/elemental_whirl.webp', desc: '黑暗之心', quality: '--white'},
                        ]
                      },
                      { 
                        icon: '/miscellaneous/heart_of_azeroth.webp',
                        part: '颈部',
                        name: '艾泽拉斯之心',
                        quality: 'eternal',
                        isMark: false,
                        mark: null,
                        drop: '争霸艾泽拉斯 - 任务',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/blood_of_the_enemy.webp', desc: '仇敌之血'},
                          {icon: '/enhancement/the_formless_void.webp', desc: '无形虚空'},
                          {icon: '/enhancement/ripple_in_space.webp', desc: '空间涟漪'},
                          {icon: '/enhancement/condensed_life_force.webp', desc: '生命之凝力'},
                          {icon: '/enhancement/conflict_and_strife.webp', desc: '冲突与斗争'},
                          {icon: '/enhancement/memory_of_lucid_dreams.webp', desc: '清醒梦境之忆'},
                          {icon: '/enhancement/reaping_flames.webp', desc: ''},
                          {icon: '/enhancement/the_crucible_of_flame.webp', desc: '烈焰熔炉'},
                        ]
                      },
                      { 
                        icon: '/plate/any_azeritegear.webp',
                        part: '肩部',
                        name: '四环艾泽里特肩膀',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '争霸艾泽拉斯 - 史诗副本',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/bastion_of_might.webp', desc: '千钧堡垒'},
                          {icon: '/enhancement/gathering_storm.webp', desc: '聚焦风暴'},
                          {icon: '/enhancement/any_azerite.webp', desc: '自选'},
                        ]
                      },
                      { 
                        icon: '/plate/writhing_spaulders_of_madness.webp',
                        part: '肩部',
                        name: '蠕动疯狂肩甲',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '尼奥罗萨，觉醒之城 - 先知斯基特拉',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/bastion_of_might.webp', desc: '千钧堡垒'},
                          {icon: '/enhancement/heart_of_darkness.webp', desc: '黑暗之心'},
                          {icon: '/enhancement/overwhelming_power.webp', desc: '压倒能量'},
                        ]
                      },
                      { 
                        icon: '/miscellaneous/ashjra_kamas_shroud_of_resolve.webp',
                        part: '背部',
                        name: '阿什拉·卡马斯，决意之护',
                        quality: 'legendary',
                        isMark: false,
                        mark: null,
                        drop: '争霸艾泽拉斯 - 任务',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '至少12级'},
                          {icon: '/enhancement/enhance_normal.webp', desc: '初级能量'},
                        ]
                      },
                      { 
                        icon: '/miscellaneous/gong_lu_strength_of_xuen.webp',
                        part: '背部',
                        name: '功禄，雪怒之力',
                        quality: 'legendary',
                        isMark: true,
                        mark: [
                          { icon: '/legends/grandfathered.webp' },
                        ],
                        drop: '熊猫人之谜 - 任务',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '初级能量'},
                        ]
                      },
                      { 
                        icon: '/plate/breastplate_of_twilight_decimation.webp',
                        part: '胸部',
                        name: '暮光灭绝胸甲',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '尼奥罗萨，觉醒之城 - 维克修娜',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/bastion_of_might.webp', desc: '千钧堡垒'},
                          {icon: '/enhancement/gathering_storm.webp', desc: '聚焦风暴'},
                          {icon: '/enhancement/unstable_flames.webp', desc: '不稳定的烈焰'},
                        ]
                      },
                      { 
                        icon: '/plate/bracers_of_laughter.webp',
                        part: '腕部',
                        name: '杀戮护腕',
                        quality: 'excellent',
                        isMark: true,
                        mark: [
                          { icon: '/legends/socket.webp' },
                          { icon: '/legends/chromietime.webp' },
                        ],
                        drop: '魔导师平台 - 女祭司德莉希亚',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '护腕附魔'},
                        ]
                      },
                      { 
                        icon: '/plate/allied_wristguard_of_companionship.webp',
                        part: '腕部',
                        name: '同盟伴侣护腕',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '巨龙时代 - 锻造 / 制造订单',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/vault.webp', desc: '自然摇篮'},
                          {icon: '/enhancement/resplendent_illimited_diamond.webp', desc: '灿烂无限钻石 III'},
                          {icon: '/enhancement/yhux.webp', desc: '吸血之祈 III'},
                        ]
                      },
                      { 
                        icon: '/plate/bladespire_warbands.webp',
                        part: '腕部',
                        name: '刀塔作战护腕',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '格鲁尔的巢穴 - 莫加尔大王',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '护腕抚摸覆膜敷膜啊啊'},
                        ]
                      },
                      { 
                        icon: '/plate/molten_vanguard_s_crushers.webp',
                        part: '手部',
                        name: '熔火先锋的碎石手套',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '巨龙时代 - S3职业套装',
                        isExtraInfo: false,
                        extraInfo: null
                      },
                      { 
                        icon: '/plate/rethu_s_incessant_courage.webp',
                        part: '腰部',
                        name: '瑞苏的不竭勇气',
                        quality: 'legendary',
                        isMark: false,
                        mark: null,
                        drop: '军团再临 - 锻造   /  AH',
                        isExtraInfo: false,
                        extraInfo: null
                      },
                      { 
                        icon: '/plate/studded_girdle_of_virtue.webp',
                        part: '腰部',
                        name: '纯洁钉皮束带',
                        quality: 'excellent',
                        isMark: true,
                        mark: [
                          { icon: '/legends/socket.webp' },
                          { icon: '/legends/chromietime.webp' },
                        ],
                        drop: '幽暗沼泽 - 加兹安',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/delicate_primordial_ruby.webp', desc: '打第三孔'},
                        ]
                      },
                      { 
                        icon: '/plate/starfall_girdle.webp',
                        part: '腰部',
                        name: '坠星束带',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '奥杜尔 - 观察者奥尔加隆',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/delicate_primordial_ruby.webp', desc: '打第三孔'},
                        ]
                      },
                      { 
                        icon: '/plate/molten_vanguard_s_steel_tassets.webp',
                        part: '腿部',
                        name: '熔火先锋的钢铁腿罩',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '巨龙时代 - S3职业套装',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/fierce_armor_kit.webp', desc: '勇猛护甲片 III'},
                        ]
                      },
                      { 
                        icon: '/plate/dreadboots_of_the_legion.webp',
                        part: '脚部',
                        name: '军团恐怖战靴',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '黑暗神殿 - 灵魂之匣',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '脚步抚摸着名字'},
                        ]
                      },
                      { 
                        icon: '/plate/onslaught_treads.webp',
                        part: '脚部',
                        name: '冲锋胫甲',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '太阳井高地 - 菲米丝/艾瑞达双子',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/delicate_primordial_ruby.webp', desc: '武器天赋下打开代币'},
                          {icon: '/enhancement/enhance_normal.webp', desc: '脚步抚摸着名字'},
                        ]
                      },
                      { 
                        icon: '/plate/onslaught_treads.webp',
                        part: '脚部',
                        name: '寂夜战靴',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '奥杜尔 - 观察者奥尔加隆',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '脚步抚摸着名字'},
                        ]
                      },
                      { 
                        icon: '/plate/sunstrider_warboots.webp',
                        part: '脚部',
                        name: '逐日者战靴',
                        quality: 'excellent',
                        isMark: true,
                        mark: [
                          { icon: '/legends/chromietime.webp' },
                        ],
                        drop: '魔导师平台 - 凯尔萨斯·逐日者',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '脚步抚摸着名字'},
                        ]
                      },
                      { 
                        icon: '/miscellaneous/deadly_sinvyr_ring.webp',
                        part: '手指',
                        name: '致命罪钒之戒',
                        quality: 'excellent',
                        isMark: false,
                        mark: null,
                        drop: '暗影国度 - 珠宝加工  /  AH',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '匠力印记 IV'},
                          {icon: '/enhancement/enhance_normal.webp', desc: '前调语谐声之石'},
                          {icon: '/enhancement/enhance_normal.webp', desc: '全能公函'},
                          {icon: '/enhancement/enhance_normal.webp', desc: '全能之符'},
                        ]
                      },
                      { 
                        icon: '/miscellaneous/versatile_solenium_ring.webp',
                        part: '手指',
                        name: '万能珀银之戒',
                        quality: 'excellent',
                        isMark: false,
                        mark: null,
                        drop: '暗影国度 - 珠宝加工  /  AH',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '匠力印记 IV'},
                          {icon: '/enhancement/enhance_normal.webp', desc: '前调语谐声之石'},
                          {icon: '/enhancement/enhance_normal.webp', desc: '全能公函'},
                          {icon: '/enhancement/enhance_normal.webp', desc: '全能之符'},
                        ]
                      },
                      { 
                        icon: '/miscellaneous/thok_s_tail_tip.webp',
                        part: '饰品',
                        name: '索克的尾巴尖',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '决战奥格瑞玛 - 嗜血的索克',
                        isExtraInfo: false,
                        extraInfo: null
                      },
                      { 
                        icon: '/miscellaneous/jom_gabbar.webp',
                        part: '饰品',
                        name: '沙虫之毒',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '安其拉神殿 - 奥罗',
                        isExtraInfo: false,
                        extraInfo: null
                      },
                      { 
                        icon: '/miscellaneous/the_first_sigil.webp',
                        part: '饰品',
                        name: '原初印记',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '初诞者圣墓 - 死亡万神殿原型体',
                        isExtraInfo: false,
                        extraInfo: null
                      },
                      { 
                        icon: '/miscellaneous/chipped_soul_prism.webp',
                        part: '饰品',
                        name: '碎裂的灵魂棱镜',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '德拉诺之王 - 世界BOSS霸主卡扎克',
                        isExtraInfo: false,
                        extraInfo: null
                      },
                      { 
                        icon: '/miscellaneous/pendant_of_the_violet_eye.webp',
                        part: '饰品',
                        name: '紫罗兰之眼坠饰',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '卡拉赞 - 埃兰之影',
                        isExtraInfo: false,
                        extraInfo: null
                      },
                      { 
                        icon: '/miscellaneous/meteorite_crystal.webp',
                        part: '饰品',
                        name: '陨星水晶',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '奥杜尔 - 观察者奥尔加隆',
                        isExtraInfo: false,
                        extraInfo: null
                      },
                      { 
                        icon: '/miscellaneous/armored_elekk_tusk.webp',
                        part: '饰品',
                        name: '装甲雷象獠牙',
                        quality: 'epic',
                        isMark: true,
                        mark: [
                          { icon: '/legends/chromietime.webp' },
                        ],
                        drop: '德拉诺影月谷 - 宝藏',
                        isExtraInfo: false,
                        extraInfo: null
                      },
                      { 
                        icon: '/miscellaneous/prophecy_tarot.webp',
                        part: '饰品',
                        name: '先知塔罗牌',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '军团再临 - 铭文 / AH',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/relic_of_the_past_v.webp', desc: '故往神器 IV'},
                        ]
                      },
                      { 
                        icon: '/miscellaneous/unstable_arcanocrystal.webp',
                        part: '饰品',
                        name: '不稳定的奥术水晶',
                        quality: 'epic',
                        isMark: true,
                        mark: [
                          { icon: '/legends/socket.webp' },
                        ],
                        drop: '军团再临 - 世界BOSS凋零者吉姆',
                        isExtraInfo: false,
                        extraInfo: null
                      },
                      { 
                        icon: '/miscellaneous/purified_bindings_of_immerseus.webp',
                        part: '饰品',
                        name: '伊墨苏斯的净化之缚',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '决战奥格瑞玛 - 伊墨苏斯',
                        isExtraInfo: false,
                        extraInfo: null
                      },
                      { 
                        icon: '/miscellaneous/prismatic_prison_of_pride.webp',
                        part: '饰品',
                        name: '傲慢之棱光囚笼',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '决战奥格瑞玛 - 傲之煞',
                        isExtraInfo: false,
                        extraInfo: null
                      },
                    ],
                  },
                  {
                    title: '武器-主手',
                    gears: [
                      { 
                        icon: '/weapons/the_jackhammer.webp',
                        part: '双手',
                        name: '千斤锤',
                        quality: 'excellent',
                        isMark: true,
                        mark: [
                          { icon: '/legends/chromietime.webp' },
                        ],
                        drop: '奥达曼 - 小怪掉落 / AH',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                      { 
                        icon: '/weapons/singing_crystal_axe.webp',
                        part: '双手',
                        name: '歌唱水晶战斧',
                        quality: 'epic',
                        isMark: true,
                        mark: [
                          { icon: '/legends/chromietime.webp' },
                        ],
                        drop: '燃烧的远征 - 世界掉落 / AH',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                      { 
                        icon: '/weapons/eskhandar_s_right_claw.webp',
                        part: '单手',
                        name: '艾斯卡达尔的右爪',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '熔火之心 - 玛格曼达',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                      { 
                        icon: '/weapons/blackout_truncheon.webp',
                        part: '单手',
                        name: '刃拳',
                        quality: 'excellent',
                        isMark: true,
                        mark: [
                          { icon: '/legends/chromietime.webp' },
                        ],
                        drop: '破碎大厅 - 酋长卡加斯·刃拳',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                    ]
                  },
                  {
                    title: '武器-副手',
                    gears: [
                      { 
                        icon: '/weapons/singing_crystal_axe.webp',
                        part: '双手',
                        name: '歌唱水晶战斧',
                        quality: 'epic',
                        isMark: true,
                        mark: [
                          { icon: '/legends/chromietime.webp' },
                        ],
                        drop: '燃烧的远征 - 世界掉落 / AH',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                      { 
                        icon: '/weapons/shadowmourne.webp',
                        part: '双手',
                        name: '影之哀伤',
                        quality: 'legendary',
                        isMark: false,
                        mark: null,
                        drop: '冰冠堡垒 - 任务',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                      { 
                        icon: '/weapons/bonereaver_s_edge.webp',
                        part: '双手',
                        name: '削骨之刃',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '熔火之心 - 拉格纳罗斯',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                      { 
                        icon: '/weapons/shin_ka_execution_of_dominion.webp',
                        part: '双手',
                        name: '辛卡，皇权践行者',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '永春台 - 惧之煞',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/eye_of_the_black_prince.webp', desc: '黑王子之眼'},
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                      { 
                        icon: '/weapons/apolyon_the_soul_render.webp',
                        part: '双手',
                        name: '奥伯莱恩，裂魂之剑',
                        quality: 'epic',
                        isMark: false,
                        mark: null,
                        drop: '太阳井高地 - 基尔加丹',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                      { 
                        icon: '/weapons/crow_wing_reaper.webp',
                        part: '双手',
                        name: '鸦翼巨斧',
                        quality: 'excellent',
                        isMark: true,
                        mark: [
                          { icon: '/legends/chromietime.webp' },
                        ],
                        drop: '赛泰克大厅 - 利爪之王艾吉斯',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                      { 
                        icon: '/weapons/vibroblade.webp',
                        part: '单手',
                        name: '电流剑',
                        quality: 'excellent',
                        isMark: true,
                        mark: [
                          { icon: '/legends/chromietime.webp' },
                        ],
                        drop: '诺莫瑞根 - 小怪掉落 / AH',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                      { 
                        icon: '/weapons/dazzling_longsword.webp',
                        part: '单手',
                        name: '眩光',
                        quality: 'epic',
                        isMark: true,
                        mark: [
                          { icon: '/legends/chromietime.webp' },
                        ],
                        drop: '经典旧世 - 世界掉落 / AH',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                      { 
                        icon: '/weapons/blackout_truncheon.webp',
                        part: '单手',
                        name: '眩晕之棒',
                        quality: 'excellent',
                        isMark: true,
                        mark: [
                          { icon: '/legends/chromietime.webp' },
                        ],
                        drop: '暗影迷宫 - 沃匹尔大师',
                        isExtraInfo: true,
                        extraInfo: [
                          {icon: '/enhancement/enhance_normal.webp', desc: '十字军'},
                        ]
                      },
                    ]
                  },
                ],
                talentTrees: [
                  {
                    title: '天赋-短时间战斗',
                    image: {
                      first: '/talentTree/windwalker_first.webp',center: '',
                      last: '/talentTree/windwalker_last.webp'
                    },
                  },
                  {
                    title: '天赋-长时间战斗',
                    image: {
                      first: '/talentTree/windwalker_first.webp',center: '',
                      last: '/talentTree/windwalker_last.webp'
                    },
                  },
                ]
              }, 
              { icon: '/talents/warrior_fury.webp', name: '狂怒（副）' },
              { icon: '/talents/warrior_arm.webp', name: '武器（团）' },
              { icon: '/talents/warrior_arm.webp', name: '武器（副）' },
              { icon: '/talents/warrior_protection.webp', name: '防御（团）' },
              { icon: '/talents/warrior_protection.webp', name: '防御（副）' },
              { icon: '/talents/magetower.webp', name: '法师塔' },
            ]
          },
          {
            id: 2,
            icon: '/classes/hunter.webp',
            name: '猎人',
            abbreviation: '猎人',
            talents: [
              { icon: '/talents/hunter_marksmanship.webp', name: '射击（团）' },
              { icon: '/talents/hunter_marksmanship.webp', name: '射击（副）' },
              { icon: '/talents/hunter_beast.webp', name: '野兽（团）' },
              { icon: '/talents/hunter_beast.webp', name: '野兽（副）' },
              { icon: '/talents/hunter_survival.webp', name: '生存（团）' },
              { icon: '/talents/hunter_survival.webp', name: '生存（副）' },
              { icon: '/talents/magetower.webp', name: '法师塔' },
            ]
          },
          {
            id: 3,
            icon: '/classes/shaman.webp',
            name: '萨满',
            abbreviation: '萨满',
            talents: [
              { icon: '/talents/shaman_enhancement.webp', name: '增强（团）' },
              { icon: '/talents/shaman_enhancement.webp', name: '增强（副）' },
              { icon: '/talents/shaman_elemental.webp', name: '元素（团）' },
              { icon: '/talents/shaman_elemental.webp', name: '元素（副）' },
              { icon: '/talents/shaman_restoration.webp', name: '恢复' },
              { icon: '/talents/magetower.webp', name: '法师塔' },
            ]
          },
          {
            id: 4,
            icon: '/classes/rogue.webp',
            name: '潜行者',
            abbreviation: 'RL',
            talents: [
              { icon: '/talents/rogue_assassination.webp', name: '奇袭（团）' },
              { icon: '/talents/rogue_assassination.webp', name: '奇袭（副）' },
              { icon: '/talents/rogue_subtlety.webp', name: '敏锐（团）' },
              { icon: '/talents/rogue_subtlety.webp', name: '敏锐（副）' },
              { icon: '/talents/rogue_outlaw.webp', name: '狂徒（团）' },
              { icon: '/talents/rogue_outlaw.webp', name: '狂徒（副）' },
              { icon: '/talents/magetower.webp', name: '法师塔' },
            ]
          },
          {
            id: 5,
            icon: '/classes/mage.webp',
            name: '法师',
            abbreviation: '法师',
            talents: [
              { icon: '/talents/mage_fire.webp', name: '火焰（团）' },
              { icon: '/talents/mage_fire.webp', name: '火焰（副）' },
              { icon: '/talents/mage_frost.webp', name: '冰霜（团）' },
              { icon: '/talents/mage_frost.webp', name: '冰霜（副）' },
              { icon: '/talents/mage_arcane.webp', name: '奥术（团）' },
              { icon: '/talents/mage_arcane.webp', name: '奥术（副）' },
              { icon: '/talents/magetower.webp', name: '法师塔' },
            ]
          },
          {
            id: 6,
            icon: '/classes/druid.webp',
            name: '德鲁伊',
            abbreviation: '小德',
            talents: [
              { icon: '/talents/druid_feral.webp', name: '野性（团）' },
              { icon: '/talents/druid_feral.webp', name: '野性（副）' },
              { icon: '/talents/druid_balance.webp', name: '平衡（团）' },
              { icon: '/talents/druid_balance.webp', name: '平衡（副）' },
              { icon: '/talents/druid_guardian.webp', name: '守护（团）' },
              { icon: '/talents/druid_guardian.webp', name: '守护（副）' },
              { icon: '/talents/druid_restoration.webp', name: '恢复' },
              { icon: '/talents/magetower.webp', name: '法师塔' },
            ]
          },
          {
            id: 7,
            icon: '/classes/paladin.webp',
            name: '圣骑士',
            abbreviation: '骑士',
            talents: [
              { icon: '/talents/paladin_retribution.webp', name: '惩戒（团）' },
              { icon: '/talents/paladin_retribution.webp', name: '惩戒（副）' },
              { icon: '/talents/paladin_protection.webp', name: '防护（团）' },
              { icon: '/talents/paladin_protection.webp', name: '防护（副）' },
              { icon: '/talents/paladin_holy.webp', name: '神圣' },
              { icon: '/talents/magetower.webp', name: '法师塔' },
            ]
          },
          {
            id: 8,
            icon: '/classes/warlock.webp',
            name: '术士',
            abbreviation: '术士',
            talents: [
              { icon: '/talents/warlock_affliction.webp', name: '痛苦（团）' },
              { icon: '/talents/warlock_affliction.webp', name: '痛苦（副）' },
              { icon: '/talents/warlock_demonology.webp', name: '恶魔（团）' },
              { icon: '/talents/warlock_demonology.webp', name: '恶魔（副）' },
              { icon: '/talents/warlock_destruction.webp', name: '毁灭（团）' },
              { icon: '/talents/warlock_destruction.webp', name: '毁灭（副）' },
              { icon: '/talents/magetower.webp', name: '法师塔' },
            ]
          },
          {
            id: 9,
            icon: '/classes/priest.webp',
            name: '牧师',
            abbreviation: '牧师',
            talents: [
              { icon: '/talents/priest_shadow.webp', name: '暗影（团）' },
              { icon: '/talents/priest_shadow.webp', name: '暗影（副）' },
              { icon: '/talents/priest_holy.webp', name: '神圣' },
              { icon: '/talents/priest_discipline.webp', name: '戒律' },
              { icon: '/talents/magetower.webp', name: '法师塔' },
            ]
          },
          {
            id: 10,
            icon: '/classes/dk.webp',
            name: '死亡骑士',
            abbreviation: 'DK',
            talents: [
              { icon: '/talents/dk_frost.webp', name: '冰霜（团）' },
              { icon: '/talents/dk_frost.webp', name: '冰霜（副）' },
              { icon: '/talents/dk_unholy.webp', name: '邪恶（团）' },
              { icon: '/talents/dk_unholy.webp', name: '邪恶（副）' },
              { icon: '/talents/dk_blood.webp', name: '鲜血（团）' },
              { icon: '/talents/dk_blood.webp', name: '鲜血（副）' },
              { icon: '/talents/magetower.webp', name: '法师塔' },
            ]
          },
          {
            id: 11,
            icon: '/classes/monk.webp',
            name: '武僧',
            abbreviation: '武僧',
            talents: [
              { icon: '/talents/monk_windwalker.webp', name: '踏风（团）' },
              { icon: '/talents/monk_windwalker.webp', name: '踏风（副）' },
              { icon: '/talents/monk_brewmaster.webp', name: '酒仙（团）' },
              { icon: '/talents/monk_brewmaster.webp', name: '酒仙（副）' },
              { icon: '/talents/monk_mistweaver.webp', name: '织雾' },
              { icon: '/talents/magetower.webp', name: '法师塔' },
            ]
          },
          {
            id: 12,
            icon: '/classes/dh.webp',
            name: '恶魔猎手',
            abbreviation: 'DH',
            talents: [
              { icon: '/talents/dh_havoc.webp', name: '浩劫（团）' },
              { icon: '/talents/dh_havoc.webp', name: '浩劫（副）' },
              { icon: '/talents/dh_vengeance.webp', name: '复仇' },
              { icon: '/talents/magetower.webp', name: '法师塔' },
            ]
          },
          {
            id: 13,
            icon: '/classes/evoker.webp',
            name: '唤魔师',
            abbreviation: '龙人',
            talents: [
              { icon: '/talents/evoker_devastation.webp', name: '湮灭（团）' },
              { icon: '/talents/evoker_devastation.webp', name: '湮灭（副）' },
              { icon: '/talents/evoker_preservation.webp', name: '恩护' },
            ]
          },
        // ]
      // }
    ])
    const classIndex = ref(0)
    // const selectedIndex = ref(0)

    const talentIndex = ref(0)
  return { classData, classIndex, talentIndex }
})
