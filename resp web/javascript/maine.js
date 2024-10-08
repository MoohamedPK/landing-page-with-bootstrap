
let bot = document.querySelector("button");

window.onscroll = function () {
    if (window.scrollY >= 200) {
        bot.style.display = "block" ; 
    } else {
        bot.style.display = "none";
    }
}

bot.onclick = function () {
    window.scrollTo ({
        top : 0,
        left : 0 , 
        behavior: "smooth", 
    })
}