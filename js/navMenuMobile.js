let closeNav = document.querySelector( ".close-nav" );
let openNav = document.querySelector( ".open-nav" );

if ( window.matchMedia( '( max-device-width: 760px )' ).matches ) {

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
      headerItems.forEach( item => {
        item.classList.remove( "hide" );
        item.classList.add( "show" );
      });  
      openNav.classList.remove( "show" );
      openNav.classList.add( "hide" );
    }, false);
    
    closeNav.addEventListener( "click", () => {
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