

$(document).ready(function() {

  var $element = $('.bang');

  $("body").mousemove(function(event) {
    var x = event.pageX - $element.offset().left - $element.width() / 120;
    var y = event.pageY - $element.offset().top - $element.height() / 120;

    $(".bang").css({
      "text-shadow": x/200+"px "+y/200+"px 0px rgba(0,0,0,1)",
    });
  });
});

let constrain = 800;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 50)) / constrain;
  let calcY = (x - box.x - (box.width / 50)) / constrain;
  
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


function show() {
// var x = document.querySelector(".redwhitey");
//   if (x.style.visibility === "visible") {
//     x.style.visibility = "none";
//   } else {
//     x.style.visibility = "visible";
// }

// var x = document.querySelector(".bluegreen");
//   if (x.style.visibility === "visible") {
//     x.style.visibility = "none";
//   } else {
//     x.style.visibility = "visible";
// }

  document.querySelector(".redwhiteybg").style.visibility = "visible";

  document.querySelector(".shape").style.visibility = "hidden";
  document.querySelector(".typo").style.visibility = "hidden";
  document.querySelector(".sansserif").style.visibility = "hidden";

}


function showw() {

  document.querySelector(".shape").style.visibility = "visible";

  document.querySelector(".redwhiteybg").style.visibility = "hidden";
  document.querySelector(".typo").style.visibility = "hidden";
  document.querySelector(".sansserif").style.visibility = "hidden";
  document.body.style.backgroundColor = "#00A14B";

  document.querySelector(".redgrid").style.visibility = "hidden";
  document.querySelector(".yellowgrid").style.visibility = "hidden";
  document.querySelector(".greengrid").style.visibility = "hidden";
  document.querySelector(".whitegrid").style.visibility = "hidden";
  document.querySelector(".bluegrid").style.visibility = "hidden";

}


function showww() {
  document.querySelector(".typo").style.visibility = "visible";
  document.querySelector(".sansserif").style.visibility = "visible";

  document.querySelector(".redwhiteybg").style.visibility = "hidden";
  document.querySelector(".shape").style.visibility = "hidden";
  document.body.style.backgroundColor = "#00A14B";

  document.querySelector(".redgrid").style.visibility = "hidden";
  document.querySelector(".yellowgrid").style.visibility = "hidden";
  document.querySelector(".greengrid").style.visibility = "hidden";
  document.querySelector(".whitegrid").style.visibility = "hidden";
  document.querySelector(".bluegrid").style.visibility = "hidden";

}


function red(){
  document.body.style.backgroundColor = "#D71D2C";
  document.querySelector(".redgrid").style.visibility = "visible";
  document.querySelector(".yellowgrid").style.visibility = "hidden";
  document.querySelector(".greengrid").style.visibility = "hidden";
  document.querySelector(".whitegrid").style.visibility = "hidden";
  document.querySelector(".bluegrid").style.visibility = "hidden";
}


function white(){
  document.body.style.backgroundColor = "#E6E7E8";
  document.querySelector(".redgrid").style.visibility = "hidden";
  document.querySelector(".yellowgrid").style.visibility = "hidden";
  document.querySelector(".greengrid").style.visibility = "hidden";
  document.querySelector(".whitegrid").style.visibility = "visible";
  document.querySelector(".bluegrid").style.visibility = "hidden";
}


function yellow(){
  document.body.style.backgroundColor = "#FFDE18";
  document.querySelector(".redgrid").style.visibility = "hidden";
  document.querySelector(".yellowgrid").style.visibility = "visible";
  document.querySelector(".greengrid").style.visibility = "hidden";
  document.querySelector(".whitegrid").style.visibility = "hidden";
  document.querySelector(".bluegrid").style.visibility = "hidden";
}


function blue(){
  document.body.style.backgroundColor = "#182F6D";
  document.querySelector(".redgrid").style.visibility = "hidden";
  document.querySelector(".yellowgrid").style.visibility = "hidden";
  document.querySelector(".greengrid").style.visibility = "hidden";
  document.querySelector(".whitegrid").style.visibility = "hidden";
  document.querySelector(".bluegrid").style.visibility = "visible";
}


function green(){
  document.body.style.backgroundColor = "#005735";
  document.querySelector(".redgrid").style.visibility = "hidden";
  document.querySelector(".yellowgrid").style.visibility = "hidden";
  document.querySelector(".greengrid").style.visibility = "visible";
  document.querySelector(".whitegrid").style.visibility = "hidden";
  document.querySelector(".bluegrid").style.visibility = "hidden";
}




// var redgrid = document.querySelector("redgrid");
      
//       // set the initial random position for the image container
//       redgrid.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
//       redgrid.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      
//       // when the image container is clicked, set a new random position
//       redgrid.addEventListener("click", function() {
//         redgrid.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
//         redgrid.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
//       });




//only ONE can be clicked and shown at a time—how???????


// function falldown() {
//   document.querySelector(".redwhitey").style.transform = "translateY(120px)";

//   var elem = document.querySelector(".redwhitey");
//   var pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 520) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//     }
//   }
// }
