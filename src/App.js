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
        name: 'React Web API',
        img: 'src/img/work/responsive/1.png',
        info:
          "In This Project, using Axios library, i used two Public API's(Lastfm/Flickr) to search for the artist and form a Gallery from the result, user then can choose an album and get info like bio and genres of chosen Artist. as bonus, User gets latest pictures related to the chosen Artist from Flickr.",
        tech: [
          'src/img/work/logos/html.png',
          'src/img/work/logos/css.png',
          'src/img/work/logos/js.png',
          'src/img/work/logos/sass.svg',
          'src/img/work/logos/react.png',
          'src/img/work/logos/git.svg',
        ],
        demo: 'https://k00ry.github.io/react-web-api/',
        github: 'https://github.com/K00ry/react-web-api',
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
        <MediaQuery query="(max-device-width: 767px)">
          <Works data={worksDataMobile} handleClick={this.getArray} />

          <WorksMobile
            works={this.state.works}
            openOverlay={this.state.show}
            closeOverlay={this.overlayClose}
          />
        </MediaQuery>

        <MediaQuery query="(min-device-width: 768px)">
          <Works data={worksData} handleClick={this.getArray} />
          <WorksDesktop works={this.state.works} />
        </MediaQuery>
      </div>
    );
  }
}
