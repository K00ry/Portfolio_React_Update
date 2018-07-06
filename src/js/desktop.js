import $ from 'jquery';
import { TweenMax, TimelineMax} from 'gsap';
import ScrollMagic from 'scrollmagic';



///////////////////--------------- javascript code for desktop ----------- \\\\\\\\\\\\\\\\\\\\\


export default function desktop() {

    if (document.documentElement.clientWidth >= 1024) {

       const videoElement = " <video loop muted autoplay id=\"video\" class=\"backGroundVid__video\">\n" +
           "            <source src=\"./video/ThisCity.mp4\" type=\"video/mp4\">\n" +
           "            <source src=\"./video/ThisCity.ogg\" type=\"video/ogg\">\n" +
           "        </video>";
       $(".backGroundVid").html(videoElement);




        /////////////////////// Scroll to click handlers \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

        let target_home = $('#home').offset().top,
            target_portfolio = $('#projects').offset().top,
            target_about = $('.number-email').offset().top;


        $("#home-link").click(function () {
            $("html, body").animate({scrollTop: target_home}, 1500);
        });
        $("#port-link").click(function () {
            $("html, body").animate({scrollTop: target_portfolio}, 1500);
        });

        $("#about-link").click(function () {
            $("html, body").animate({scrollTop: target_about}, 1500);
        });


        //////// name fade animation \\\\\\\


        var controller = new ScrollMagic.Controller();
        const header = $('#home-wrap');
        const abbas = TweenMax.to(header, 2, {opacity: 0, y: -75});

        const headerScene = new ScrollMagic.Scene({
            triggerElement: '.port-head',
            triggerHook: 0.7,
            duration: '300'
        })
            .setTween(abbas)
            //.addIndicators()
            .addTo(controller);

        ////// portfolio H1 size decrease \\\\\\\

        var controller = new ScrollMagic.Controller();
        const tweeny = new TimelineMax()
            .fromTo($('.port-head'), 4, {css: {fontSize: "7em"}}, {css: {fontSize: "4em"}}, 0)
            .to($('.port-head'), 4, {opacity: 1}, 0);
        const smallerScene = new ScrollMagic.Scene({
            triggerElement: '#mobile-portfolio',
            triggerHook: 0.6,
            duration: '260',
            offset: 50

        })
            .setTween(tweeny)
            //.addIndicators({ name: "jasem" })
            .addTo(controller);


        // // //////// SKILLS H1 size decrease \\\\\\\

        var controller = new ScrollMagic.Controller();
        const tweenySkills = new TimelineMax()
            .fromTo($('.port-head-2'), 4, {css: {fontSize: "5.5em"}}, {css: {fontSize: "3em"}}, 0)
            .to($('.skills-icons,.contact'), 4, {opacity: 1, duration: 3});


        const smallerScene2 = new ScrollMagic.Scene({
            triggerElement: '.about-main',
            triggerHook: 0.6,
            duration: '100',
            offset: 100

        })
            .setTween(tweenySkills)
            //.addIndicators()
            .addTo(controller);

        //////// portfolio animation \\\\\\\

        var controller = new ScrollMagic.Controller();
        const portScene = TweenMax.to($('#mobile-portfolio,#overlay-desktop'), 4, {opacity: 1, duration: 3});
        const headerScene3 = new ScrollMagic.Scene({
            triggerElement: '.port-head',
            triggerHook: 0.6,
            duration: '400',
            offset: 50
        })
            .setTween(portScene)
            // .addIndicators()
            .addTo(controller);


        ////// portfolio END animation \\\\\\\

        var controller = new ScrollMagic.Controller();


        const portEndScene = TweenMax.to($('#projects'), 4, {opacity: 0, duration: 3, y: -80});
        const aboutScene = new ScrollMagic.Scene({
            triggerElement: '.about-main',
            triggerHook: 0.8,
            duration: '200'
        })
            .setTween(portEndScene)
            // .addIndicators()
            .addTo(controller);


        ///////////////////--------------- javascript code for tablet ----------- \\\\\\\\\\\\\\\\\\\\\
    } else if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth > 543) {


/////////////////////// Scroll to click handlers \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

        let target_home = $('#home').offset().top,
            target_portfolio = $('#projects').offset().top,
            target_about = $('.number-email').offset().top;


        $("#home-link").click(function () {
            $("html, body").animate({scrollTop: target_home}, 1500);
        });
        $("#port-link").click(function () {
            $("html, body").animate({scrollTop: target_portfolio}, 1500);
        });

        $("#about-link").click(function () {
            $("html, body").animate({scrollTop: target_about}, 1500);
        });


        //////// name fade animation \\\\\\\


        var controller = new ScrollMagic.Controller();
        const header = $('#home-wrap');
        const abbas = TweenMax.to(header, 2, {opacity: 0, y: -75});

        const headerScene4 = new ScrollMagic.Scene({
            triggerElement: '.port-head',
            triggerHook: 0.7,
            duration: '300'
        })
            .setTween(abbas)
            //.addIndicators()
            .addTo(controller);


        //////// portfolio H1 size decrease \\\\\\\

        var controller = new ScrollMagic.Controller();
        const tweeny = new TimelineMax()
            .fromTo($('.port-head'), 4, {css: {fontSize: "5em"}}, {css: {fontSize: "3em"}}, 0)
            .to($('.port-head'), 4, {opacity: 0}, 0);
        const smallerScene = new ScrollMagic.Scene({
            triggerElement: '#mobile-portfolio',
            triggerHook: 0.6,
            duration: '260',
            offset: 50

        })
            .setTween(tweeny)
            //.addIndicators({ name: "jasem" })
            .addTo(controller);


        // // //////// SKILLS H1 size decrease \\\\\\\

        var controller = new ScrollMagic.Controller();
        const tweenySkills = new TimelineMax()
            .fromTo($('.port-head-2'), 4, {css: {fontSize: "5.5em"}}, {css: {fontSize: "3.5em"}}, 0)
            .to($('.skills-icons'), 4, {opacity: 1, duration: 3}, 0);


        const smallerScene2 = new ScrollMagic.Scene({
            triggerElement: '.about-main',
            triggerHook: 0.6,
            duration: '100',
            offset: 100

        })
            .setTween(tweenySkills)
            //.addIndicators()
            .addTo(controller);


        //////// portfolio animation \\\\\\\

        var controller = new ScrollMagic.Controller();
        const portScene = TweenMax.to($('#mobile-portfolio,#overlay-desktop'), 4, {opacity: 1, duration: 3});
        const headerScene5 = new ScrollMagic.Scene({
            triggerElement: '.port-head',
            triggerHook: 0.6,
            duration: '400',
            offset: 50
        })
            .setTween(portScene)
            //.addIndicators()
            .addTo(controller);

        ////// portfolio END animation \\\\\\\

        var controller = new ScrollMagic.Controller();
        const portEndScene = TweenMax.to($('#projects'), 4, {opacity: 0, duration: 3, y: -80});
        const aboutScene = new ScrollMagic.Scene({
            triggerElement: '.about-main',
            triggerHook: 0.7,
            duration: '200'
        })
            .setTween(portEndScene)
            // .addIndicators()
            .addTo(controller);

        /////////////////////// nav background white when needed \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0.1, duration: "450"}});
        const backWhite = TweenMax.to($('.navbar'), 4, {css: {background: '#fff'}});
        new ScrollMagic.Scene({triggerElement: "#about"})
            .setTween(backWhite)
            // .addIndicators()
            .addTo(controller);


    }
}