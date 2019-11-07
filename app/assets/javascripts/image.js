document.addEventListener("turbolinks:load", function() {
  if (!location.href.includes('portfolios')){
    const radius = 5;
    setInterval(() => {
      const el = document.querySelector('img');
      const t = new Date().getTime() / 1500;
      const x =(Math.cos(t) * radius);
      const X =(Math.sin(t) * radius * 3);
      const y =(Math.sin(t) * radius);
      const Y =(Math.cos(t) * radius * 3);
      el.setAttribute('style', `transform: skewX(${x}deg) skewY(${-x}deg) rotateX(${X}deg) rotateY(${Y}deg);`)
    }, 20);
    var n = 1
    var nextImage = function() {
      if (n % 3 == 1){
        $('.image-container').empty();
        $('.image-container').append(`<img src="/assets/yokohama-7287d31285e6b03570c804ca889fe75f30fd6f5e2c3d37f15a1deb6face4ab8b.jpg" />`)
      } else if (n % 3 == 2){
        $('.image-container').empty();
        $('.image-container').append(`<img src="/assets/ninja-af054fe5745b3f11d58ecd45cc8a5ccb0bf8305bfa1dbd21102583b87bc0a683.jpg" />`)
      } else {
        $('.image-container').empty();
        $('.image-container').append(`<img src="/assets/azuki-f8931c7b9dced5251d1e7362ca815ebb4ab0cade6bd9979f1a385d4533beaff4.jpg" />`)
      }
      n += 1
    }
    setInterval(nextImage, 5000);
  }
})