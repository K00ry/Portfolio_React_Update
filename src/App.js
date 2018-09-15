import React, { Component } from 'react';
import { worksDataMobile, worksData, data } from './data';
import MediaQuery from 'react-responsive';
import Works from './components/works';
import WorksDesktop from './components/worksDesktop';
import WorksMobile from './components/worksMobile';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      works: {
          name: 'Pars Jadval',
          img: 'src/img/work/responsive/6.png',
          info:
              'This React Built Project is the product showcase of a concrete precast company that i developed for mobile and tablet. Technologies used for this project include: React, React Router, React-Bootstrap, create-react-app, react-transition-group, i18next (for Localization).',
          tech: [
              'src/img/work/logos/react.png',
              'src/img/work/logos/html.png',
              'src/img/work/logos/es6.png',
              'src/img/work/logos/css.png',
              'src/img/work/logos/js.png',
              'src/img/work/logos/sass.svg',
              'src/img/work/logos/git.png',
          ],
          demo: 'http://www.parsjadval.kouroshmirzaei.com',
          github: 'https://github.com/K00ry/pars-react',
      },
      responsiveMobile: false,
      show: false,
    };
    this.getArray = this.getArray.bind(this);
    this.overlayClose = this.overlayClose.bind(this);
  }

  getArray(rightWork) {
    this.setState({
      works: data[rightWork],
      show: true,
    });
  }

  overlayClose() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div id="projects">
        <h1 className="port-head">Work</h1>
          <Works data={worksDataMobile} handleClick={this.getArray} />
        <MediaQuery query="(max-device-width: 767px)">

          <WorksMobile
            works={this.state.works}
            openOverlay={this.state.show}
            closeOverlay={this.overlayClose}
          />
        </MediaQuery>
        <MediaQuery query="(min-device-width: 768px)">
          <WorksDesktop works={this.state.works} />
        </MediaQuery>
      </div>
    );
  }
}
