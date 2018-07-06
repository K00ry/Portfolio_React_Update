import React from 'react';
import PropTypes from 'prop-types';
import Skills from './skills';

const WorksDesktop = props => {
  return (
    <div id="overlay-desktop">
      <div className="img-holder">
        <img
          className="img-ov img-fluid"
          src={props.works.img}
          alt="responsive devices picture on larger devices"
        />
      </div>
      <div className="title-tech-ov">
        <h1 className="title-ov">{props.works.name}</h1>
        <Skills works={props.works}/>
      </div>
      <p className="info-ov">
          {props.works.info}
      </p>
      <div className="links">
        <a className="git-ov" href={props.works.github} >Github</a>
        <a
          className="demo-ov"
          href={props.works.demo}
        >
          DEMO
        </a>
      </div>
    </div>
  );
};

Skills.propTypes = {
    works: PropTypes.object.isRequired
};



export default WorksDesktop;
