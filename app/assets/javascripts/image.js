document.addEventListener("turbolinks:load", function() {
  $('.image-area').animate({
    
  })
  const el = document.querySelector('img');
  const radius = 5;

  setInterval(() => {
    const t = new Date().getTime() / 1500;

    const x =(Math.cos(t) * radius);
    const X =(Math.sin(t) * radius * 5);
    const y =(Math.sin(t) * radius);
    const Y =(Math.cos(t) * radius * 5);

    el.setAttribute('style', `transform: skewX(${x}deg) skewY(${-x}deg) rotateX(${X}deg) rotateY(${Y}deg);`)
  }, 20);
})