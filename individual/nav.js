fetch('./nav.html')
.then(content => content.text())
.then(html => {
    document.querySelector("nav").innerHTML = html;
})
.catch(error => {
    console.error(error);
})