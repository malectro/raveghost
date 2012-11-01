//(function () {
  var WIDTH = 1000,
      HEIGHT = 800,
      G_WIDTH = 25,
      G_HEIGHT = 25,
      canvas = $('canvas')[0],
      gif = new Image(),
      ctx = canvas.getContext('2d')
      frames = [],
      scale = 20;

  canvas.style.display = "block";
  canvas.style.position = "absolute";
  canvas.style.marginLeft = "-" + parseInt(WIDTH / 2, 10) + "px";
  canvas.style.left = "50%";
  canvas.style.top = "0";
  document.body.style.background = "black";

  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  gif.src = 'raveghostsprite.png';


  gif.onload = function () {
    ctx.drawImage(gif, 0, 0);

    frames[0] = ctx.getImageData(0, 0, 25, 25);
    frames[1] = ctx.getImageData(25, 0, 25, 25);
    frames[2] = ctx.getImageData(0, 25, 25, 25);
    frames[3] = ctx.getImageData(25, 25, 25, 25);

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    var i = 0;

    setInterval(function () {
      ctx.clearRect(0, 0, 25 * scale, 25 * scale);
      drawPixels(frames[i].data);
      i = (i + 1) % 4;
    }, 200);
  };

  function drawPixels(imageData) {
    var k = 0,
        limitHeight = G_HEIGHT * scale,
        limitWidth = G_WIDTH * scale;

    for (var i = 0; i < limitHeight; i += scale) {
      for (var j = 0; j < limitWidth; j += scale) {
        ctx.fillStyle = "rgba(" + [imageData[k], imageData[k + 1], imageData[k + 2], imageData[k + 3]].join(',') + ')';
        ctx.fillRect(j, i, scale, scale);
        k += 4;
      }
    }
  }

//}());
