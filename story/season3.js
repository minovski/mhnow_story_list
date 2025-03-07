const season_story = {
  title: '十六夜に揺らぐ鬼火',
  chapter_list: [
    /* 巡るひととせ */
    {
      title: '巡るひととせ',
      quest_list: [
        { seq: 0, type: emg, target: 'アケノシルム（★ｎ）', cnt: 1, subtitle: '火を吹く唐傘' }
      ]
    },
    /* ナイショの計画 */
    {
      title: 'ナイショの計画',
      quest_list: [
        { seq: 0, type: hunt, target: '大型モンスター', cnt: 3 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 5 },
        { seq: 0, type: matl, target: '採集', cnt: 5 },
        { seq: 1, type: emg, target: 'プケプケ（★ｎ）', cnt: 1, subtitle: 'ヤブから毒妖鳥' },
        { seq: 2, type: hunt, target: '大型モンスター（★ｎ－２）', cnt: 1 },
        { seq: 2, type: hunt, target: '大型モンスター', cnt: 3 },
        { seq: 2, type: matl, target: '採集', cnt: 5 },
        { seq: 3, type: emg, target: 'ドスギルオス（★ｎ）', cnt: 1, subtitle: '痺れるほど刺激的' }
      ]
    },
    /* ステキな贈り物 */
    {
      title: 'ステキな贈り物',
      quest_list: [
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
      ]
    },
    /* イチバンのご馳走 */
    {
      title: 'イチバンのご馳走',
      quest_list: [
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
      ]
    },
    /* とっておきの会場 */
    {
      title: 'とっておきの会場',
      quest_list: [
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
      ]
    },
    /* 紫煙ゆらめいて' */
    {
      title: '紫煙ゆらめいて',
      quest_list: [
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
      ]
    },
    /* 二度あることは… */
    {
      title: '二度あることは…',
      quest_list: [
        { seq: 0, type: hunt, target: 'リオレイア', cnt: 2 },
        { seq: 0, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 0, type: matl, target: '採集', cnt: 10 },
        { seq: 1, type: hunt, target: '沼地の大型モンスター', cnt: 3 },
        { seq: 1, type: hunt, target: '砂漠の大型モンスター', cnt: 3 },
        { seq: 1, type: hunt, target: 'モンスター', cnt: 10 },
        { seq: 2, type: emg, target: 'リオレイア亜種（★ｎ）', cnt: 1, subtitle: 'さきがけの桜花' },
        { seq: 3, type: emg, target: 'ディアブロス亜種（★ｎ）', cnt: 1, subtitle: 'つづく黒き双角' },
        { seq: 4, type: emg, target: 'リオレウス亜種（★ｎ）', cnt: 1, subtitle: '立ちはだかる蒼炎' }
      ]
    },
    /* 忘れ得ぬ姿 */
    {
      title: '忘れ得ぬ姿',
      quest_list: [
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
      ]
    },
    /* 謎の脅威 */
    {
      title: '謎の脅威',
      quest_list: [
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
      ]
    },
    /* 鬼火灯りて */
    {
      title: '鬼火灯りて',
      quest_list: [
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
      ]
    },
    /* パーティーの準備 */
    {
      title: 'パーティーの準備',
      quest_list: [
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
      ]
    },
    /* 新奇なすき間 */
    {
      title: '新奇なすき間',
      quest_list: [
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
      ]
    },
    /* 闘雷招来 */
    {
      title: '闘雷招来',
      quest_list: [
        { seq: 0, type: emg, target: 'ラージャン（★ｎ）', cnt: 1, subtitle: '荒ぶる金獅子' }
      ]
    }
  ]
}
