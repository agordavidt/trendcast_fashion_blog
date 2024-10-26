// preload : loading will end after document is loaded

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", ()=>{
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});




// Header Background change

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
