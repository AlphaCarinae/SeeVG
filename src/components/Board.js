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

  _handleDelKey(event) {
    console.log(event.key);
    if (event.key === "Backspace") {
      let selectedElements = Snap.selectAll('.selected')
      selectedElements.remove()
      console.log(selectedElements)
    }
  }

  componentDidMount() {
    //getting the height and width of the board div
    const {clientHeight, clientWidth} = this.refs.board

    this.setState({...this.state, boardSize: { height: clientHeight, width: clientWidth }});
    //bind delete key to delete selected items
    window.addEventListener("keydown", this._handleDelKey);
  }


  svgRender() {

    const { x1, y1, x2, y2} = this.state.points;
    const { mouseIsDown } = this.state;
    const { tools, color, fillColor, lineWidth, opacity } = this.props;

    //ignore random clicks on the same spot
    if (!(x1 === x2 && y1 === y2)) {
    // console.log(x1, y1, x2, y2, this.state);
    let snap = Snap('#drawingBoard');
    //calculate width and height for rectangle
    let w = Math.abs(x2 - x1)
    let h = Math.abs(y2 - y1)

    switch(tools) {
      case "pointer" :

        break;
      case "line" :
      //remove the last line drawn
        let oldLineInDrawing = snap.select('.drawingInMotion')
        if (oldLineInDrawing) { oldLineInDrawing.remove() }
      //draw new line at the new location
        let newLine = snap
                        .line(x1, y1, x2, y2)
                        .attr({stroke: color, fill: fillColor, strokeWidth: lineWidth, "fill-opacity": opacity})
                        // .click((event) => {tools === "pointer" ? event.target.toggleClass("selected") : null})
        if (mouseIsDown)  {
          newLine.addClass("drawingInMotion")
        } else {
             newLine.addClass("drawn")
             newLine.removeClass("drawingInMotion")
         }


        break;
      case "rectangle" :
      //remove the last rectangle drawn
        let oldRectInDrawing = snap.select('.drawingInMotion')
        if (oldRectInDrawing) {oldRectInDrawing.remove()}
      //set x and y to top left corner
        let x ,y ;
        (x2 > x1) ? x = x1 : x = x2;
        (y2 > y1) ? y = y1 : y = y2;
        let newRect = snap
                        .rect(x, y, w, h)
                        .attr({stroke: color, fill: fillColor, strokeWidth: lineWidth, "fill-opacity": opacity})
                        // .click(tools === "pointer" ? this.toggleClass : null)
        if (mouseIsDown)  {
          newRect.addClass("drawingInMotion")
        } else {
             newRect.addClass("drawn")
             newRect.removeClass("drawingInMotion")
         }
        break;
      case "circle" :
      //remove the last circle drawn
        let oldCircleInDrawing = snap.select('.drawingInMotion')
        if (oldCircleInDrawing) {oldCircleInDrawing.remove()}
        //calculate radius
        let r = Snap.len(x1,y1,x2,y2)
        let newCircle = snap
                        .circle(x1,y1, r)
                        .attr({stroke: color, fill: fillColor, strokeWidth: lineWidth, "fill-opacity": opacity})
                        // .click(() => {tools === "pointer" ? this.toggleClass("selected") : null})
        if (mouseIsDown)  {
          newCircle.addClass("drawingInMotion")
        } else {
             newCircle.addClass("drawn")
             newCircle.removeClass("drawingInMotion")
         }
        break;
      case "ellipse" :
      //remove the last circle drawn
        let oldEllipseInDrawing = snap.select('.drawingInMotion')
        if (oldEllipseInDrawing) {oldEllipseInDrawing.remove()}
        let newEllipse = snap
                        .ellipse(x1,y1, w, h)
                        .attr({stroke: color, fill: fillColor, strokeWidth: lineWidth, "fill-opacity": opacity})
                        // .click(tools === "pointer" ? this.toggleClass : null)
        if (mouseIsDown)  {
          newEllipse.addClass("drawingInMotion")
        } else {
             newEllipse.addClass("drawn")
             newEllipse.removeClass("drawingInMotion")
         }
        break;
        default : console.log('no shape match found');
    }
  }
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
    const { svg, tools }  = this.props;
    const { height, width} = this.state.boardSize;
    return(
      <div className="board" ref="board">
        {/* <svg id="backBoard" height={height} width={width}> */}
          <svg
            id="drawingBoard"
            width={width}
            height={height}
            viewBox={"0 0 " + width + " " + height}
            onClick={(event) => {
              if (tools === "pointer") {

                 if (event.target.id !== "drawingBoard")  {
                   console.log(event.target.classList);
                   event.target.classList.toggle("selected")

                 } else if (event.target.id === "drawingBoard") {
                   //unselect any other elements which are "selected" on the board
                     let selectedElements = Snap.selectAll('.selected')
                     console.log(selectedElements);
                     if (selectedElements)  {
                       selectedElements.forEach((element) => element.toggleClass("selected"))
                     } else {
                       console.log("no selected elements exist")
                     }
                     console.log("drawingBoard")
                 }

              }
            }}
            onMouseDown={(event) => {

              let points = this.state.points;
              points.x1 = event.nativeEvent.offsetX;
              points.y1 = event.nativeEvent.offsetY;

              this.setState({...this.state, points, mouseIsDown: true})

            }}
            onMouseUp={(event) => {
              this.setState({...this.state, mouseIsDown: false}, this.svgRender)

            }}
            onMouseMove={(event) => {
              if (this.state.mouseIsDown)  {
                let points = this.state.points;
                points.x2 = event.nativeEvent.offsetX;
                points.y2 = event.nativeEvent.offsetY;
                this.setState({...this.state, points}, this.svgRender)
              }
            }}

          >
            {/* All drawn shapes will go here */}
          </svg>
        {/* </svg> */}
      </div>
    )
  }
}




export default Board
