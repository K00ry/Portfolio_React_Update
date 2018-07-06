///////////////////--------------- Modules ----------- \\\\\\\\\\\\\\\\\\\\\

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import $ from 'jquery';
import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import main from './js/main';
import mobile from './js/mobile';
import desktop from './js/desktop';
import {skills} from './data';


ReactDOM.render(
    <App />,
    document.getElementById('portfolio')
);










main();
mobile();
desktop();
/////////////////////// intro animation \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// // let fadeIn =
//     TweenMax.staggerFrom('.main-meme', 2, { scale: 0.8, opacity: 0, delay: 1.5 });
// // let fadeInNav =
//     TweenMax.staggerFrom('.navbar', 2, { scale: 0.5, opacity: 0, delay: 1.5 });
//
//
//
//
//
// /////////////////////// scroll magics scroll spy feature \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//
// let controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: 0.1, duration: "150" } });
// new ScrollMagic.Scene({ triggerElement: "#home" })
//     .setClassToggle("#home-li", "active-me")
//     // .on("progress",function(){
//     //     $('#home-link').focus();
//     // })
//
//     ////////
//     //.addIndicators()
//     .addTo(controller);
// new ScrollMagic.Scene({ triggerElement: "#portfolio" })
//     .setClassToggle("#portfolio-li", "active-me")
//     // .on("enter leave",function(){
//     //     $('#port-link').focus();
//
//     // })
//     //.addIndicators()
//     .addTo(controller);
// new ScrollMagic.Scene({ triggerElement: "#about" })
//     .setClassToggle("#about-li", "active-me")
//     // .on("enter leave",function(){
//     //     $('#about-link').focus();
//     // })
//     //.addIndicators()
//     .addTo(controller);






///////////////// OVERLAY \\\\\\\\\\\\\\\\\\\\\\

//Overlay & portfolio Functionality
// let click_index;
//
//
// $('.work-mobile').click(function() {
//
//     $('#overlay').addClass('open');
//     click_index = $(this).index();
//     $('#title').html(data[click_index].name);
//     $('#over-img').attr("src", data[click_index].img);
//     $('#info-text').html(data[click_index].info);
//     $('#demo').attr("href", data[click_index].demo);
//
//     let tech_list = '';
//     $.each(data[click_index].tech, function(index, item) {
//         tech_list += '<li class="tech-title"><img src="' + data[click_index].tech[index] + '"></li>';
//
//     });
//     $('#techs').html(tech_list);
// });
//
// $('#overlay').click(function() {
//
//     $('#overlay').removeClass('open');
// });
//
//
// $('.work-desktop').click(function() {
//     // overlay_desktop.fadeOut("1000");
//
//
//     click_index = $(this).index();
//     projectSync(click_index);
//     // overlay_desktop.fadeIn("1000");
//
// });
//
// function projectSync(click_index) {
//     $('.title-ov').hide().html(data[click_index].name).fadeIn(1000);
//     $('.img-ov').hide().attr("src", data[click_index].img).fadeIn(1000);
//     $('.info-ov').hide().html(data[click_index].info).fadeIn(1000);
//     $('.demo-ov').hide().attr("href", data[click_index].demo).fadeIn(1000);
//     $('.git-ov').hide().attr("href", data[click_index].github).fadeIn(1000);
//
//     let tech_list = '';
//     $.each(data[click_index].tech, function(index, item) {
//         tech_list += '<li class="tech-title"><img src="' + data[click_index].tech[index] + '" alt="tech-logo"></li>';
//     });
//     $('.tech-ov').hide().html(tech_list).fadeIn(1000);
// }

