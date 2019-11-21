setTimeout(function() {
  $('h1').css('visibility', 'visible')
  $('#logo').css('background-color', 'transparent')
}, 1200);
setTimeout(function() {
  $('h1').fadeOut();
  $('#logo').fadeOut();
}, 5000);
setTimeout(function() {
  $('#triangles').fadeOut();
  $('body').css('overflow-y', 'visible');
}, 5500);