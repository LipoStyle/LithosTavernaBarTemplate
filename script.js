// burger menu section
const burger = document.querySelector(".burgerMenu");
const menu = document.querySelector(".menuSection");
console.log(burger);
burger.addEventListener("click", ()=>{
  burger.classList.toggle("change");
  menu.classList.toggle("active");
})