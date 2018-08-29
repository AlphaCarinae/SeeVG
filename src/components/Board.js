import React, { Component} from 'react';
import Snap from 'snapsvg-cjs';

class Board extends Component {

  constructor() {
    super();
    this.state = {
      mouseIsDown: false,
      boardSize: {},
      items: { },
      points: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      }
    }

  }

  svgRender() {
    const { x1, y1, x2, y2} = this.state.points;
    const { tools, color, fillColor, lineWidth, opacity } =this.props;

    // console.log(x1, y1, x2, y2, this.state);
    let snap = Snap('#drawingBoard');
    // tools === "line" ? snap.line(x1, y1, x2, y2).attr({stroke: color}) : null
    //calculate width and height for rectangle
    let w = Math.abs(x2 - x1)
    let h = Math.abs(y2 - y1)

    switch(tools) {
      case "pointer" :

        break;
      case "line" :
        snap
          .line(x1, y1, x2, y2)
          .attr({stroke: color, fill: fillColor, strokeWidth: lineWidth, "fill-opacity": opacity})
          .click((e) => {console.log(e)})
        break;
      case "rectangle" :
      //set x and y to top left corner
        let x ,y ;
        (x2 > x1) ? x = x1 : x = x2;
        (y2 > y1) ? y = y1 : y = y2;
        snap
          .rect(x, y, w, h)
          .attr({stroke: color, fill: fillColor, strokeWidth: lineWidth, "fill-opacity": opacity})
          .click((e) => {console.log(e)})
        break;
      case "circle" :
        let r = Snap.len(x1,y1,x2,y2)
        snap
          .circle(x1,y1, r)
          .attr({stroke: color, fill: fillColor, strokeWidth: lineWidth, "fill-opacity": opacity})
          .click((e) => {console.log(e)})
        break;
      case "ellipse" :
        snap
          .ellipse(x1,y1, w, h)
          .attr({stroke: color, fill: fillColor, strokeWidth: lineWidth, "fill-opacity": opacity})
          .click((e) => {console.log(e)})
        break;
        default : console.log('no shape match found');
    }

  }

  componentDidMount() {
    //getting the height and width of the board div
    const {clientHeight, clientWidth} = this.refs.board

    this.setState({...this.state, boardSize: { height: clientHeight, width: clientWidth }});
  }
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
    const { height, width} = this.state.boardSize;
    return(
      <div className="board" ref="board">
        {/* <svg id="backBoard" height={height} width={width}> */}
          <svg
            x="100"
            y="100"
            id="drawingBoard"
            width={svg.width}
            height={svg.height}
            viewBox={"0 0 " + svg.width + " " + svg.height}
            onMouseDown={(event) => {
              this.setState({mouseIsDown: true})

              let points = this.state.points;
              points.x1 = event.nativeEvent.offsetX;
              points.y1 = event.nativeEvent.offsetY;
              this.setState({...this.state, points})

            }}
            onMouseUp={(event) => {
              this.setState({mouseIsDown: false})


              let points = this.state.points;
              points.x2 = event.nativeEvent.offsetX;
              points.y2 = event.nativeEvent.offsetY;
              this.setState({...this.state, points})
                this.svgRender();
            }}
            onDragEnter={(event) => {
              console.log("test event : ",event.nativeEvent);
            }}
          >

            <circle cx = "10" cy = "10" r="10" fill="red" />
            {}
          </svg>
        {/* </svg> */}
      </div>
    )
  }
}




export default Board
