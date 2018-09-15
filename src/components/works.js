import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Works extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let works = this.props.data.map((work, index) => {
      let jaber = ' ';
      if (index === 2) {
        jaber += 'active';
      }
      return (
        <li
          key={index}
          onClick={() => this.props.handleClick(index)}
          className="work-mobile work-desktop"
        >
          <a
            className={`img-border ${jaber}`}
            onClick={() => this.props.handleClick(index)}
          >
            <img src={work.src} alt={work.name} />
          </a>
          <span className="caption">{work.name}</span>
        </li>
      );
    });
    return <ul id="mobile-portfolio">{works}</ul>;
  }
}
Works.propTypes = {
  // data: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
