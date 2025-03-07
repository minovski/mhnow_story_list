const season_story = {
  title: '嵐が誘う泡沫の宴',
  chapter_list: [
    /* 真夏の合宿 */
    {
      title: '真夏の合宿',
      quest_list: [
        { seq: 0, type: emg, target: 'バサルモス（★ｎ）', cnt: 1 }
      ]
    },
    /* かわして討つべし */
    {
      title: 'かわして討つべし',
      quest_list: [
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 3 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 5 },
        { seq: 0, type: matl, target: '採集', cnt: 5 },
        { seq: 1, type: emg, target: 'ドスジャグラス（★ｎ）', cnt: 1 },
        { seq: 2, type: hunt, target: '大型モンスター（★ｎ－２）', cnt: 1 },
        { seq: 2, type: hunt, target: 'モンスター', cnt: 5 },
        { seq: 2, type: matl, target: '採集', cnt: 5 },
        { seq: 3, type: emg, target: 'ツィツィヤック（★ｎ）', cnt: 1 }
      ]
    },
    /* 追跡訓練 */
    {
      title: '追跡訓練',
      quest_list: [
        { seq: 0, type: matl, target: '骨らしき漂流物（採集ポイント）', cnt: 5 },
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 3 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 5 },
        { seq: 1, type: hunt, target: '大型モンスター', cnt: 3 },
        { seq: 1, type: hunt, target: 'モンスター', cnt: 5 },
        { seq: 1, type: matl, target: '採集', cnt: 5 },
        { seq: 2, type: hunt, target: '大型モンスター（★ｎ－２）', cnt: 3 },
        { seq: 2, type: hunt, target: 'モンスター', cnt: 5 },
        { seq: 2, type: matl, target: '採集', cnt: 5 },
        { seq: 3, type: matl, target: '骨塚', cnt: 5 },
        { seq: 3, type: hunt, target: '大型モンスター', cnt: 3 },
        { seq: 3, type: matl, target: '採集', cnt: 5 },
        { seq: 4, type: emg, target: 'ラドバルキン（★ｎ）', cnt: 1 }
      ]
    },
    /* 搦め手の使い手 */
    {
      title: '搦め手の使い手',
      quest_list: [
        { seq: 0, type: hunt, target: '弱点属性武器使用', cnt: 5 },
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 0, type: matl, target: '採集', cnt: 10 },
        { seq: 1, type: hunt, target: 'ドスギルオス', cnt: 2 },
        { seq: 1, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 1, type: matl, target: '採集', cnt: 10 },
        { seq: 2, type: emg, target: 'プケプケ（★ｎ）', cnt: 1 },
        { seq: 3, type: hunt, target: 'ボルボロス', cnt: 2 },
        { seq: 3, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 3, type: matl, target: '採集', cnt: 10 },
        { seq: 4, type: emg, target: 'トビカガチ（★ｎ）', cnt: 1 }
      ]
    },
    /* 心技体 */
    {
      title: '心技体',
      quest_list: [
        { seq: 0, type: hunt, target: 'プケプケ（頭部位破壊）', cnt: 1 },
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 0, type: matl, target: '採集', cnt: 10 },
        { seq: 1, type: matl, target: '鉱脈', cnt: 5 },
        { seq: 1, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 1, type: matl, target: '採集', cnt: 10 },
        { seq: 2, type: hunt, target: 'ツィツィヤック', cnt: 2 },
        { seq: 2, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 2, type: matl, target: '採集', cnt: 10 },
        { seq: 3, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 3, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 3, type: matl, target: '採集', cnt: 10 },
        { seq: 4, type: emg, target: 'バフバロ（★ｎ）', cnt: 1 }
      ]
    },
    /* 最後の試練' */
    {
      title: '最後の試練',
      quest_list: [
        { seq: 0, type: hunt, target: '大型モンスター（★ｎ－２）', cnt: 3 },
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 0, type: matl, target: '採集', cnt: 10 },
        { seq: 1, type: emg, target: 'ドスギルオス（★ｎ）', cnt: 1 },
        { seq: 2, type: hunt, target: 'クルルヤック', cnt: 2 },
        { seq: 2, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 2, type: matl, target: '採集', cnt: 10 },
        { seq: 3, type: matl, target: '骨塚', cnt: 5 },
        { seq: 3, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 3, type: matl, target: '採集', cnt: 10 },
        { seq: 4, type: emg, target: 'オドガロン（★ｎ）', cnt: 1 }
      ]
    },
    /* 宴の知らせ */
    {
      title: '宴の知らせ',
      quest_list: [
        { seq: 0, type: hunt, target: '弱点属性武器使用', cnt: 5 },
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 0, type: matl, target: '採集', cnt: 10 },
        { seq: 1, type: matl, target: '鉱脈', cnt: 5 },
        { seq: 1, type: hunt, target: '沼地の大型モンスター', cnt: 3 },
        { seq: 1, type: matl, target: '採集', cnt: 10 },
        { seq: 2, type: hunt, target: 'パオウルムー', cnt: 2 },
        { seq: 2, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 2, type: matl, target: '採集', cnt: 10 },
        { seq: 3, type: matl, target: '正体不明の液体（採集ポイント）', cnt: 10 },
        { seq: 3, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 3, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 4, type: emg, target: 'フルフル（★ｎ）', cnt: 1 }
      ]
    },
    /* 熱狂の会場 */
    {
      title: '熱狂の会場',
      quest_list: [
        { seq: 0, type: hunt, target: '森林の大型モンスター', cnt: 5 },
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 0, type: matl, target: '採集', cnt: 12 },
        { seq: 1, type: emg, target: 'アンジャナフ（★ｎ）', cnt: 1 },
        { seq: 2, type: hunt, target: 'リオレイア', cnt: 3 },
        { seq: 2, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 2, type: matl, target: '採集', cnt: 12 },
        { seq: 3, type: matl, target: '植物', cnt: 10 },
        { seq: 3, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 3, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 4, type: emg, target: 'リオレイア亜種（★ｎ）', cnt: 1 }
      ]
    },
    /* 危険な水遊び */
    {
      title: '危険な水遊び',
      quest_list: [
        { seq: 0, type: hunt, target: 'プケプケ', cnt: 3 },
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 0, type: matl, target: '採集', cnt: 12 },
        { seq: 1, type: matl, target: '鉱脈', cnt: 10 },
        { seq: 1, type: hunt, target: '大型モンスター', cnt: 12 },
        { seq: 1, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 2, type: hunt, target: '大型モンスター（★ｎ）', cnt: 12 },
        { seq: 2, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 2, type: matl, target: '採集', cnt: 12 },
        { seq: 3, type: hunt, target: '弱点属性武器使用', cnt: 5 },
        { seq: 3, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 3, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 4, type: emg, target: 'プケプケ亜種（★ｎ）', cnt: 1 }
      ]
    },
    /* 狙われたトラック */
    {
      title: '狙われたトラック',
      quest_list: [
        { seq: 0, type: matl, target: '植物', cnt: 10 },
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 1, type: hunt, target: 'リオレイア（頭部位破壊）', cnt: 2 },
        { seq: 1, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 1, type: matl, target: '採集', cnt: 12 },
        { seq: 2, type: hunt, target: '弱点属性武器使用', cnt: 5 },
        { seq: 2, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 2, type: matl, target: '採集', cnt: 12 },
        { seq: 3, type: hunt, target: '大型モンスター（★７）', cnt: 5 },
        { seq: 3, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 3, type: matl, target: '採集', cnt: 12 },
        { seq: 4, type: emg, target: 'リオレウス亜種（★ｎ）', cnt: 1 }
      ]
    },
    /* いざ会場へ */
    {
      title: 'いざ会場へ',
      quest_list: [
        { seq: 0, type: hunt, target: '沼地の大型モンスター', cnt: 5 },
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 0, type: matl, target: '採集', cnt: 12 },
        { seq: 1, type: hunt, target: 'フルフル（頭部位破壊）', cnt: 2 },
        { seq: 1, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 1, type: matl, target: '採集', cnt: 12 },
        { seq: 2, type: emg, target: 'レイギエナ（★ｎ）', cnt: 1 },
        { seq: 3, type: hunt, target: 'ラドバルキン', cnt: 3 },
        { seq: 3, type: hunt, target: '砂漠の大型モンスター', cnt: 5 },
        { seq: 3, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 4, type: emg, target: 'ディアブロス亜種（★ｎ）', cnt: 1 }
      ]
    },
    /* スペシャルゲスト */
    {
      title: 'スペシャルゲスト',
      quest_list: [
        { seq: 0, type: hunt, target: 'バサルモス', cnt: 3 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 0, type: matl, target: '採集', cnt: 12 },
        { seq: 1, type: matl, target: '植物', cnt: 10 },
        { seq: 1, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 1, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 2, type: hunt, target: '弱点属性武器使用', cnt: 5 },
        { seq: 2, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 2, type: matl, target: '採集', cnt: 12 },
        { seq: 3, type: hunt, target: '大型モンスター（★ｎ）', cnt: 5 },
        { seq: 3, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 3, type: matl, target: '採集', cnt: 12 },
        { seq: 4, type: emg, target: 'リオレウス（★ｎ）', cnt: 1 }
      ]
    },
    /* 宴は誰のもの */
    {
      title: '宴は誰のもの',
      quest_list: [
        { seq: 0, type: emg, target: 'ジンオウガ（★ｎ）', cnt: 1 }
      ]
    }
  ]
}
