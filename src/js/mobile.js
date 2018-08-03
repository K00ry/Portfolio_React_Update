import $ from 'jquery';
import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

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

    ////////////////////////////////////////////////main head disappear\\\\\\\\\\\\\\\\\\

    /////////////////////// nav back groung white when nedded \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    var controller = new ScrollMagic.Controller();
    const backWhite = TweenMax.to($('.about-main,.navbar'), 4, {
      css: { background: '#fff' },
    });
    const jaber = new ScrollMagic.Scene({
      triggerElement: '#about',
      triggerHook: 0.2,
      duration: '100',
    })
      .setTween(backWhite)
      // .addIndicators()
      .addTo(controller);
  } //////////////////////////////////////////end break points!!
}
