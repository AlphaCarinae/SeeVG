import React, { Component} from 'react'

class Board extends Component {

  render() {
    // console.log(this.props);
    const { svg }  = this.props;
    return(
      <div className="board">
        <svg width={svg.width} height={svg.height} >
          <circle cx = "10" cy = "10" r="10" fill="red" />
        </svg>
      </div>
    )
  }
}




export default Board
