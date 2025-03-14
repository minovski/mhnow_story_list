const season_story = {
  title: '春陽薙ぐソードテイル',
  chapter_list: [
    {
      title: '拠点の始動',
      quest_list: [
        { seq: 0, type: emg, target: 'アオアシラ（★ｎ）', cnt: 1, subtitle: '青き来訪者' }
      ]
    },
    {
      title: '山野の探索者',
      quest_list: [
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 3 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 5 },
        { seq: 0, type: matl, target: '採集', cnt: 5 },
        { seq: 1, type: hunt, target: '森林のモンスター', cnt: 5 },
        { seq: 1, type: hunt, target: 'モンスター', cnt: 5 },
        { seq: 1, type: matl, target: '採集', cnt: 5 },
        { seq: 2, type: emg, target: 'アケノシルム（★ｎ）', cnt: 1, subtitle: '藪から笠鳥' }
      ]
    },
    {
      title: '砂漠の探検隊',
      quest_list: [
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 3 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 5 },
        { seq: 0, type: matl, target: '採集', cnt: 5 },
        { seq: 1, type: hunt, target: 'パオウルムー', cnt: 2 },
        { seq: 1, type: hunt, target: 'モンスター', cnt: 5 },
        { seq: 1, type: matl, target: '採集', cnt: 5 },
        { seq: 2, type: matl, target: '骨塚', cnt: 3 },
        { seq: 2, type: hunt, target: 'モンスター', cnt: 5 },
        { seq: 2, type: matl, target: '採集', cnt: 5 },
        { seq: 3, type: emg, target: 'パオウルムー亜種', cnt: 1, subtitle: '砂漠の黒きつむじ風' }
      ]
    },
    {
      title: '雪原の収穫者',
      quest_list: [
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 0, type: matl, target: '採集', cnt: 10 },
        { seq: 1, type: emg, target: 'ウルクスス（★ｎ）', cnt: 1, subtitle: '雪上の獣' },
        { seq: 2, type: hunt, target: '雪原のモンスター', cnt: 5 },
        { seq: 2, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 2, type: matl, target: '採集', cnt: 10 },
        { seq: 3, type: hunt, target: '大型モンスター（★ｎ－２以上）', cnt: 5 },
        { seq: 3, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 3, type: matl, target: '採集', cnt: 10 },
        { seq: 4, type: emg, target: 'ベリオロス（★ｎ）', cnt: 1, subtitle: '立ち塞がる氷牙竜' }
      ]
    },
    {
      title: 'きな臭い跡',
      quest_list: [
        { seq: 0, type: matl, target: '連なる爆破跡（植物）', cnt: 10 },
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 1, type: hunt, target: 'アオアシラ', cnt: 2 },
        { seq: 1, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 1, type: matl, target: '採集', cnt: 10 },
        { seq: 2, type: emg, target: 'リオレイア亜種（★ｎ）', cnt: 1, subtitle: '焼け跡の犯人は桜色？' },
        { seq: 3, type: hunt, target: '森林の大型モンスター', cnt: 5 },
        { seq: 3, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 3, type: matl, target: '採集', cnt: 10 },
        { seq: 4, type: emg, target: 'ジンオウガ（★ｎ）', cnt: 1, subtitle: '爆ぜる碧雷' }
      ]
    },
    {
      title: '沼地の採掘者',
      quest_list: [
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 0, type: matl, target: '採集', cnt: 10 },
        { seq: 1, type: emg, target: 'フルフル（★ｎ）', cnt: 1, subtitle: '柔肌の持ち主' },
        { seq: 2, type: hunt, target: '大型モンスター（★ｎ－２以上）', cnt: 5 },
        { seq: 2, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 2, type: matl, target: '採集', cnt: 10 },
        { seq: 3, type: hunt, target: 'アケノシルム', cnt: 2 },
        { seq: 3, type: hunt, target: '大型モンスター', cnt: 5 },
        { seq: 3, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 4, type: emg, target: 'レイギエナ（★ｎ）', cnt: 1, subtitle: '沼地に漂う冷風' }
      ]
    },
    {
      title: '迫りくる爆鱗',
      quest_list: [
        { seq: 0, type: emg, target: 'バゼルギウス（★ｎ）', cnt: 1, subtitle: '晴れ、時々爆鱗' }
      ]
    },
    {
      title: '運営ビギナー',
      quest_list: [
        { seq: 0, type: hunt, target: '砂漠の大型モンスター', cnt: 5 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 0, type: matl, target: '採集', cnt: 12 },
        { seq: 1, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 1, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 1, type: matl, target: '採集', cnt: 12 },
        { seq: 2, type: hunt, target: '骨塚', cnt: 10 },
        { seq: 2, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 2, type: matl, target: '採集', cnt: 12 },
        { seq: 3, type: hunt, target: 'クルルヤック（頭部位破壊）', cnt: 2 },
        { seq: 3, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 3, type: matl, target: '採集', cnt: 12 },
        { seq: 4, type: emg, target: 'ディアブロス（★ｎ）', cnt: 1, subtitle: '突撃の迷惑客' }
      ]
    },
    {
      title: '迷惑なお客様',
      quest_list: [
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 0, type: matl, target: '採集', cnt: 12 },
        { seq: 1, type: hunt, target: '大型モンスター（★ｎ－１以上）', cnt: 5 },
        { seq: 1, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 1, type: matl, target: '採集', cnt: 12 },
        { seq: 2, type: hunt, target: '鉱脈', cnt: 10 },
        { seq: 2, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 2, type: matl, target: '採集', cnt: 12 },
        { seq: 3, type: hunt, target: 'レイギエナ', cnt: 2 },
        { seq: 3, type: hunt, target: 'ベリオロス', cnt: 2 },
        { seq: 3, type: matl, target: '採集', cnt: 12 },
        { seq: 4, type: emg, target: 'プケプケ亜種（★ｎ）', cnt: 1, subtitle: '営業妨害お断り' }
      ]
    },
    {
      title: 'クアリリ宅配便',
      quest_list: [
        { seq: 0, type: hunt, target: '森林の大型モンスター', cnt: 5 },
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 0, type: matl, target: '採集', cnt: 12 },
        { seq: 1, type: hunt, target: 'リオレウス', cnt: 2 },
        { seq: 1, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 1, type: matl, target: '採集', cnt: 12 },
        { seq: 2, type: emg, target: 'リオレウス亜種（★ｎ）', cnt: 1, subtitle: '蒼炎をかいくぐれ' },
        { seq: 3, type: hunt, target: '大型モンスター（弱点属性武器）', cnt: 2 },
        { seq: 3, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 3, type: matl, target: '採集', cnt: 12 },
        { seq: 4, type: emg, target: 'タマミツネ（★ｎ）', cnt: 1, subtitle: '泡々スリップ' }
      ]
    },
    {
      title: '危険物注意',
      quest_list: [
        { seq: 0, type: hunt, target: '大型モンスター（★ｎ－１以上）', cnt: 5 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 0, type: matl, target: '採集', cnt: 12 },
        { seq: 1, type: emg, target: 'ティガレックス（★ｎ）', cnt: 1, subtitle: 'ドリフトの轟き' },
        { seq: 2, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 2, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 2, type: matl, target: '採集', cnt: 12 },
        { seq: 3, type: hunt, target: 'リオレイア（頭部位破壊）', cnt: 2 },
        { seq: 3, type: hunt, target: '大型モンスター（弱点属性武器）', cnt: 5 },
        { seq: 3, type: matl, target: '採集', cnt: 12 },
        { seq: 4, type: emg, target: 'マガイマガド（★ｎ）', cnt: 1, subtitle: '鬼火厳禁' }
      ]
    },
    {
      title: '波乱の建設現場',
      quest_list: [
        { seq: 0, type: matl, target: '巨大な斬り跡（骨塚）', cnt: 10 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 0, type: matl, target: '採集', cnt: 12 },
        { seq: 1, type: hunt, target: '大型モンスター（★ｎ）', cnt: 5 },
        { seq: 1, type: hunt, target: 'モンスター', cnt: 12 },
        { seq: 1, type: matl, target: '採集', cnt: 12 },
        { seq: 2, type: emg, target: 'ラージャン（★ｎ）', cnt: 1, subtitle: '破壊の化身' },
        { seq: 3, type: hunt, target: 'バゼルギウス', cnt: 1},
        { seq: 3, type: hunt, target: '大型モンスター', cnt: 10 },
        { seq: 3, type: matl, target: '採集', cnt: 12 },
        { seq: 4, type: emg, target: 'ディアブロス亜種（★ｎ）', cnt: 1, subtitle: '壁を貫く黒角' }
      ]
    },
    {
      title: '岩を薙ぐ刀',
      quest_list: [
        { seq: 0, type: emg, target: 'ディノバルド（★ｎ）', cnt: 1, subtitle: '研ぎ澄ます剣尾' }
      ]
    },
  ]
}
