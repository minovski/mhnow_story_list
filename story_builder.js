$(function() {
  // ストーリーを定義したオブジェクトからHTMLを生成
  const story = season_story;

  $('#story_title').text(story.title);
  for (let chapter_idx = 0; chapter_idx < story.chapter_list.length; ++chapter_idx ) {
    // チャプター見出しの追加
    const $title = $('<h3 />').append(`チャプター${chapter_idx + 1}：${story.chapter_list[chapter_idx].title}`);
    $('#accordion').append($title);

    // クエストリストのベースを追加
    const $chapter_list = $('<div />', {class: 'chapter-list'});
    $('#accordion').append($chapter_list);

    // チャプターのクエスト一覧を取得
    const quest_list = story.chapter_list[chapter_idx].quest_list;
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
