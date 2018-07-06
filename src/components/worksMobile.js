import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const WorksMobile = props => {


  let skills = props.works.tech.map((tech, index) => (
    <li key={index} className="tech-title">
      <img src={tech} alt="tech-logo" />
    </li>
  ));

  return (
    <Modal show={props.openOverlay} onHide={props.closeOverlay}>


        <Modal.Header closeButton/>

          <h1 id="title">{props.works.name}</h1>
          <div className="lay-img">
            <div className="img-and-caption">
              <img id="over-img" src={props.works.img} alt={props.works.name} />
              <p id="info-text">{props.works.info}</p>
            </div>
            <ul id="techs">{skills}</ul>
          </div>
          <div className="links">
            <a className="git-ov" href={props.works.github}>
              Github
            </a>
            <a className="demo-ov" href={props.works.demo}>
              DEMO
            </a>
          </div>


    </Modal>
  );
};

WorksMobile.propTypes = {
  works: PropTypes.object.isRequired,
};

export default WorksMobile;
