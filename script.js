

$(document).ready(function() {

  var $element = $('.bang');

  $("body").mousemove(function(event) {
    var x = event.pageX - $element.offset().left - $element.width() / 2;
    var y = event.pageY - $element.offset().top - $element.height() / 2;

    $(".bang").css({
      "text-shadow": x/50+"px "+y/50+"px 0px rgba(0,0,0,1)",
    });
  });

  var $element = $('.wel');

$("body").mousemove(function(event) {
  var x = event.pageX - $element.offset().left - $element.width() / 2;
  var y = event.pageY - $element.offset().top - $element.height() / 2;

  $(".wel").css({
    "text-shadow": x/50+"px "+y/50+"px 0px rgba(0,0,0,1)",
    //rgba - alpha is opacity and the quantity before that is blur
  });
});

let constrain = 1000;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2.5)) / constrain;
  let calcY = (x - box.x - (box.width / 2.5)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
  });
};

});


