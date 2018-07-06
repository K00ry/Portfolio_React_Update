import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Works extends Component {
    constructor() {
        super();
        this.state = {

        };
        // this.getArray = this.getArray.bind(this);
    }






  render() {
    let works = this.props.data.map((work, index) => {
      return (
        <li
          key={index}
          onClick={() => this.props.handleClick(index)}
          className="work-mobile work-desktop"
        >
          <div className="img-border">
            <img src={work.src} alt={work.name} />
          </div>
          <h3 className="caption">{work.name}</h3>
        </li>
      );

    });
    return <ul id="mobile-portfolio">{works}</ul>;
  }
}
Works.propTypes = {
  data: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

// export default Works;
