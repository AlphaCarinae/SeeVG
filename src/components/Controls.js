import React, { Component } from 'react';


class Controls extends Component {

  render () {
    const { svg }  = this.props;
    const sizes = [100, 200, 300, 400, 500, 600, 700, 800]
    return (
      <div className="controls">
        <h4>Controls </h4>
        <form>
          <label>
            svg height :
            <select onChange={(event) => this.props.update({svg: {height: event.target.value, width: svg.width}})}>
              {
                sizes.map( (size) => {
                  return(
                    <option value={size} key={size} selected={ size === svg.height ? "selected" : ''}>{size} </option>
                  )
                })
              }
            </select>
          </label>

          <br></br>

          <label>
            svg width :
            <select onChange={(event) => this.props.update({svg: {height: svg.height, width: event.target.value}})}>
              {
                sizes.map( (size) => {
                  return(
                    <option value={size} key={size} selected={ size === svg.width ? "selected" : ''}>{size}</option>
                  )
                })
              }
            </select>
          </label>

        </form>
      </div>
    )
  }
}


export default Controls;
