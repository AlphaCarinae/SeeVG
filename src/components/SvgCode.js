import React, { Component } from 'react';


class SvgCode extends Component {

  render() {
    let svgClass;
    this.props.svgCodeShow ? (svgClass = 'svgResult svgResultShow') : svgClass = 'svgResult'
    return(
      <div className={svgClass}>
        <p>{this.props.svgCode}</p>
        <button onClick={(event) => { this.props.update({svgCodeShow: false})}}>Close</button>
      </div>
    )
  }
}


export default SvgCode;
