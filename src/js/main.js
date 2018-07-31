import $ from 'jquery';
import { TweenMax, TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';

import { skills } from '../data';

export default function main() {
  //////////////// Browser Reload after resize\\\\\\\\

    $(window).bind('orientationchange', function (event) {
        location.reload(true);
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

  const skillContainer = $('.skills-icons');
  let skill_icon = ' ';
  $.each(skills, (index, value) => {
    skill_icon += `<img class="logo-skill" src="${value}" alt="skill-logo">`;
    skillContainer.html(skill_icon);
  });

  // /////////////////////// intro animation \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  //
  // TweenMax.staggerFrom('.main-meme', 2, { scale: 0.8, opacity: 0, delay: 1.5 });
  // TweenMax.staggerFrom('.navbar', 2, { scale: 0.5, opacity: 0, delay: 1.5 });

  /////////////////////// scroll magics scroll spy feature \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  let controller = new ScrollMagic.Controller({
    globalSceneOptions: { triggerHook: 0.1, duration: '200' },
  });
  new ScrollMagic.Scene({ triggerElement: '#home' })
    .setClassToggle('#home-li', 'active-me')

    //.addIndicators()
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#portfolio' })
    .setClassToggle('#portfolio-li', 'active-me')

    //.addIndicators()
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#about' })
    .setClassToggle('#about-li', 'active-me')

    // .addIndicators()
    .addTo(controller);
}
//////////copy right year\\\\\\\\\\\

const copyRight = $('.copy-right-date');
let date = new Date();
let year = date.getFullYear();
const copyYear = ` &copy; Kourosh Mirzaei ${year}`;
copyRight.html(copyYear);
