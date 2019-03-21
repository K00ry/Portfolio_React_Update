import $ from 'jquery';


///////////////////--------------- javascript code for mobile ----------- \\\\\\\\\\\\\\\\\\\\\

export default function mobile() {
  if (document.documentElement.clientWidth < 766) {
    if (window.innerHeight < window.innerWidth) {
      const target_home = $('#home').offset().top,
        target_portfolio = $('#portfolio').offset().top,
        target_about = $('#about').offset().top;

      $('#home-link').click(function() {
        $('html, body').animate({ scrollTop: target_home }, 1500);
      });
      $('#port-link').click(function() {
        $('html, body').animate({ scrollTop: target_portfolio }, 1500);
      });

      $('#about-link').click(function() {
        $('html, body').animate({ scrollTop: target_about }, 1500);
      });
    } else {
      const target_home = $('#home').offset().top,
        target_portfolio = $('#projects').offset().top,
        target_about = $('.number-email').offset().top;

      $('#home-link').click(function() {
        $('html, body').animate({ scrollTop: target_home }, 1500);
      });
      $('#port-link').click(function() {
        $('html, body').animate({ scrollTop: target_portfolio }, 1500);
      });

      $('#about-link').click(function() {
        $('html, body').animate({ scrollTop: target_about }, 1500);
      });
    }



  } //////////////////////////////////////////end break points!!
}
