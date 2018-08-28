import React, { Component} from 'react';
import Snap from 'snapsvg-cjs';

class Board extends Component {

  constructor() {
    super();
    this.state = {
      items: { },
      pointsInProgress: {
        startX: 0,
        startY: 0,
        stopX: 0,
        stopY:0
      }
    }

  }

  svgRender() {
    const { startX, startY, stopX, stopY} = this.state.pointsInProgress;
    console.log(startX, startY, stopX, stopY, this.state);
    let snap = Snap('#drawingBoard');
    snap.line(startX, startY, stopX, stopY).attr({stroke: "#000"})
    console.log(snap.toJSON());
    console.log(snap.innerSVG());

  }

  // componentDidMount() {
  //   this.svgRender();
  // }
  //
  // componentDidUpdate() {
  //   this.svgRender();
  // }

  // createItem(){
  //   console.log('created', this.props.tools);
  //   this.props.tools === "rectangle" ?
  // }

  render() {
    // console.log(this.props);
    const { svg, board, tools }  = this.props;
    return(
      <div className="board">

        <svg
          id="drawingBoard"
          width={svg.width}
          height={svg.height}
          viewBox={"0 0 " + svg.width + " " + svg.height}
          onMouseDown={(event) => {
            let pointsInProgress = this.state.pointsInProgress;
            pointsInProgress.startX = event.nativeEvent.offsetX;
            pointsInProgress.startY = event.nativeEvent.offsetY;
            this.setState({...this.state, pointsInProgress})

          }}
          onMouseUp={(event) => {
            let pointsInProgress = this.state.pointsInProgress;
            pointsInProgress.stopX = event.nativeEvent.offsetX;
            pointsInProgress.stopY = event.nativeEvent.offsetY;
            this.setState({...this.state, pointsInProgress})
              this.svgRender();
          }}
          onDrag={(event) => {
            console.log("dragging");
          }}
        >

          <circle cx = "10" cy = "10" r="10" fill="red" />
          {}
        </svg>

      </div>
    )
  }
}




export default Board
