const images =
[
    {
        "title": "parking-at-no-parking",
        "img": 'red1.JPG',
        "color": "red",
        "shape": "rectangle",
        "type": "sans",
    },
    
    {
        "title": "parking-or-no-parking",
        "img": "red3.JPG",
        "color": "red",
        "shape": "circle",
        "type": "sans",
    },
    {
        "title": "use-me",
        "img": "white3.JPG",
        "color": "white",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "vaccination-is-better-than-cure",
        "img": "yellow4.JPG",
        "color": "yellow",
        "shape": "rectangle",
        "page": "individual/yellow4.html",
        "type": "sans",
    },
    {
        "title": "puncture-service",
        "img": "red4.JPG",
        "color": "red",
        "shape": "circle",
        "type": "sans",
    },
    {
        "title": "nice-to-see",
        "img": "red5.JPG",
        "color": "red",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "no-spitting",
        "img": "white2.JPG",
        "color": "white",
        "shape": "circle",
        "type": "sans",
    },
    {
        "title": "danger-never-takes-a-vacation",
        "img": "red6.JPG",
        "color": "red",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "littering-fine",
        "img": "blue4.JPG",
        "color": "blue",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "eight-different-directions",
        "img": "blue5.JPG",
        "color": "blue",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "feel-the-pull",
        "img": "red7.JPG",
        "color": "red",
        "shape": "circle",
        "type": "sans",
    },
    {
        "title": "kitchen-washing-man",
        "img": "white1.JPG",
        "color": "white",
        "shape": "rectangle",
        "type": "serif",
    },
    {
        "title": "dont-be-like-a-cigarette",
        "img": "yellow5.png",
        "color": "yellow",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "kingz-shoe-shop",
        "img": "red2.JPG",
        "color": "red",
        "shape": "rectangle",
        "type": "sans&serif",
    },
    {
        "title": "satanise-your-hands",
        "img": "white4.JPG",
        "color": "white",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "no-smoking",
        "img": "white5.JPG",
        "color": "white",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "do-not-sit-here",
        "img": "white6.JPG",
        "color": "white",
        "shape": "circle",
        "type": "sans",
    },
    {
        "title": "veg-restaurant",
        "img": "white7.JPG",
        "color": "white",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "diesel",
        "img": "white8.JPG",
        "color": "white",
        "shape": "circle",
        "type": "sans",
    },
    {
        "title": "no-smoking-please",
        "img": "white9.JPG",
        "color": "white",
        "type": "sans&serif",
        "shape": "rectangle",
    },
    {
        "title": "use-dustbin",
        "img": "white10.JPG",
        "color": "white",
        "type": "serif",
        "shape": "rectangle",
    },
    {
        "title": "namaskara",
        "img": "white11.JPG",
        "color": "white",
        "type": "sans",
        "shape": "rectangle",
    },
    {
        "title": "wanted-drivers",
        "img": "white12.JPG",
        "color": "white",
        "shape": "rectangle",
        "type": "serif",
    },
    {
        "title": "surveillance",
        "img": "white13.JPG",
        "color": "white",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "compost-pit",
        "img": "blue1.JPG",
        "color": "blue",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "toilet-drinking-water",
        "img": "blue2.JPG",
        "color": "blue",
        "shape": "rectangle",
        "type": "sans",
    },    
    {
        "title": "foot-over-bridge",
        "img": "blue6.JPG",
        "color": "blue",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "exit",
        "img": "green1.JPG",
        "color": "green",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "very-strictly",
        "img": "green2.JPG",
        "color": "green",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "speed-hump-ahead",
        "img": "yellow1.JPG",
        "color": "yellow",
        "shape": "triangle",
        "type": "sans",
    },
    {
        "title": "fast-could-be-last",
        "img": "yellow2.JPG",
        "color": "yellow",
        "shape": "rectangle",
        "type": "sans",
    },
    {
        "title": "date-on-bumble",
        "img": "yellow3.JPG",
        "color": "yellow",
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
    const imageElement = sign.img ? `<img src="../img/${sign.img}" alt="${sign.title}">` : '';
    const linkElement = sign.page ? `<a href="../${sign.page}">${imageElement}</a>` : imageElement;

    if (toolbox) {
        toolbox.innerHTML += linkElement;
    } else {
        console.error("Unable to find 'toolbox' element.");
    }
}

// function generateImages(sign) {
//     toolbox.innerHTML += `
//         ${sign.img ? `<img src="../img/${sign.img}" alt="${sign.title}">` : ''}
//         ${sign.page ? `<a href="individual/yellow1.html"></a>` : ''}
//     `;
// }

for(let sign=0; sign< images.length; sign++){
    generateImages(images[sign]);
}


function filterRedImages() {
    const displayRedImages = [];
    const imageElements = document.querySelectorAll('img');

    imageElements.forEach(imageElement => {
        imageElement.style.visibility = 'visible';

    });

    for (let i = 0; i <= images.length; i++) {
        if (images[i].color.includes("red")) {
            displayRedImages.push(images[i]);
        } else {
            imageElements[i].style.visibility = 'hidden';
        }
    }
    return displayRedImages;

    }

const redBox = document.getElementById('redgrid');
redBox.addEventListener('click', function() {
    filterRedImages();
})




function filterWhiteImages() {
    const displayWhiteImages = [];
    const imageElements = document.querySelectorAll('img');

    imageElements.forEach(imageElement => {
        imageElement.style.visibility = 'visible';

    });

    for (let i = 0; i < images.length; i++) {
        if (images[i].color.includes("white")) {
            displayWhiteImages.push(images[i]);
        } else {
            imageElements[i].style.visibility = 'hidden';
        }
    }
    return displayWhiteImages;

    }

const whiteBox = document.getElementById('whitegrid');
whiteBox.addEventListener('click', function() {
    filterWhiteImages();
})





function filterYellowImages() {
    const displayYellowImages = [];
    const imageElements = document.querySelectorAll('img');

    imageElements.forEach(imageElement => {
        imageElement.style.visibility = 'visible';

    });

    for (let i = 0; i < images.length; i++) {
        if (images[i].color.includes("yellow")) {
            displayYellowImages.push(images[i]);
        } else {
            imageElements[i].style.visibility = 'hidden';
        }
    }
    return displayyellowImages;

    }

const yellowBox = document.getElementById('yellowgrid');
yellowBox.addEventListener('click', function() {
    filterYellowImages();
})





function filterBlueImages() {
    const displayBlueImages = [];
    const imageElements = document.querySelectorAll('img');

    imageElements.forEach(imageElement => {
        imageElement.style.visibility = 'visible';

    });

    for (let i = 0; i < images.length; i++) {
        if (images[i].color.includes("blue")) {
            displayBlueImages.push(images[i]);
        } else {
            imageElements[i].style.visibility = 'hidden';
        }
    }
    return displayBlueImages;

    }

const blueBox = document.getElementById('bluegrid');
blueBox.addEventListener('click', function() {
    filterBlueImages();
})




function filterGreenImages() {
    const displayGreenImages = [];
    const imageElements = document.querySelectorAll('img');

    imageElements.forEach(imageElement => {
        imageElement.style.visibility = 'visible';

    });

    for (let i = 0; i < images.length; i++) {
        if (images[i].color.includes("green")) {
            displayGreenImages.push(images[i]);
        } else {
            imageElements[i].style.visibility = 'hidden';
        }
    }
    return displayGreenImages;
    }

const greenBox = document.getElementById('greengrid');
greenBox.addEventListener('click', function() {
    filterGreenImages();
})




function filterRectangleImages() {
    const displayRectangleImages = [];
    const imageElements = document.querySelectorAll('img');

    imageElements.forEach(imageElement => {
        imageElement.style.visibility = 'visible';
    });

    for (let i = 0; i < images.length; i++) {
        if (images[i].shape.includes("rectangle")) {
            displayRectangleImages.push(images[i]);
        } else {
            imageElements[i].style.visibility = 'hidden';
        }
    }
    return displayRectangleImages;
    }

const rectangleBox = document.getElementById('squaregrid');
rectangleBox.addEventListener('click', function() {
    filterRectangleImages();
})



function filterCircleImages() {
    const displayCircleImages = [];
    const imageElements = document.querySelectorAll('img');

    imageElements.forEach(imageElement => {
        imageElement.style.visibility = 'visible';
    });

    for (let i = 0; i < images.length; i++) {
        if (images[i].shape.includes("circle")) {
            displayCircleImages.push(images[i]);
        } else {
            imageElements[i].style.visibility = 'hidden';
        }
    }
    return displayCircleImages;
    }

const circleBox = document.getElementById('circlegrid');
circleBox.addEventListener('click', function() {
    filterCircleImages();
})




function filterTriangleImages() {
    const displayTriangleImages = [];
    const imageElements = document.querySelectorAll('img');

    imageElements.forEach(imageElement => {
        imageElement.style.visibility = 'visible';
    });

    for (let i = 0; i < images.length; i++) {
        if (images[i].shape.includes("triangle")) {
            displayTriangleImages.push(images[i]);
        } else {
            imageElements[i].style.visibility = 'hidden';
        }
    }
    return displayTriangleImages;
    }

const triangleBox = document.getElementById('trianglegrid');
triangleBox.addEventListener('click', function() {
    filterTriangleImages();
})




function filterSansImages() {
    const displaySansImages = [];
    const imageElements = document.querySelectorAll('img');

    imageElements.forEach(imageElement => {
        imageElement.style.visibility = 'visible';
    });

    for (let i = 0; i < images.length; i++) {
        if (images[i].type === "sans") {
            displaySansImages.push(images[i]);
        } else {
            imageElements[i].style.visibility = 'hidden';
        }
    }
    return displaySansImages;
    }

const sansBox = document.getElementById('sansgrid');
sansBox.addEventListener('click', function() {
    filterSansImages();
})



function filterSerifImages() {
    const displaySerifImages = [];
    const imageElements = document.querySelectorAll('img');

    imageElements.forEach(imageElement => {
        imageElement.style.visibility = 'visible';
    });

    for (let i = 0; i < images.length; i++) {
        if (images[i].type === "serif") {
            displaySerifImages.push(images[i]);
        } else {
            imageElements[i].style.visibility = 'hidden';
        }
    }
    return displaySerifImages;
    }

const serifBox = document.getElementById('serifgrid');
serifBox.addEventListener('click', function() {
    filterSerifImages();
})




function filterSansserifImages() {
    const displaySansserifImages = [];
    const imageElements = document.querySelectorAll('img');

    imageElements.forEach(imageElement => {
        imageElement.style.visibility = 'visible';
    });

    for (let i = 0; i < images.length; i++) {
        if (images[i].type === "sans&serif") {
            displaySansserifImages.push(images[i]);
        } else {
            imageElements[i].style.visibility = 'hidden';
        }
    }
    return displaysansserifImages;
    }

const sansserifBox = document.getElementById('sansserifgrid');
sansserifBox.addEventListener('click', function() {
    filterSansserifImages();
})
