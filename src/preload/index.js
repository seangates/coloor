function Coloor() {

  var d = document;
  var ce = 'createElement';
  var ga = 'getAttribute';

  function isCanvasSupported () {
    var elem = d[ce]('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  }
  function preload (image) {
    var src, pi, li, w, h, size;

    if (!isCanvasSupported()) {
      image.src = src;
      return;
    }

    src = image[ga]('data-coloor');
    size = image[ga]('data-coloor-size').split('x');
    w = parseInt(size[0]);
    h = parseInt(size[1]);
    pi = new Image();
    li = new Image();

    pi.onload = function () {
      var canvas = d[ce]('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(pi, 0, 0, w, h);
      image.src = canvas.toDataURL("image/png");
    }
    pi.src = image[ga]('src');

    li.onload = function () {
      image.src = src;
    }
    li.src = src;
  }

  var images = d.querySelectorAll('img[data-coloor]');
  for(var i=0; i<images.length; i++) {
    preload(images[i]);
  }

};Coloor();