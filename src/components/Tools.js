import React, { Component } from 'react';

import pointer from '../img/pointinghand.svg';
import line from '../img/line.svg'
import rectangle from '../img/rectangle.svg'
import elipse from '../img/elipse.svg'

class Tools extends Component {
  toolset = ["pointer","line", "rectangle", "elipse"]
  render () {
    return (
      <div className="tools">
        <button onClick={(event) => this.props.update({tools: "pointer"})}>
          <img src={pointer} alt="shape tool selector"/>
        </button>
        <button onClick={(event) => this.props.update({tools: "line"})}>
            <img src={line} alt="shape tool selector"/>
        </button>
        <button onClick={(event) => this.props.update({tools: "rectangle"})}>
            <img src={rectangle} alt="shape tool selector"/>
        </button>
        <button onClick={(event) => this.props.update({tools: "elipse"})}>
            <img src={elipse} alt="shape tool selector"/>
        </button>
      </div>
    )
  }
}


export default Tools;
