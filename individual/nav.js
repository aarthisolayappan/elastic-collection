fetch('../nav.html')
.then(content => content.text())
.then(html => {
    document.querySelector("nav").innerHTML = html;



var pages = [
    "../yellow/yellow1.html",
    "../yellow/yellow2.html",
    "../yellow/yellow3.html",
    "../yellow/yellow4.html",
    "../yellow/yellow5.html",
    "../white/white1.html",
    "../white/white2.html",
    "../white/white4.html",
    "../white/white6.html",
    "../white/white8.html",
    "../white/white10.html",
    "../white/white11.html",
    "../red/red1.html",
    "../red/red3.html",
    "../red/red5.html",
    "../red/red6.html",
    "../red/red7.html",
    "../green/green1.html",
    "../green/green2.html",
    "../blue/blue1.html",
    "../blue/blue2.html",
    "../blue/blue3.html",
    "../blue/blue6.html",

]; 

function redirectToRandomPage() {
    var randomPageIndex = Math.floor(Math.random() * pages.length);
    var randomPage = pages[randomPageIndex];
    window.location.href = randomPage;
}

document.getElementById("next").addEventListener("click", redirectToRandomPage);

})
.catch(error => {
    console.error(error);
})