$(function() {
  var works = $('#works');    
  works.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          works.fadeIn(500);
      } else {
          works.fadeOut(500);
      }
  });
  //スクロールしてトップ
  // works.click(function () {
  //     $('body,html').animate({
  //         scrollTop: 0
  //     }, 500);
  //     return false;
  // });
});