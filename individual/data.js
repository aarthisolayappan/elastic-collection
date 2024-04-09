const content =
[
    {
        "bigTitle": "BENGALURU CITY TRAFFIC POLICE",
        "bigTitleClass": 'titlesans redtext',
        "bodyText1": 'bodytext1',
        "color": '#D71D2C',

        "titleOne": "Vaccination is better than cure",
        "titleOneClass": 'title1sans bluetext',
        "bodyText2":'bodytext2',

        "titleTwo": "MAHA CEMENT",
        "titleTwoClass": 'title2 blacktext',
        "bodyText3":'bodytext3',

        "titleThree": "BUILD IT STRONG",
        "titleThreeClass": 'title3 redtext',
        "bodyText4":'bodytext4',

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
<div class="editflex">
    <div class="edit">edit</div>
  </div>
  <div class="${data.bigTitleClass}" oninput="changeTextColor()">${data.bigTitle}</div>
  <div class="${data.bodyText1}">Text color &nbsp <input type="color" id="colorPicker" value = > </div>
  <div class="${data.titleOneClass}">${data.titleOne}</div>
  <div class="${data.bodyText2}">Text color &nbsp <input type="color" value="${data.color}"></div>
  <div class="${data.titleTwoClass}">${data.titleTwo}</div>
  <div class="${data.bodyText3}">Text color &nbsp <input type="color" value="${data.color}"></div>
  <div class="${data.titleThreeClass}">${data.titleThree}</div>
  <div class="${data.bodyText4}">Text color &nbsp <input type="color" value="${data.color}"></div>
  <img src="${data.img}"></img>
  <img src="${data.realimg}" class="${data.realimgClass}"></img>
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



    let myElem = document.querySelector(".titlesans")
    let colorInput = document.getElementById("colorPicker")
   
    function changeTextColor(){
       myElem.style.color = colorInput.value;
    }