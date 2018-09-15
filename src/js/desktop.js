import $ from 'jquery';
// import { TweenMax, TimelineMax } from 'gsap';
// import ScrollMagic from 'scrollmagic';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

///////////////////--------------- javascript code for desktop ----------- \\\\\\\\\\\\\\\\\\\\\

export default function desktop() {
  if (document.documentElement.clientWidth >= 1024) {
    //////////// initializing video foe bigger devices\\\\\\\\\\\\\\\\

    const videoElement = `<video loop muted autoplay id="video" class="backGroundVid__video"><source src="../../video/ThisCity.mp4" type="video/mp4">
    <source src="../../video/ThisCity.ogg" type="video/ogg"></video>`;
    $('.backGroundVid').html(videoElement);

    ///////////////works .active class toggle \\\\\\\\\\\\\\\\
    const work_li = $('.img-border');

    work_li.click(function() {
      work_li.removeClass('active');
      $(this).addClass('active');
    });
    /////////////////////// Scroll to click handlers \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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

    ///////////////////--------------- javascript code for tablet ----------- \\\\\\\\\\\\\\\\\\\\\
  } else if (
    document.documentElement.clientWidth < 1024 &&
    document.documentElement.clientWidth > 767
  ) {
    const work_li = $('.img-border');

    work_li.click(function() {
      work_li.removeClass('active');
      $(this).addClass('active');
    });

    /////////////////////// Scroll to click handlers \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    const target_home = $('#home').offset().top,
      target_portfolio = $('#portfolio').offset().top,
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
}
