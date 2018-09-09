import React, { Component } from 'react';


class Controls extends Component {

  generateSizes() {
      //define the acceptable svg dimesions to be selected in Controls sextion
  let maxSize = window.innerWidth;
  const sizes = [];
  let x=100;
  while (x < maxSize) {
    sizes.push(x);
    x += 100;
  }
  return sizes
  }

  render () {
    const { svg }  = this.props;
    
    const sizes = this.generateSizes()
    
    return (
      <div className="controls">
        <fieldset>
          <legend>SVG size</legend>
        <form>
          <label>
            svg height
            <select onChange={(event) => this.props.update({svg: {height: event.target.value, width: svg.width}})} value={svg.height}>
              {
                sizes.map( (size) => {
                  return(
                    <option value={size} key={size} >{size} </option>
                  )
                })
              }
            </select>
          </label>

          <br></br>

          <label>
            svg width 
            <select onChange={(event) => this.props.update({svg: {height: svg.height, width: event.target.value}})} value={svg.width}>
              {
                sizes.map( (size) => {
                  return(
                    <option value={size} key={size} >{size}</option>
                  )
                })
              }
            </select>
          </label>

        </form>
        </fieldset>
      </div>
    )
  }
}


export default Controls;
