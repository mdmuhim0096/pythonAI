let body = document.querySelector("body");
window.addEventListener("scroll", ()=>{
    let val = window.scrollY;

    if(val > 1000){
        body.style.background = "linear-gradient(90deg, #0700b8 0%, #00ff88 100%)";
    }

    if(val > 2000){
        body.style.background = "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)";
    }

    if(val > 4000){
        body.style.background = "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)";
    }

    if(val < 1000){
        body.style.background = "linear-gradient(to right top, #0b3be7, #4036e9, #5b2eea, #7224eb, #8612eb)";
    }

})

let home = document.querySelector(".home");
home.addEventListener("mousemove", (e)=>{
    let span = document.createElement("div");
    span.className = "span";
    let x = e.offsetX;
    let y = e.offsetY;

    span.style.left = x +"px";
    span.style.top  = y +"px";
    let size = Math.random() * 80;
    span.style.width = 20 + size + "px";
    span.style.height = 20 + size + "px";

    let transformValue = Math.random() * 360;
    span.style.transform = "rotate("+transformValue+"deg)";

    home.appendChild(span);
    let head = document.getElementById("head");
    head.classList.add("animation");
    setTimeout(()=>{
        head.classList.remove("animation");
    },400)
    setTimeout(()=>{
        span.remove();
    },1000);


})

let card = document.getElementById("blog");
let cardInner = document.getElementById("blog_container");

card.onscroll = function(){
    let val = card.scrollTop;
    cardInner.style.marginLeft = val * -2 + "px";
}

let menue = document.getElementById("barger_menu");
let main_menu = document.getElementById("main_menu");
menue.addEventListener("click", ()=>{
    main_menu.style.right = "0px";
})

main_menu.addEventListener("click", ()=>{
    main_menu.style.right = "-300px";
})