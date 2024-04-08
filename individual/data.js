const content =
[
    {
        "bigTitle": "BENGALURU CITY TRAFFIC POLICE",
        "bigTitleClass": "title red big",
        "header1": "Road Sign 1",
        "header2": "Instructions",
        "h1define": "sample text",
        "h2define": "sample text",
        "img": "indsigns/Elastic collection.png",
        "toggle": "edit",
        "color": ['black', 'teal', 'yellow', 'white']
    },
    {
        "bigTitle": "AARTHI IS GREAT!",
        "bigTitleClass": "title red big",
        "header1": "Road Sign 1",
        "header2": "Instructions",
        "h1define": "sample text",
        "h2define": "sample text",
        "img": "indsigns/Elastic collection.png",
        "toggle": "edit",
        "color": ['black', 'teal']
    }
]

function generateMain(data){
    const main = document.querySelector('main');
    main.innerHTML = `
    <div class="editflex">
    <div class="edit">edit</div>
  </div>
  <div class="${data.bigTitleClass}">${data.bigTitle}</div>
  <div class="bodytext1">Text Color                 Text Size</div>
  <div class="text2">Vaccination is better than cure</div>
  <div class="bodytext2">Text Color                 Text Size</div>
  <div class="text3">MAHA CEMENT</div>
  <div class="bodytext3">Text Color                 Text Size</div>
  <div class="text4">BUILD IT STRONG</div>
  <div class="bodytext4">Text Color                 Text Size</div>
  <img src="../indsigns/Elastic collection.png"></img>
  <img src="../signs/yellow4.JPG" class="realimage"></img>`
  }

  function generateColorSwatches(colors){
    const swatches = document.querySelector("#swatches")

    colors.forEach(color => {
        swatches.innerHTML +=  `<div class="color ${color}"></div>`
    })
  }