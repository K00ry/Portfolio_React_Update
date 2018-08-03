import $ from 'jquery';
// import { TweenMax, TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import ScrollTrigger from 'scrolltrigger-classes';

import { skills } from '../data';

export default function main() {
  document.addEventListener('DOMContentLoaded', function() {
    var trigger = new ScrollTrigger({
      centerVertical: true,
    });
  });

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

  //////////////// Browser Reload after resize\\\\\\\\

  $(window).bind('orientationchange', function(event) {
    location.reload(true);
  });

  const skillContainer = $('.skills-icons');
  let skill_icon = ' ';
  $.each(skills, (index, value) => {
    skill_icon += `<img class="logo-skill" src="${value}" alt="skill-logo">`;
    skillContainer.html(skill_icon);
  });

  //////////copy right year\\\\\\\\\\\

  const copyRight = $('.copy-right-date');
  let date = new Date();
  let year = date.getFullYear();
  const copyYear = ` &copy; Kourosh Mirzaei ${year}`;
  copyRight.html(copyYear);
}
