const content =
[
    {
        "bigTitle": "BENGALURU CITY TRAFFIC POLICE",
        "bigTitleClass": 'titlesans',
        "bodyText1": 'bodytext1',
        "textcolor": 'redtext',

        "titleOne": "Vaccination is better than cure",
        "titleOneClass": 'title1sans',
        "bodyText2":'bodytext2',
        "textOnecolor": 'bluetext',

        "titleTwo": "MAHA CEMENT",
        "titleTwoClass": 'title2',
        "bodyText3":'bodytext3',
        "textTwocolor": 'blacktext',

        "titleThree": "BUILD IT STRONG",
        "titleThreeClass": 'title3',
        "bodyText4":'bodytext4',
        "textThreecolor": 'redtext',

        "header1": "Road Sign 1",
        "headerClass": 'roadsignname',

        "h1define": "this is sample text to see if the layout is working. please ignore this text i dont know what thus is this might be an explanation of what i think of the sign (from the eye of a graphic designer)",
        'descriptionClass': 'roadsigndescription',
        
        "img": "../indsigns/Elastic collection.png",
        "realimg": "../img/yellow4.JPG",
        "realimgClass": 'realimage',

        "toggle": "edit",
        "color": ['black', 'blue', 'yellow', 'white', 'red']
    },
    
]

let redtext = "#D71D2C";
let bluetext = "#182F6D";
let yellowtext = "#FFDE18";
let greentext = "#005735";
let whitetext = "#E6E7E8";



function generateMain(data){
    const main = document.querySelector('main');
    main.innerHTML = `
<div class="editflex" >
    <div class="edit">edit</div>
  </div>
  <main>
  <div class="${data.bigTitleClass} ${data.textcolor}" id="mainheader">${data.bigTitle}</div>
  <div class="${data.bodyText1}">Text color &nbsp <input type="color" id="colorPicker"> </div>
  <div class="${data.titleOneClass} ${data.textOnecolor}">${data.titleOne}</div>
  <div class="${data.bodyText2}">Text color &nbsp <input type="color" id="colorOnePicker"></div>
  <div class="${data.titleTwoClass} ${data.textTwocolor}">${data.titleTwo}</div>
  <div class="${data.bodyText3}">Text color &nbsp <input type="color" id="colorTwoPicker"></div>
  <div class="${data.titleThreeClass} ${data.textThreecolor}">${data.titleThree}</div>
  <div class="${data.bodyText4}">Text color &nbsp <input type="color" id="colorThreePicker"></div>
  <img src="${data.img}"></img>
  <img src="${data.realimg}" class="${data.realimgClass}"></img>
  </main>
  `
  } 
  

  function generateCommon(text){
    const foot = document.querySelector('footer');
    foot.innerHTML = `
    <div class="${text.headerClass}">${text.header1}</div>
        <div class="${text.headerClass}">Instructions</div>
        <div></div>
        <div class="${text.descriptionClass}">${text.h1define}</div>
        <div class="${text.descriptionClass}">Choose a colour for each text<br>
            Drag the text on to the sign<br>
            Play with the font size</div>
        <div class="colors" id="swatches">
    </div>
    `
  }


  function generateColorSwatches(colors){
    const swatches = document.querySelector("#swatches")

    colors.forEach(color => {
        swatches.innerHTML +=  `<div class="color ${color}"></div>`
    })
  }

  function revealreal(){
        document.querySelector(".realimage").classList.toggle("showImage");
    }



    function makeDivsDraggable(container) {
        const divs = container.querySelectorAll("div");
    
        divs.forEach(div => {
            div.draggable = true;
        });
    }
    
    const mainElement = document.querySelector("main");
    makeDivsDraggable(mainElement);



    

    // const container = document.querySelector(".titlesans");
    // function onMouseDrag({ movementX, movementY }) {
    //     let getContainerStyle = window.getComputedStyle(container);
    //     let leftValue = parseInt(getContainerStyle.left);
    //     let topValue = parseInt(getContainerStyle.top);
    //     container.style.left = `${leftValue + movementX}px`;
    //     container.style.top = `${topValue + movementY}px`;
    // }
    // container.addEventListener("mousedown", () => {
    //     container.addEventListener("mousemove", onMouseDrag);
    // });
    // document.addEventListener("mouseup", () => {
    //     container.removeEventListener("mousemove", onMouseDrag);
    // });