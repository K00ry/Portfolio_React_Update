import $ from 'jquery';

import ScrollMagic from 'scrollmagic';
import ScrollTrigger from 'scrolltrigger-classes';

import { skills } from '../data';

export default function main() {
  /////////////// SEGMENT \\\\\\\\\\\\\\\\\\\\

  !(function() {
    var analytics = (window.analytics = window.analytics || []);
    if (!analytics.initialize)
      if (analytics.invoked)
        window.console &&
          console.error &&
          console.error('Segment snippet included twice.');
      else {
        analytics.invoked = !0;
        analytics.methods = [
          'trackSubmit',
          'trackClick',
          'trackLink',
          'trackForm',
          'pageview',
          'identify',
          'reset',
          'group',
          'track',
          'ready',
          'alias',
          'debug',
          'page',
          'once',
          'off',
          'on',
        ];
        analytics.factory = function(t) {
          return function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(t);
            analytics.push(e);
            return analytics;
          };
        };
        for (var t = 0; t < analytics.methods.length; t++) {
          var e = analytics.methods[t];
          analytics[e] = analytics.factory(e);
        }
        analytics.load = function(t, e) {
          var n = document.createElement('script');
          n.type = 'text/javascript';
          n.async = !0;
          n.src =
            'https://cdn.segment.com/analytics.js/v1/' +
            t +
            '/analytics.min.js';
          var a = document.getElementsByTagName('script')[0];
          a.parentNode.insertBefore(n, a);
          analytics._loadOptions = e;
        };
        analytics.SNIPPET_VERSION = '4.1.0';
        analytics.load('h93L2A5itVQJTKOGwmIMz7pTstEbyXgy');
        analytics.page();
      }
  })();

  /////////////////////   scroll triiger   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  document.addEventListener('DOMContentLoaded', function() {
    var trigger = new ScrollTrigger({
      centerVertical: true,
    });
  });

  ///////////////////  hight lighting the area of exploring \\\\\\\\\\\\\\

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

/////////////////////////
let scrollpos = window.scrollY;
const header = document.querySelector("nav");
const header_height = document.getElementById("portfolio").offsetTop;
const closing_height = document.getElementById("about").offsetTop;


const add_class_on_scroll = () => header.classList.add("fade-in");
const remove_class_on_scroll = () => header.classList.remove("fade-in");


window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }
    if (scrollpos >= 1400) { remove_class_on_scroll() }


});
