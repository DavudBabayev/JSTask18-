const navMenu = document.querySelector(".navmenu");
const nav = document.querySelector("nav");

document.querySelector(".bi-list").addEventListener("click", () => {
    if (navMenu.style.top === "100px") {
        navMenu.style.top = "-500px";
    } else {
        navMenu.style.top = "100px";
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        navMenu.style.top = "-500px";
    }
});

window.onscroll = () => {
    if (window.scrollY > 100) {
        nav.style.background = " #f8f8f8";
        nav.style.padding = "10px 0";
    }
    else {
        nav.style.padding = "5px 0";
    }
}