nav = document.getElementById("nav");
hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click",  ()=>{
    nav.classList.toggle("active");
})