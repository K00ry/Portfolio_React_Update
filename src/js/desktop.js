import $ from 'jquery';
import { TweenMax, TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

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

    //////// name fade animation \\\\\\\

    var controller = new ScrollMagic.Controller();
    const header = $('#home-wrap');
    const abbas = TweenMax.to(header, 2, { opacity: 0, y: -75 });

    const headerScene = new ScrollMagic.Scene({
      triggerElement: '.port-head',
      triggerHook: 0.7,
      duration: '100',
    })
      .setTween(abbas)
      // .addIndicators()
      .addTo(controller);

    ////// portfolio H1 size decrease \\\\\\\

    var controller = new ScrollMagic.Controller();
    const tweeny = new TimelineMax()
      .fromTo(
        $('.port-head'),
        4,
        { css: { fontSize: '7em' } },
        { css: { fontSize: '4em', opacity: 0 } },
        0,
      )
      .to($('.title-tech-ov'), 4, { opacity: 1 }, 0);
    const smallerScene = new ScrollMagic.Scene({
      triggerElement: '#mobile-portfolio',
      triggerHook: 0.6,
      duration: '260',
      offset: 50,
    })
      .setTween(tweeny)
      // .addIndicators({ name: "jasem" })
      .addTo(controller);

    // // //////// SKILLS H1 size decrease \\\\\\\

    var controller = new ScrollMagic.Controller();
    const tweenySkills = new TimelineMax()
      // .fromTo(
      //   $('.port-head-2'),
      //   4,
      //   { css: { fontSize: '5em' } },
      //   { css: { fontSize: '3em' } },
      //   0,
      // )
      .to($('.skills-icons,.contact'), 4, { opacity: 1, duration: 3 });

    const smallerScene2 = new ScrollMagic.Scene({
      triggerElement: '.about-main',
      triggerHook: 0.7,
      duration: '150',
      offset: 100,
    })
      .setTween(tweenySkills)
      // .addIndicators()
      .addTo(controller);

    //////// portfolio animation \\\\\\\

    var controller = new ScrollMagic.Controller();
    const portScene = TweenMax.to($('#mobile-portfolio,#overlay-desktop'), 4, {
      opacity: 1,
      duration: 3,
    });
    const headerScene3 = new ScrollMagic.Scene({
      triggerElement: '.port-head',
      triggerHook: 0.6,
      duration: '200',
      offset: 50,
    })
      .setTween(portScene)
      // .addIndicators()
      .addTo(controller);

    //// portfolio END animation \\\\\\\

    var controller = new ScrollMagic.Controller();

    const portEndScene = TweenMax.to($('#projects'), 4, {
      opacity: 0,
      duration: 3,
      y: -80,
    });
    const aboutScene = new ScrollMagic.Scene({
      triggerElement: '.about-main',
      triggerHook: 0.8,
      duration: '200',
    })
      .setTween(portEndScene)
      // .addIndicators()
      .addTo(controller);

    ///////////////////--------------- javascript code for tablet ----------- \\\\\\\\\\\\\\\\\\\\\
  } else if (
    document.documentElement.clientWidth < 1024 &&
    document.documentElement.clientWidth > 544
  ) {
    ///////////////works .active class toggle \\\\\\\\\\\\\\\\
    const work_li = $('.img-border');

    work_li.click(function() {
      work_li.removeClass('active');
      $(this).addClass('active');
    });

    //////// name fade animation \\\\\\\

    if (window.innerHeight < window.innerWidth) {
      var controller = new ScrollMagic.Controller();
      const header = $('#home-wrap');
      const abbas = TweenMax.to(header, 2, { opacity: 0, y: -80 });

      const headerScene1 = new ScrollMagic.Scene({
        triggerHook: 0.7,
        duration: '200',
      })
        .setTween(abbas)
        // .addIndicators()
        .addTo(controller);
    } else {
      var controller = new ScrollMagic.Controller();
      const header = $('#home-wrap');
      const abbas = TweenMax.to(header, 2, { opacity: 0, y: -75 });

      const headerScene4 = new ScrollMagic.Scene({
        triggerElement: '.port-head',
        triggerHook: 0.5,
        duration: '200',
      })
        .setTween(abbas)
        // .addIndicators()
        .addTo(controller);
    }

    //////// portfolio H1 size decrease \\\\\\\

    var controller = new ScrollMagic.Controller();
    const tweeny = new TimelineMax()
      .fromTo(
        $('.port-head'),
        4,
        { css: { fontSize: '5em' } },
        { css: { fontSize: '3em', opacity: 0 } },
        0,
      )
      .to($('.title-tech-ov'), 4, { opacity: 1 }, 0);
    const smallerScene = new ScrollMagic.Scene({
      triggerElement: '#mobile-portfolio',
      triggerHook: 0.6,
      duration: '260',
      offset: 50,
    })
      .setTween(tweeny)
      // .addIndicators({ name: "jasem" })
      .addTo(controller);

    // // //////// SKILLS H1 size decrease \\\\\\\

    var controller = new ScrollMagic.Controller();
    const tweenySkills = new TimelineMax()
      // .fromTo(
      //   $('.port-head-2'),
      //   4,
      //   { css: { fontSize: '5.5em' } },
      //   { css: { fontSize: '3.5em' } },
      //   0,
      // )
      .to($('.skills-icons'), 4, { opacity: 1, duration: 3 }, 0);

    const smallerScene2 = new ScrollMagic.Scene({
      triggerElement: '.about-main',
      triggerHook: 0.6,
      duration: '100',
      offset: 100,
    })
      .setTween(tweenySkills)
      // .addIndicators()
      .addTo(controller);

    //////// portfolio animation \\\\\\\
    if (window.innerHeight < window.innerWidth) {
      var controller = new ScrollMagic.Controller();
      const portScene = TweenMax.to(
        $('#mobile-portfolio,#overlay-desktop'),
        4,
        { opacity: 1, duration: 3 },
      );
      const headerScene5 = new ScrollMagic.Scene({
        triggerElement: '.port-head',
        triggerHook: 0.6,
        duration: '100',
        offset: 50,
      })
        .setTween(portScene)
        // .addIndicators()
        .addTo(controller);
    } else {
      var controller = new ScrollMagic.Controller();
      const portScene = TweenMax.to(
        $('#mobile-portfolio,#overlay-desktop'),
        4,
        { opacity: 1, duration: 3 },
      );
      const headerScene5 = new ScrollMagic.Scene({
        triggerElement: '.port-head',
        triggerHook: 0.6,
        duration: '400',
        offset: 50,
      })
        .setTween(portScene)
        // .addIndicators()
        .addTo(controller);
    }

    ////// portfolio END animation \\\\\\\

    var controller = new ScrollMagic.Controller();
    const portEndScene = TweenMax.to($('#projects'), 4, {
      opacity: 0,
      duration: 3,
      y: -80,
    });
    const aboutScene = new ScrollMagic.Scene({
      triggerElement: '.about-main',
      triggerHook: 0.7,
      duration: '200',
    })
      .setTween(portEndScene)
      // .addIndicators()
      .addTo(controller);

    /////////////////////// nav background white when needed \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    if (window.innerHeight < window.innerWidth) {
      var controller = new ScrollMagic.Controller({
        globalSceneOptions: { triggerHook: 0.1, duration: '450' },
      });
      const backWhite = TweenMax.to($('.about-main,.navbar'), 4, {
        css: { background: '#fff' },
      });
      new ScrollMagic.Scene({ triggerElement: '#about' })
        .setTween(backWhite)
        // .addIndicators()
        .addTo(controller);
    } else {
      var controller = new ScrollMagic.Controller({
        globalSceneOptions: { triggerHook: 0.1, duration: '450' },
      });
      const backWhite = TweenMax.to($('.about-main'), 4, {
        css: { background: '#fff' },
      });
      new ScrollMagic.Scene({ triggerElement: '#about' })
        .setTween(backWhite)
        // .addIndicators()
        .addTo(controller);
    }
  }
}
