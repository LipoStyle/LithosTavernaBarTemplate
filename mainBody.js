// some variables
const textToUse = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos impedit, laudantium beatae sequi consectetur quasi veritatis neque, possimus cum consequatur fugiat, nulla minus nostrum sunt doloremque id tenetur perferendis.";

// creating First section of the home page
function HeaderTitleComponent({name, paraText}){
  return (
    <div class="nameOfRestaurant">
      <h1>{name}</h1>
      <p>{paraText}</p>
    </div>
  )
}

// creating Second section of the home page
function SlidingClickComponent({text,position}){
  return (
    <div class={position}>
      <p>{text}</p>
    </div>
  )
}
function MainImageComponent({url}){
  return (
    <div class="mainImage">
      <img src={url}></img>
    </div>
  )
}
function ImagesComponent({url}){
  return (
    <img src={url}></img>
  )
}
function OtherImagesComponent(){
  return (
    <div class="otherImages">
      <ImagesComponent url={"img/background.jpg"} />
      <ImagesComponent url={"img/background.jpg"} />
      <ImagesComponent url={"img/background.jpg"} />
      <ImagesComponent url={"img/background.jpg"} />
      <ImagesComponent url={"img/background.jpg"} />
    </div>
  )
}
function ImagesSlideComponent(){
  return (
    <div class="imageSlide">
      <MainImageComponent url={"img/background.jpg"}/>
      <OtherImagesComponent />
    </div>
  )
}
function SecondSectionComponent(){
  return (
    <div class="someImages">
      <SlidingClickComponent text={"<"} position={"previusImage"}/>
      <ImagesSlideComponent />
      <SlidingClickComponent text={">"} position={"nextImage"}/>
    </div>
  )
}

// creating section three for our home page
function CardsComponent({title, text,link,linkName}){
  return (
    <div class="cards">
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={link}>{linkName}</a>
    </div>
  )
}
function ThirdSectionComponent(){
  return (
    <div class="someChoices">
      <CardsComponent title={"Look our Menu"} text={textToUse} link={"pages/menu/menu.html"} linkName={"Menu"}/>
      <CardsComponent title={"Get in touch with us"} text={textToUse} link={"pages/menu/menu.html"} linkName={"Contact Us"}/>
      <CardsComponent title={"Find more about us"} text={textToUse} link={"pages/menu/menu.html"} linkName={"About"}/>
    </div>
  )
}
function MainBodyComponent(){
  return(
    <div id="mainBody">
      <HeaderTitleComponent name={"Lithos tavernaBar"} paraText={textToUse}/>
      <SecondSectionComponent />
      <ThirdSectionComponent />
    </div>
  )
}
// creating everything and rendering it to homepage
ReactDOM.render(
  <MainBodyComponent />,
  document.querySelector("#bodySection")
);