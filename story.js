$(function() {
  /* クエストタイプ */
  const emg = '緊急';
  const matl = '採集';
  const hunt = '討伐';
  /* チャプターのリスト */
  const chapters_season2 = [
    '真夏の合宿',
    'かわして討つべし',
    '追跡訓練',
    '搦め手の使い手',
    '心技体',
    '最後の試練',
    '宴の知らせ',
    '熱狂の会場',
    '危険な水遊び',
    '狙われたトラック',
    'いざ会場へ',
    'スペシャルゲスト',
    '宴は誰のもの'
  ];
  const chapters_season3 = [
    '巡るひととせ',
    'ナイショの計画',
    'ステキな贈り物',
    'イチバンのご馳走',
    'とっておきの会場',
    '紫煙ゆらめいて',
    '二度あることは…',
    '忘れ得ぬ姿',
    '謎の脅威',
    '鬼火灯りて',
    'パーティーの準備',
    '新奇なすき間',
    '闘雷招来'
  ];
  const chapters_season4 = [
    '白い来訪者',
    '未踏の雪原',
    'ニオイの行方',
    '行く先を照らすもの',
    'おどろなる声',
    'まどろみの唄',
    'トゲとツノにご用心',
  ];
  /* クエストのリスト */
  const quests_season2 = [
    /* 真夏の合宿 */
    [
      { seq: 0, type: emg, target: 'バサルモス（★ｎ）', cnt: 1 }
    ],
    /* かわして討つべし */
    [
      { seq: 0, type: hunt, target: '大型モンスター', cnt: 3 },
      { seq: 0, type: hunt, target: 'モンスター', cnt: 5 },
      { seq: 0, type: matl, target: '採集', cnt: 5 },
      { seq: 1, type: emg, target: 'ドスジャグラス（★ｎ）', cnt: 1 },
      { seq: 2, type: hunt, target: '大型モンスター（★ｎ－２）', cnt: 1 },
      { seq: 2, type: hunt, target: 'モンスター', cnt: 5 },
      { seq: 2, type: matl, target: '採集', cnt: 5 },
      { seq: 3, type: emg, target: 'ツィツィヤック（★ｎ）', cnt: 1 }
    ],
    /* 追跡訓練 */
    [
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
    ],
    /* 搦め手の使い手 */
    [
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
    ],
    /* 心技体 */
    [
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
    ],
    /* 最後の試練 */
    [
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
    ],
    /* 宴の知らせ */
    [
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
    ],
    /* 熱狂の会場 */
    [
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
    ],
    /* 危険な水遊び */
    [
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
    ],
    /* 狙われたトラック */
    [
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
    ],
    /* いざ会場へ */
    [
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
    ],
    /* スペシャルゲスト */
    [
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
    ],
    /* 宴は誰のもの */
    [
      { seq: 0, type: emg, target: 'ジンオウガ（★ｎ）', cnt: 1 }
    ]
  ];
  const quests_season3 = [
    /* 巡るひととせ */
    [
      { seq: 0, type: emg, target: 'アケノシルム（★ｎ）', cnt: 1, subtitle: '火を吹く唐傘' }
    ],
    /* ナイショの計画 */
    [
      { seq: 0, type: hunt, target: '大型モンスター', cnt: 3 },
      { seq: 0, type: hunt, target: 'モンスター', cnt: 5 },
      { seq: 0, type: matl, target: '採集', cnt: 5 },
      { seq: 1, type: emg, target: 'プケプケ（★ｎ）', cnt: 1, subtitle: 'ヤブから毒妖鳥' },
      { seq: 2, type: hunt, target: '大型モンスター（★ｎ－２）', cnt: 1 },
      { seq: 2, type: hunt, target: '大型モンスター', cnt: 3 },
      { seq: 2, type: matl, target: '採集', cnt: 5 },
      { seq: 3, type: emg, target: 'ドスギルオス（★ｎ）', cnt: 1, subtitle: '痺れるほど刺激的' }
    ],
    /* ステキな贈り物 */
    [
      { seq: 0, type: hunt, target: 'クルルヤック', cnt: 2 },
      { seq: 0, type: hunt, target: 'モンスター', cnt: 5 },
      { seq: 0, type: matl, target: '採集', cnt: 5 },
      { seq: 1, type: hunt, target: '大型モンスター', cnt: 3 },
      { seq: 1, type: hunt, target: 'モンスター', cnt: 5 },
      { seq: 1, type: matl, target: '採集', cnt: 5 },
      { seq: 2, type: hunt, target: '砂漠のモンスター', cnt: 3 },
      { seq: 2, type: hunt, target: '大型モンスター', cnt: 3 },
      { seq: 2, type: matl, target: '採集', cnt: 5 },
      { seq: 3, type: emg, target: 'バサルモス（★ｎ）', cnt: 1, subtitle: '路傍の岩竜' }
    ],
    /* イチバンのご馳走 */
    [
      { seq: 0, type: hunt, target: '弱点属性武器使用', cnt: 3 },
      { seq: 0, type: hunt, target: '大型モンスター', cnt: 5 },
      { seq: 0, type: matl, target: '採集', cnt: 10 },
      { seq: 1, type: emg, target: 'パオウルムー（★ｎ）', cnt: 1, subtitle: '綿菓子みたいなあいつ' },
      { seq: 2, type: hunt, target: '大型モンスター', cnt: 5 },
      { seq: 2, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 2, type: matl, target: '採集', cnt: 10 },
      { seq: 3, type: matl, target: '鉱脈', cnt: 10 },
      { seq: 3, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 3, type: matl, target: '採集', cnt: 10 },
      { seq: 4, type: emg, target: 'ツィツィヤック（★ｎ）', cnt: 1, subtitle: '迷惑な光' }
    ],
    /* とっておきの会場 */
    [
      { seq: 0, type: matl, target: '見慣れぬ漂流物（採集ポイント）', cnt: 10 },
      { seq: 0, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 0, type: matl, target: '採集', cnt: 10 },
      { seq: 1, type: emg, target: 'バフバロ（★ｎ）', cnt: 1, subtitle: '猛進するもの' },
      { seq: 2, type: hunt, target: 'アケノシルム', cnt: 2 },
      { seq: 2, type: hunt, target: '大型モンスター（★ｎ－２）', cnt: 3 },
      { seq: 2, type: matl, target: '採集', cnt: 10 },
      { seq: 3, type: hunt, target: '森林のモンスター', cnt: 5 },
      { seq: 3, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 3, type: matl, target: '採集', cnt: 10 },
      { seq: 4, type: emg, target: 'リオレイア（★ｎ）', cnt: 1, subtitle: '女王の睥睨' }
    ],
    /* 紫煙ゆらめいて */
    [
      { seq: 0, type: hunt, target: '大型モンスター', cnt: 5 },
      { seq: 0, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 0, type: matl, target: '採集', cnt: 10 },
      { seq: 1, type: emg, target: 'オドガロン（★ｎ）', cnt: 1, subtitle: '飛び掛かる惨爪' },
      { seq: 2, type: hunt, target: '沼地のモンスター', cnt: 5 },
      { seq: 2, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 2, type: matl, target: '採集', cnt: 10 },
      { seq: 3, type: matl, target: '骨塚', cnt: 5 },
      { seq: 3, type: hunt, target: '大型モンスター', cnt: 5 },
      { seq: 3, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 4, type: emg, target: 'ラドバルキン（★ｎ）', cnt: 1, subtitle: 'トゲトゲパニック' }
    ],
    /* 二度あることは… */
    [
      { seq: 0, type: hunt, target: 'リオレイア', cnt: 2 },
      { seq: 0, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 0, type: matl, target: '採集', cnt: 10 },
      { seq: 1, type: hunt, target: '沼地の大型モンスター', cnt: 3 },
      { seq: 1, type: hunt, target: '砂漠の大型モンスター', cnt: 3 },
      { seq: 1, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 2, type: emg, target: 'リオレイア亜種（★ｎ）', cnt: 1, subtitle: 'さきがけの桜花' },
      { seq: 3, type: emg, target: 'ディアブロス亜種（★ｎ）', cnt: 1, subtitle: 'つづく黒き双角' },
      { seq: 4, type: emg, target: 'リオレウス亜種（★ｎ）', cnt: 1, subtitle: '立ちはだかる蒼炎' }
    ],
    /* 忘れ得ぬ姿 */
    [
      { seq: 0, type: matl, target: '植物', cnt: 5 },
      { seq: 0, type: hunt, target: '大型モンスター', cnt: 10 },
      { seq: 0, type: matl, target: '採集', cnt: 12 },
      { seq: 1, type: hunt, target: 'トビカガチ（頭部位破壊）', cnt: 2 },
      { seq: 1, type: hunt, target: 'モンスター', cnt: 12 },
      { seq: 1, type: matl, target: '採集', cnt: 12 },
      { seq: 2, type: hunt, target: '弱点属性武器使用', cnt: 5 },
      { seq: 2, type: hunt, target: 'モンスター', cnt: 12 },
      { seq: 2, type: matl, target: '採集', cnt: 12 },
      { seq: 3, type: hunt, target: '大型モンスター（★ｎ－１）', cnt: 5 },
      { seq: 3, type: hunt, target: '大型モンスター', cnt: 10 },
      { seq: 3, type: hunt, target: 'モンスター', cnt: 12 },
      { seq: 4, type: emg, target: 'ジンオウガ（★ｎ）', cnt: 1, subtitle: 'まといしは蒼雷' }
    ],
    /* 謎の脅威 */
    [
      { seq: 0, type: hunt, target: 'ラドバルキン', cnt: 3 },
      { seq: 0, type: hunt, target: '大型モンスター', cnt: 10 },
      { seq: 0, type: matl, target: '採集', cnt: 12 },
      { seq: 1, type: matl, target: '鉱脈', cnt: 10 },
      { seq: 1, type: hunt, target: '大型モンスター', cnt: 10 },
      { seq: 1, type: hunt, target: 'モンスター', cnt: 12 },
      { seq: 2, type: emg, target: 'フルフル（★ｎ）', cnt: 1, subtitle: '不穏な白' },
      { seq: 3, type: hunt, target: '砂漠の大型モンスター', cnt: 5 },
      { seq: 3, type: hunt, target: 'モンスター', cnt: 12 },
      { seq: 3, type: matl, target: '採集', cnt: 12 },
      { seq: 4, type: emg, target: 'パオウルムー亜種（★ｎ）', cnt: 1, subtitle: '黒きまどろみ' }
    ],
    /* 鬼火灯りて */
    [
      { seq: 0, type: hunt, target: 'レイギエナ（頭部位破壊）', cnt: 2 },
      { seq: 0, type: hunt, target: '弱点属性武器使用', cnt: 5 },
      { seq: 0, type: matl, target: '採集', cnt: 12 },
      { seq: 1, type: hunt, target: '大型モンスター（★ｎ－１）', cnt: 5 },
      { seq: 1, type: hunt, target: 'モンスター', cnt: 12 },
      { seq: 1, type: matl, target: '採集', cnt: 12 },
      { seq: 2, type: hunt, target: 'リオレウス', cnt: 2 },
      { seq: 2, type: hunt, target: '大型モンスター', cnt: 10 },
      { seq: 2, type: matl, target: '採集', cnt: 12 },
      { seq: 3, type: matl, target: '鬼火の爆破跡（植物）', cnt: 10 },
      { seq: 3, type: hunt, target: '大型モンスター', cnt: 10 },
      { seq: 3, type: matl, target: '採集', cnt: 12 },
      { seq: 4, type: emg, target: 'マガイマガド（★ｎ）', cnt: 1, subtitle: '紫煙まとう鎧武者' }
    ],
    /* パーティーの準備 */
    [
      { seq: 0, type: matl, target: '鉱脈', cnt: 10 },
      { seq: 0, type: hunt, target: '大型モンスター', cnt: 10 },
      { seq: 0, type: matl, target: '採集', cnt: 12 },
      { seq: 1, type: hunt, target: '弱点属性武器使用', cnt: 5 },
      { seq: 1, type: hunt, target: '大型モンスター', cnt: 10 },
      { seq: 1, type: matl, target: '採集', cnt: 12 },
      { seq: 2, type: hunt, target: 'オドガロン', cnt: 3 },
      { seq: 2, type: hunt, target: '大型モンスター（★ｎ－１）', cnt: 5 },
      { seq: 2, type: hunt, target: '沼地の大型モンスター', cnt: 5 },
      { seq: 3, type: emg, target: 'プケプケ亜種（★ｎ）', cnt: 1, subtitle: '無粋なお客人' }
    ],
    /* 新奇なすき間 */
    [
      { seq: 0, type: hunt, target: 'マガイマガド', cnt: 3 },
      { seq: 0, type: hunt, target: '大型モンスター', cnt: 10 },
      { seq: 0, type: matl, target: '採集', cnt: 12 },
      { seq: 1, type: matl, target: '植物', cnt: 10 },
      { seq: 1, type: hunt, target: '大型モンスター', cnt: 10 },
      { seq: 1, type: hunt, target: 'モンスター', cnt: 12 },
      { seq: 2, type: hunt, target: '大型モンスター（★ｎ）', cnt: 5 },
      { seq: 2, type: hunt, target: '弱点属性武器使用', cnt: 5 },
      { seq: 2, type: matl, target: '採集', cnt: 12 },
      { seq: 3, type: hunt, target: 'イビルジョー', cnt: 2 },
      { seq: 3, type: hunt, target: '大型モンスター', cnt: 10 },
      { seq: 3, type: matl, target: '採集', cnt: 12 },
      { seq: 4, type: emg, target: 'タマミツネ（★ｎ）', cnt: 1, subtitle: '妖しき泡' }
    ],
    /* 闘雷招来 */
    [
      { seq: 0, type: emg, target: 'ラージャン（★ｎ）', cnt: 1, subtitle: '荒ぶる金獅子' }
    ]
  ];
  const quests_season4 = [
    /* 白い来訪者 */
    [
      { seq: 0, type: emg, target: 'ウルクスス（★ｎ）', cnt: 1, subtitle: '白き滑走者' }
    ],
    /* 未踏の雪原 */
    [
      { seq: 0, type: hunt, target: '雪原のモンスター', cnt: 5 },
      { seq: 0, type: hunt, target: '大型モンスター', cnt: 3 },
      { seq: 0, type: matl, target: '採集', cnt: 5 },
      { seq: 1, type: hunt, target: '大型モンスター', cnt: 3 },
      { seq: 1, type: hunt, target: 'モンスター', cnt: 5 },
      { seq: 1, type: matl, target: '採集', cnt: 5 },
      { seq: 2, type: emg, target: 'バフバロ（★ｎ）', cnt: 1, subtitle: '雪色の巨影' }
    ],
    /* ニオイの行方 */
    [
      { seq: 0, type: matl, target: '不快な粘液（鉱脈）', cnt: 5 },
      { seq: 0, type: hunt, target: 'モンスター', cnt: 5 },
      { seq: 0, type: matl, target: '採集', cnt: 5 },
      { seq: 1, type: hunt, target: 'ボルボロス', cnt: 2 },
      { seq: 1, type: hunt, target: 'モンスター', cnt: 5 },
      { seq: 1, type: matl, target: '採集', cnt: 5 },
      { seq: 2, type: emg, target: 'ドスギルオス（★ｎ）', cnt: 1, subtitle: '沼地の凶牙' },
      { seq: 3, type: hunt, target: '大型モンスター', cnt: 3 },
      { seq: 3, type: hunt, target: 'モンスター', cnt: 5 },
      { seq: 3, type: matl, target: '採集', cnt: 5 },
      { seq: 4, type: emg, target: 'ラングロトラ（★ｎ）', cnt: 1, subtitle: '砂漠の赤い弾丸' }
    ],
    /* 行く先を照らすもの */
    [
      { seq: 0, type: hunt, target: '大型モンスター（★ｎ－２）', cnt: 5 },
      { seq: 0, type: hunt, target: '大型モンスター', cnt: 5 },
      { seq: 0, type: matl, target: '採集', cnt: 10 },
      { seq: 1, type: emg, target: 'アンジャナフ（★ｎ）', cnt: 1, subtitle: '樹々焦がす蛮炎' },
      { seq: 2, type: hunt, target: '大型モンスター', cnt: 3 },
      { seq: 2, type: hunt, target: 'モンスター', cnt: 5 },
      { seq: 2, type: matl, target: '採集', cnt: 5 },
      { seq: 3, type: emg, target: 'ツィツィヤック（★ｎ）', cnt: 1, subtitle: '砂漠のフラッシュライト' }
    ],
    /* おどろなる声 */
    [
      { seq: 0, type: matl, target: '骨塚', cnt: 5 },
      { seq: 0, type: hunt, target: '大型モンスター', cnt: 5 },
      { seq: 0, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 1, type: hunt, target: '弱点属性武器使用', cnt: 3 },
      { seq: 1, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 1, type: matl, target: '採集', cnt: 10 },
      { seq: 2, type: emg, target: 'バサルモス（★ｎ）', cnt: 1, subtitle: '立ち塞がりし巌' },
      { seq: 3, type: hunt, target: '沼地のモンスター', cnt: 5 },
      { seq: 3, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 3, type: matl, target: '採集', cnt: 10 },
      { seq: 4, type: emg, target: 'オドガロン（★ｎ）', cnt: 1, subtitle: '暗き沼に巣食うもの' }
    ],
    /* まどろみの唄' */
    [
      { seq: 0, type: hunt, target: '大型モンスター', cnt: 5 },
      { seq: 0, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 0, type: matl, target: '採集', cnt: 10 },
      { seq: 1, type: emg, target: 'パオウルムー亜種（★ｎ）', cnt: 1, subtitle: '眠れる砂漠' },
      { seq: 2, type: hunt, target: 'ウルクスス', cnt: 2 },
      { seq: 2, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 2, type: matl, target: '採集', cnt: 10 },
      { seq: 3, type: matl, target: '仄かに光る棘', cnt: 10 },
      { seq: 3, type: hunt, target: '大型モンスター', cnt: 5 },
      { seq: 3, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 4, type: emg, target: 'イソネミクニ（★ｎ）', cnt: 1, subtitle: '隠り世いざなう歌声' }
    ],
    /* トゲとツノにご用心 */
    [
      { seq: 0, type: hunt, target: '大型モンスター（★ｎ－１）', cnt: 5 },
      { seq: 0, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 0, type: matl, target: '採集', cnt: 10 },
      { seq: 1, type: emg, target: 'ラドバルキン（★ｎ）', cnt: 1, subtitle: '荒野の大回転' },
      { seq: 2, type: hunt, target: '砂漠の大型モンスター', cnt: 3 },
      { seq: 2, type: hunt, target: 'モンスター', cnt: 10 },
      { seq: 2, type: matl, target: '採集', cnt: 10 },

    ],
  ];
  // オブジェクトからHTMLを生成
  for (let chapter_idx = 0; chapter_idx < chapters_season4.length; ++chapter_idx ) {
    // チャプター見出しの追加
    const $title = $('<h3 />').append(`チャプター${chapter_idx + 1}：${chapters_season4[chapter_idx]}`);
    $('#accordion').append($title);

    // クエストリストのベースを追加
    const $chapter_list = $('<div />', {class: 'chapter-list'});
    $('#accordion').append($chapter_list);

    // チャプターのクエスト一覧を取得
    const quest_list = quests_season4[chapter_idx];
    console.log(quest_list);

    for (let quest_idx = 0, $quest_item = null; quest_idx < quest_list.length; ++quest_idx) {
      // クエスト一覧の先頭かもしくはseqの変わり目でクエストを内包するHTMLを追加する
      if (quest_idx === 0 || quest_list[quest_idx].seq != quest_list[quest_idx - 1].seq) {
        const $chapter_quest = $('<div />', {class: 'chapter-quest'});
        $chapter_quest.append($('<div />', {class: 'quest-seq'}).append(`${quest_list[quest_idx].seq + 1}`));
        $quest_item = $('<div />', {class: 'quest-item'});
        $chapter_quest.append($quest_item);
        $chapter_list.append($chapter_quest);
      }

      if ($quest_item) {
        const $quest_summary = $('<div />', {class: 'quest-summary'});
        const $quest_type = $('<div />', {class: 'quest-type'}).append(`${quest_list[quest_idx].type}`);
        switch (quest_list[quest_idx].type) {
          case emg:
            $quest_type.addClass('quest-emg');
            break;
          case hunt:
            $quest_type.addClass('quest-hunt');
            break;
          case matl:
            $quest_type.addClass('quest-matl');
            break;
          default:
            $quest_type.addClass('quest-else');
            break;
        }
        $quest_summary.append($quest_type);
        const subtitle = (quest_list[quest_idx].subtitle === undefined) ? '' : `【${quest_list[quest_idx].subtitle}】`;
        $quest_summary.append($('<div />', {class: 'quest-content'}).append(subtitle, `${quest_list[quest_idx].target}`));
        const cnt_disp = (quest_list[quest_idx].cnt <= 1) ? '' : `✕${quest_list[quest_idx].cnt}`
        $quest_summary.append($('<div />', { class: 'quest-cnt' }).append(cnt_disp));
        $quest_item.append($quest_summary);
      }
    }
  }
  // アコーディオンの初期化
  $('#accordion').accordion({
    heightStyle: 'content'
  });
});
