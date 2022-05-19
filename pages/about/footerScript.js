/* <div class="restorauntName">
    <p>Lithos tavernaBar</p>
  </div>
  <p class="copyrightField">	&copy; 2022 	&copy;</p>
  <div class="socialMedia">
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
  </div> */

  // creating the name of the company
  function CompanyNameComponent(){
    return (
      <div class="companyName">
        <p>Lithos tavernaBar</p>
      </div>
    )
  }

  // creating the copyright field
  function CopyrightComponent(){
    return (
      <p class="copyrightField">&copy; 2022 &copy;</p>
    )
  }

  // creating socialmedia field
  function SocialMediaComponent(){
    return (
      <div class="socialMedia">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    )
  }

  // creating the footer section
  function FooterComponent(){
    return ( 
      <div id="footer">
        <CompanyNameComponent />
        <CopyrightComponent />
        <SocialMediaComponent />
      </div>
    )
  }

  // rendering our footersection to DOM
  ReactDOM.render(
    <FooterComponent />,
    document.querySelector("footer")
  )