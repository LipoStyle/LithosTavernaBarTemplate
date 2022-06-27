// creating header section from js with react and babel
// creating logo component
function LogoComponent({logoUrl}){
  return (
    <div class="logoSection">
      <img src={logoUrl}></img>
    </div>
  )
}

// creating menu section
// creating items for menu
function LiComponent({liUrl, name}){
  return (
    <li><a href={liUrl}>{name}</a></li>
  )
}
function UlComponent(){
  return (
    <ul class="menuSection">
      <LiComponent liUrl={"../../index.html"} name={"Home"} />
      <LiComponent liUrl={"../menu/menuFGr.html"} name={"Menu"} />
      <LiComponent liUrl={"../contact_Us/contactUs.html"} name={"Contact Us"} />
      <LiComponent liUrl={"about.html"} name={"About"} />
    </ul>
  )
}

// creating the burger menu section
function BurgerComponent(){
  return (
    <div class="burgerMenu">
      <span class="bar1"></span>
      <span class="bar2"></span>
      <span class="bar3"></span>
    </div>
  )
}

// creating the header component
function HeaderComponent(){
  return (
    <div id="header">
      <LogoComponent logoUrl={"../../img/headerLogo.jpg"} />
      <UlComponent />
      <BurgerComponent/>
    </div>
  )
}

// rendering the header to htmlDOM
ReactDOM.render(
  <HeaderComponent />,
  document.querySelector("header")
)

// burger menu section for onclickevent
const burger = document.querySelector(".burgerMenu");
const menu = document.querySelector(".menuSection");
console.log(burger);
burger.addEventListener("click", ()=>{
  burger.classList.toggle("change");
  menu.classList.toggle("active");
})