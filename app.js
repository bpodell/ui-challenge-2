var sprites = new Image();
sprites.src = 'form-elements-sprite.png';

function sprite (options) {

  var that = {};

  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;

  return that;
}

var canvas = document.getElementById('spritesJS');
canvas.width = 100;
canvas.height = 100;

var image1 = sprite({
  context: canvas.getContext('2d'),
  width: 100,
  height: 100,
  image: sprites
});

function sprite (options) {



  that.render = function () {

    // Draw the animation
    that.context.drawImage(
      that.image,
      0,
      0,
      that.width,
      that.height,
      0,
      0,
      that.width,
      that.height);
  };



}
image1.render();