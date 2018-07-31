import $ from 'jquery';
import { TweenMax, TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';

///////////////////--------------- javascript code for mobile ----------- \\\\\\\\\\\\\\\\\\\\\

export default function mobile() {
  if (document.documentElement.clientWidth < 543) {
    if (window.innerHeight < window.innerWidth) {
      var controller = new ScrollMagic.Controller();
      const header = $('#home-wrap');
      const abbas = TweenMax.to(header, 2, { opacity: 0, y: -80 });
      const headerScene1 = new ScrollMagic.Scene({
        triggerHook: 0.6,
        duration: '50',
      })
        .setTween(abbas)
        // .addIndicators()
        .addTo(controller);
    }

    ////////////////////////////////////////////////main head disappear\\\\\\\\\\\\\\\\\\

    var controller = new ScrollMagic.Controller();
    const header = $('#home-wrap');
    const abbas = TweenMax.to(header, 2, { opacity: 0, y: -80 });

    const headerScene1 = new ScrollMagic.Scene({
      triggerHook: 0.2,
      duration: '300',
    })
      .setTween(abbas)
      // .addIndicators()
      .addTo(controller);

    ////// portfolio H1 size decrease \\\\\\\

    var controller = new ScrollMagic.Controller();
    const tween = new TimelineMax()
      .fromTo(
        $('.port-head'),
        4,
        { css: { fontSize: '6em' } },
        { css: { fontSize: '3em', opacity: 0 } },
        0,
      )
      .to($('#mobile-portfolio'), 4, { opacity: 0 }, 0);

    const smallerScene = new ScrollMagic.Scene({
      triggerElement: '.port-head',
      triggerHook: 0.5,
      duration: '300',
    })
      .setTween(tween)
      // .addIndicators({ name: "jasem" })
      .addTo(controller);

    // // //////// SKILLS H1 size decrease \\\\\\\

    var controller = new ScrollMagic.Controller();
    const tweenySkills = new TimelineMax()
      .fromTo(
        $('.port-head-2'),
        4,
        { css: { fontSize: '5em' } },
        { css: { fontSize: '3em' } },
        0,
      )
      .to($('.skills-icons'), 4, { opacity: 1, duration: 3 }, 0);

    const smallerScene2 = new ScrollMagic.Scene({
      triggerElement: '.about-main',
      triggerHook: 0.6,
      duration: '60',
      offset: 100,
    })
      .setTween(tweenySkills)
      // .addIndicators()
      .addTo(controller);

    //////// portfolio animation \\\\\\\

    var controller = new ScrollMagic.Controller();
    const portScene = TweenMax.to($('#mobile-portfolio'), 4, {
      opacity: 1,
      duration: 3,
    });
    const headerScene2 = new ScrollMagic.Scene({
      triggerElement: '#portfolio',
      triggerHook: 0.6,
      duration: '400',
      offset: 80,
    })
      .setTween(portScene)
      // .addIndicators()
      .addTo(controller);

    //////// portfolio END animation \\\\\\\

    var controller = new ScrollMagic.Controller();
    const portEndScene = TweenMax.to($('#projects'), 4, {
      opacity: 0,
      duration: 3,
      y: -80,
    });
    const aboutScene = new ScrollMagic.Scene({
      triggerElement: '.about-main',
      triggerHook: 0.9,
      duration: '300',
    })
      .setTween(portEndScene)
      //.addIndicators()
      .addTo(controller);
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
