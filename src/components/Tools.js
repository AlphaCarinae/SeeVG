import React, { Component } from 'react';

import pointer from '../img/pointinghand.svg';
import line from '../img/line.svg'
import rectangle from '../img/rectangle.svg'
import elipse from '../img/elipse.svg'
import circle from '../img/elipse.svg'
import move from '../img/move.svg'

class Tools extends Component {

  render () {
    const imports = {
      pointer: pointer,
      line: line,
      circle: circle,
      rectangle: rectangle,
      elipse: elipse,
      move: move
    }
    const toolset = Object.keys(imports);

    return (
        <div className="tools">
          {
            toolset.map( (tool) => {
          return(
            <button onClick={(event) => this.props.update({tools: tool})} key={tool}>
              <img src={imports[tool]} alt="shape tool selector" key={tool}/>
            </button>
          )})
          }
          <br></br>
          <input type="color" onChange={(event) => this.props.update({color: event.target.value})}></input>
          <input type="color" onChange={(event) => this.props.update({fillColor: event.target.value})}></input>
          <br></br>

          <label>Opacity:</label>
          <input type="opacity" onChange={(event) => this.props.update({opacity: event.target.value})}></input>
          <br></br>

          <label>Line width:</label>
          <input type="number" onChange={(event) => this.props.update({lineWidth: event.target.value})}></input>

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
