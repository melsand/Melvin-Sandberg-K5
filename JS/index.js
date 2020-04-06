$('body').addClass('stop-scrolling');
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0,0);




$(window).on("load",function(){
  // Eftersom sidan tar typ en millisekund att ladda så blir loadingscreenen onödig
  // $(".loader-wrapper").fadeOut("slow"); 
});

setTimeout(() => {  $(".loader-wrapper").fadeOut("slow"), $('body').removeClass('stop-scrolling'); }, 2000);
// $('body').removeClass('stop-scrolling');



AOS.init({
  // Global settings:
  disable: false,
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200,
  delay: 0, 
  duration: 700,
  easing: 'ease',
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom',
  

});


$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});