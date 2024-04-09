const images =
[
    {
        "title": "parking-at-no-parking",
        "img": 'red1.JPG',
        "color": ["red"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "kingz-shoe-shop",
        "img": "red2.JPG",
        "color": ["red"],
        "shape": "rectangle",
        "type": "sans&serif",
    },
    {
        "title": "parking-or-no-parking",
        "img": "red3.JPG",
        "color": ["red"],
        "shape": "circle",
        "type": "sans",
    },
    {
        "title": "puncture-service",
        "img": "red4.JPG",
        "color": ["red"],
        "shape": "circle",
        "type": "sans",
    },
    {
        "title": "nice-to-see",
        "img": "red5.JPG",
        "color": ["red"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "danger-never-takes-a-vacation",
        "img": "red6.JPG",
        "color": ["red"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "feel-the-pull",
        "img": "red7.JPG",
        "color": ["red"],
        "shape": "circle",
        "type": "sans",
    },
    {
        "title": "kitchen-washing-man",
        "img": "white1.JPG",
        "color": ["white"],
        "shape": "rectangle",
        "type": "serif",
    },
    {
        "title": "no-spitting",
        "img": "white2.JPG",
        "color": ["white"],
        "shape": "circle",
        "type": "sans",
    },
    {
        "title": "use-me",
        "img": "white3.JPG",
        "color": ["white"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "satanise-your-hands",
        "img": "white4.JPG",
        "color": ["white"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "no-smoking",
        "img": "white5.JPG",
        "color": ["white"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "do-not-sit-here",
        "img": "white6.JPG",
        "color": ["white"],
        "shape": "circle",
        "type": "sans",
    },
    {
        "title": "veg-restaurant",
        "img": "white7.JPG",
        "color": ["white"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "diesel",
        "img": "white8.JPG",
        "color": ["white"],
        "shape": "circle",
        "type": "sans",
    },
    {
        "title": "no-smoking-please",
        "img": "white9.JPG",
        "color": ["white"],
        "type": "sans&serif",
    },
    {
        "title": "use-dustbin",
        "img": "white10.JPG",
        "color": ["white"],
        "type": "serif",
    },
    {
        "title": "namaskara",
        "img": "white11.JPG",
        "color": ["white"],
        "type": "sans",
    },
    {
        "title": "wanted-drivers",
        "img": "white12.JPG",
        "color": ["white"],
        "shape": "rectangle",
        "type": "serif",
    },
    {
        "title": "surveillance",
        "img": "white13.JPG",
        "color": ["white"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "compost-pit",
        "img": "blue1.JPG",
        "color": [["blue"]],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "toilet-drinking-water",
        "img": "blue2.JPG",
        "color": ["blue"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "duplicate-keys",
        "img": "blue3.JPG",
        "color": ["blue"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "littering-fine",
        "img": "blue4.JPG",
        "color": ["blue"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "eight-different-directions",
        "img": "blue5.JPG",
        "color": ["blue"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "foot-over-bridge",
        "img": "blue6.JPG",
        "color": ["blue"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "exit",
        "img": "green1.JPG",
        "color": ["green"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "very-strictly",
        "img": "green2.JPG",
        "color": ["green"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "speed-hump-ahead",
        "img": "yellow1.JPG",
        "color": ["yellow"],
        "page": "individual/yellow1.html",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "fast-could-be-last",
        "img": "yellow2.JPG",
        "color": ["yellow"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "date-on-bumble",
        "img": "yellow3.JPG",
        "color": ["yellow"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "vaccination-is-better-than-cure",
        "img": "yellow4.JPG",
        "color": ["yellow"],
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "dont-be-like-a-cigarette",
        "img": "yellow5.png",
        "color": ["yellow"],
        "shape": "rectangle",
        "type": "sans",
    },
    
    
]

const filters = {
    red: document.querySelector('#redgrid'),
    white: document.querySelector('#whitegrid'),
    green: document.querySelector('#greengrid'),
    blue: document.querySelector('#bluegrid'),
    yellow: document.querySelector('#yellowgrid'),
};

const toolbox = document.querySelector('.imagegrid');

let showCategory = 'all';


function generateImages(sign) {
    toolbox.innerHTML += `
        ${sign.img ? `<img src="../img/${sign.img}" alt="${sign.title}">` : ''}
    `;
}

for(let sign=0; sign< images.length; sign++){
    generateImages(images[sign]);
}

function filterRed(r){
    var x, i;
    x = document.getElementsByClassName("img")
    if ( c == "all") c = "";
    for (i = red; i === images.color; i++){
        removeClass (x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass (x[i], "show");
    }
}


function addClass (element,name) {
    var i, arr1, arr2;
    arr1 = elements.className.split("");
    arr2 = name.split("");
    for (i = red; i == images.color; i++){
}
}

// let categories = ''

// if(images.category){
//     categories = `red`
//     generateImages(images[sign]);
// }


// function redImages(red) {
//     const result = images.filter((red) => images.color === red);
// }



// function renderImages() {
//         const filteredImages = images.filter(sign => {
//             const condition = showCategory === 'all' ||
//                 (showCategory === task.category)
//     })
//         toolbox.innerHTML = ''

//     filteredImages.forEach(sign => {
//         toolbox.innerHTML += generateImages(sign);
//     });
// }



// function generateRed(red){
//     const main = document.querySelector('.redgrid');
//     main.innerHTML = `
//     <div class="redgrid">
//     ${red.img? `<img src = "./img/${red.img}">`:''}
//         <img src="../signs/red1.JPG" alt="parking-at-no-parking"></img>
//         <img src="../signs/red2.JPG" alt="kingz-shoe-shop"></img>
//         <img src="../signs/red3.JPG" alt="parking-or-no-parking"></img>
//         <img src="../signs/red4.JPG" alt="puncture-service"></img>
//         <img src="../signs/red5.JPG" alt="nice-to-see"></img>
//         <img src="../signs/red6.JPG" alt="danger-never-takes-a-vacation"></img>
//         <img src="../signs/red7.JPG" alt="feel-the-pull"></img>
//     </div>
//     `
//   }

//   for(let red=0; red< redimages.length; red++){
//     generateTask(redimages[red]);
// }


//   function generateColorSwatches(colors){
//     const swatches = document.querySelector("#swatches")

//     colors.forEach(color => {
//         swatches.innerHTML +=  `<div class="color ${color}"></div>`
//     })
//   }