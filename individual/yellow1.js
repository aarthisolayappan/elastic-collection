


// const wrapper = document.querySelector(".main"),
//     header = wrapper.querySelector(".text1");
//     function onDrag({movementX, movementY}){
//       let getStyle = window.getComputedStyle(wrapper);
//       let leftVal = parseInt(getStyle.left);
//       let topVal = parseInt(getStyle.top);
//       wrapper.style.left = `${leftVal + movementX}px`;
//       wrapper.style.top = `${topVal + movementY}px`;
//     }
//     header.addEventListener("mousedown", ()=>{
//       header.classList.add("active");
//       header.addEventListener("mousemove", onDrag);
//     });
//     document.addEventListener("mouseup", ()=>{
//       header.classList.remove("active");
//       header.removeEventListener("mousemove", onDrag);
//     });


//   function revealreal(){
//         document.querySelector(".realimage").classList.toggle("showImage");
//     }


// // Make the DIV element draggable:
// dragElement(document.getElementById("main"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV: 
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }