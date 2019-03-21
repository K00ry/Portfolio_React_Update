///////////////////--------------- Modules ----------- \\\\\\\\\\\\\\\\\\\\\

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TweenMax } from 'gsap';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import main from './js/main';
import mobile from './js/mobile';
import desktop from './js/desktop';

ReactDOM.render(<App />, document.getElementById('portfolio'));

main();
mobile();
desktop();
