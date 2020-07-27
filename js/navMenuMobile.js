//Mobile menu
let closeNav = document.querySelector( ".close-nav" );
let openNav = document.querySelector( ".open-nav" );

if ( window.matchMedia( '( max-device-width: 760px )' ).matches ) {

    let header = document.querySelector(".header");
    let headerItems = document.querySelectorAll( ".header__item" );
    
    document.addEventListener( "DOMContentLoaded", () => { 
      //closeNav.classList.add( "hide" );  
      headerItems.forEach( item => {
        item.classList.add( "hide" );
      });
      openNav.classList.remove( "hide" );
      openNav.classList.add( "show" );
    }, false);
    
    openNav.addEventListener( "click", () => {
      header.style.height = "500px";
      headerItems.forEach( item => {
        item.classList.remove( "hide" );
        item.classList.add( "show" );
      });  
      openNav.classList.remove( "show" );
      openNav.classList.add( "hide" );
    }, false);
    
    closeNav.addEventListener( "click", () => {
      header.style.height = "revert";
      headerItems.forEach( item => {
        item.classList.remove( "show" );
        item.classList.add( "hide" );
      });
      openNav.classList.remove( "hide" );
      openNav.classList.add( "show" );
    }, false);
} else {
  closeNav.classList.add( "hide" );  
  openNav.classList.add( "hide" );
}


//Update the current year on the footer copyright
const footerYear = document.querySelector(".footer p:first-of-type");
footerYear.innerHTML = `© Copyright 2019 - ${new Date().getFullYear()} Sergio Gutierrez. All rights reserved.`;