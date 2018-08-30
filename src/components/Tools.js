import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';

import pointer from '../img/pointinghand.svg';
import line from '../img/line.svg'
import rectangle from '../img/rectangle.svg'
import ellipse from '../img/ellipse.svg'
import circle from '../img/ellipse.svg'
import move from '../img/move.svg'

class Tools extends Component {

  updateState = function(obj) {
    this.props.update(obj)
    let selectedElements = Snap.selectAll('.selected')
    if (selectedElements !== null)  {
      console.log(selectedElements);
      let objKey = Object.keys(obj)[0]
      switch (objKey) {
        case "color":
        selectedElements.attr({stroke: obj[objKey]})
          break;
        case "fillColor":
        selectedElements.attr({fill: obj[objKey]})
          break;
        case "opacity":
        selectedElements.attr({"fill-opacity": obj[objKey]})
          break;
        case "lineWidth":
        selectedElements.attr({strokeWidth: obj[objKey]})
          break;
        default:

      }
    }

  }

  render () {
    const imports = {
      pointer: pointer,
      line: line,
      circle: circle,
      rectangle: rectangle,
      ellipse: ellipse,
    }
    const toolset = Object.keys(imports);
    const { color, fillColor, opacity, lineWidth } = this.props;
    return (
        <div className="tools">
          <fieldset>
          {
            toolset.map( (tool) => {
          return(
            <button onClick={(event) => this.props.update({tools: tool})} key={tool}>
              <img src={imports[tool]} alt="shape tool selector" key={tool}/>
            </button>
          )})
          }
          </fieldset>

          <fieldset>
            <input type="color" value={color} onChange={(event) => this.updateState({color: event.target.value})}></input>
            <input type="color" value={fillColor} onChange={(event) => this.updateState({fillColor: event.target.value})}></input>
          </fieldset>

          <fieldset>
            <label>Opacity: {opacity}
              <input type="range" min="0" max="1" step="0.1" value={opacity} onChange={(event) => this.updateState({opacity: event.target.value})}></input>
            </label>
            <br></br>

            <label>Line width: {lineWidth}
              <input type="range" min="1" max="40" step="1" value={lineWidth} onChange={(event) => this.updateState({lineWidth: event.target.value})}></input>
            </label>
          </fieldset>
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
      //   <button onClick={(event) => this.props.update({tools: "ellipse"})}>
      //       <img src={ellipse} alt="shape tool selector"/>
      //   </button>
      // </div>
    )
  }
}


export default Tools;
