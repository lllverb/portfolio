setTimeout(function() {
  $('h1').css('visibility', 'visible')
  $('#logo').css('background-color', 'transparent')
}, 1550);
setTimeout(function() {
  $('h1').fadeOut();
  $('#logo').fadeOut();
  $('#main-contents').css('display', 'block')
}, 5000);
setTimeout(function() {
  $('#triangles').fadeOut();
  $('body').css('overflow-y', 'visible');
}, 5500);