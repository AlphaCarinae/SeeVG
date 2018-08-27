import React, { Component } from 'react';

import pointer from '../img/pointinghand.svg';
import line from '../img/line.svg'
import rectangle from '../img/rectangle.svg'
import elipse from '../img/elipse.svg'

class Tools extends Component {

  render () {
    const imports = {
      pointer: pointer,
      line: line,
      rectangle: rectangle,
      elipse: elipse
    }
    const toolset = Object.keys(imports);

    return (
        <div className="tools">
          {
            toolset.map( (tool) => {
          return(
            <button onClick={(event) => this.props.update({tools: tool})}>
              <img src={imports[tool]} alt="shape tool selector" key={imports[tool]}/>
            </button>
          )})
          }
        </div>

// the code above generates items based on all the tools below
      //
      // <div className="tools">
      //   <button onClick={(event) => this.props.update({tools: "pointer"})}>
      //     <img src={pointer} alt="shape tool selector"/>
      //   </button>
      //   <button onClick={(event) => this.props.update({tools: "line"})}>
      //       <img src={line} alt="shape tool selector"/>
      //   </button>
      //   <button onClick={(event) => this.props.update({tools: "rectangle"})}>
      //       <img src={rectangle} alt="shape tool selector"/>
      //   </button>
      //   <button onClick={(event) => this.props.update({tools: "elipse"})}>
      //       <img src={elipse} alt="shape tool selector"/>
      //   </button>
      // </div>
    )
  }
}


export default Tools;
