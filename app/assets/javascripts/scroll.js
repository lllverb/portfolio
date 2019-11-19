$(function() {
  // 検討中/////////////////
  var profile = $('#profile');
  // profile.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      profile.addClass('fadeout');
      profile.removeClass('fadein');
    } else {
      profile.removeClass('fadeout');
      profile.addClass('fadein');
    }
  });
  //スクロールしてトップ
  // works.click(function () {
    //     $('body,html').animate({
      //         scrollTop: 0
      //     }, 500);
      //     return false;
      // });
  // 検討中////////////////
});