$(document).on('turbolinks:load', function() {
 function buildHTML(message) {
  var image = message.image ? `<image class="lower-message__image" src=${ message.image }>`: "";
  var html = `<div class="main__body__message-list__message" data-message-id=${message.id}>
                 <div class="main__body__message-list__message__user-name">
                   ${ message.name}
                 </div>
                 <div class="main__body__message-list__message__time">
                 ${ message.created_at}
                 </div>
                 <div class="main__body__message-list__message__text">
                   <p>${ message.content}</p>
                   ${image}
                 </div>
               </div>
              </div>`;
   return html;
 }

// メッセージの最下部へ自動スクロールする関数
 function scrollBottom(){
   var position = $(".main__body")[0].scrollHeight;
   $(".main__body").animate({scrollTop: position}, 500);
 }

// イベント。発火設定
 $('#new_message').on('submit',function(e){
   e.preventDefault();
   // 本来のsubmit処理をリセット
   var formData = new FormData($(this).get(0));
   // フォームに入力された内容を取得
   var url = $(this).attr('action')
   $.ajax({
     url: url,
     type: "POST",
     data: formData,
     dataType: 'json',
     processData: false,
     contentType: false
   })

// ajax処理が成功した場合の処理
   .done(function(message) {
     var html = buildHTML(message);
     $('.main__body').append(html);
     // 入力された値をHTML反映
     $('#new_message')[0].reset();
     // 入力された値をリセット
     $('.submit').prop('disabled', false);  //submit処理を有効化
     scrollBottom(); //自動スクロール
   })
   // Ajax処理が失敗した時の処理
   .fail(function() {
     alert('メッセージの送信に失敗しました');
   })
 });
});
