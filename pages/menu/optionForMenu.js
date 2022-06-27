const menuCategory = document.querySelectorAll(".foodOrDrink > p");
const languageCategory = document.querySelectorAll(".language > img");

let displayMenu = "";

// menu onlick event
menuCategory[0].addEventListener(("click"), ()=>{
    menuCategory[0].classList.add("active");
    menuCategory[1].classList.remove("active");
      if(languageCategory[0].classList.contains("languageActive")){
        displayMenu ="foodMenuGr.js";
        console.log(selectMenu);
      } else {
        displayMenu = "foodMenuEn.js";
        console.log(selectMenu);
      }

})
menuCategory[1].addEventListener(("click"), ()=>{
  
    menuCategory[1].classList.add("active");
    menuCategory[0].classList.remove("active");

    if(languageCategory[0].classList.contains("languageActive")){
      displayMenu = "drinkMenuGr.js";
      console.log(selectMenu);
    } else {
      displayMenu = "drinkMenuEn.js"
      console.log(selectMenu);
    }
})

// language onclick event
languageCategory[0].addEventListener(("click"), ()=>{
  if(languageCategory[0].classList.contains("languageActive")){
    // code here
    if(menuCategory[0].classList.contains("active")){
      displayMenu = "foodMenuGr.js";
        console.log(selectMenu);
    } else {
      displayMenu = "drinkMenuGr.js";
        console.log(selectMenu);
    }
  } else {
    languageCategory[0].classList.add("languageActive");
    languageCategory[1].classList.remove("languageActive");

     // code here
     if(menuCategory[0].classList.contains("active")){
      displayMenu = "foodMenuGr.js";
        console.log(selectMenu);
    } else {
      displayMenu = "drinkMenuGr.js";
        console.log(selectMenu);
    }
  }
})
languageCategory[1].addEventListener(("click"), ()=>{
  if(languageCategory[1].classList.contains("languageActive")){
    // code here
    if(menuCategory[0].classList.contains("active")){
      displayMenu = "foodMenuEn.js";
        console.log(selectMenu);
    } else {
      displayMenu = "drinkMenuEn.js";
        console.log(selectMenu);
    }
  } else {
    languageCategory[1].classList.add("languageActive");
    languageCategory[0].removeAttribute("class");

    // code here
    if(menuCategory[0].classList.contains("active")){
      displayMenu = "foodMenuEn.js";
        console.log(selectMenu);
    } else {
      displayMenu = "drinkMenuEn.js";
        console.log(selectMenu);
    }
  }
})

function CreateScript(props){
  return (
    <scirpt type={props.ttype} src={props.displayMenu} defer></scirpt>
  )
}

class Mainbody extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
      <div id="#mainbody"></div>
      <CreateScript file={displayMenu} ttype={"text/babel"}/>
      </>
    )
  }
}