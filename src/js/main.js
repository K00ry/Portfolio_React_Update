import $ from 'jquery';
import { TweenMax, TimelineMax} from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';


import {skills} from '../data';

export default function main() {


    const skillContainer = $('.skills-icons');
    let skill_icon= " ";
    $.each(skills,(index,value) => {
        skill_icon +=`<img class="logo-skill" src="${value}" alt="skill-logo">`;
        skillContainer.html(skill_icon)
    });

    /////////////////////// intro animation \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    TweenMax.staggerFrom('.main-meme', 2, { scale: 0.8, opacity: 0, delay: 1.5 });
    TweenMax.staggerFrom('.navbar', 2, { scale: 0.5, opacity: 0, delay: 1.5 });





/////////////////////// scroll magics scroll spy feature \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    let controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: 0.1, duration: "150" } });
    new ScrollMagic.Scene({ triggerElement: "#home" })
        .setClassToggle("#home-li", "active-me")
        // .on("progress",function(){
        //     $('#home-link').focus();
        // })

        ////////
        //.addIndicators()
        .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#portfolio" })
        .setClassToggle("#portfolio-li", "active-me")
        // .on("enter leave",function(){
        //     $('#port-link').focus();

        // })
        //.addIndicators()
        .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#about" })
        .setClassToggle("#about-li", "active-me")
        // .on("enter leave",function(){
        //     $('#about-link').focus();
        // })
        //.addIndicators()
        .addTo(controller);


}
