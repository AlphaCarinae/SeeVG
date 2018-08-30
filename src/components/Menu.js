import React, { Component } from 'react'
import Snap from 'snapsvg-cjs'


class Menu extends Component {
  constructor() {
    super();
    this.state = {
      dropDownOpen: false
    }
    this.menuClick = this.menuClick.bind(this)
    this.clearBoard = this.clearBoard.bind(this)
    this.showSvg = this.showSvg.bind(this)
    this._downloadSvgFile = this._downloadSvgFile.bind(this)
  }

  clearBoard() {
    let allElements = Snap.selectAll(".drawn")
    allElements.remove();
    this.setState({dropDownOpen: false})
  }

  showSvg() {
    let snap = Snap('#drawingBoard')
    let svgCode = snap.outerSVG()
    this.props.update({svgCode: svgCode, svgCodeShow: true}, this.setState({dropDownOpen: false}))
  }

  menuClick(e) {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen
    })
  }

  _downloadSvgFile = () => {
    console.log(this.props.svg);
    const {width, height} = this.props.svg
    var element = document.createElement("a");
    let snap = Snap('#drawingBoard')
    let svgCode = snap.innerSVG()
    svgCode = '<svg width="' + width +'" height="' + height + '" xmlns="http://www.w3.org/2000/svg">' + svgCode + "</svg>"
    console.log(svgCode);
    let svgFile = [svgCode]
    var file = new Blob(svgFile, {type: 'text/plain'});

    element.href = URL.createObjectURL(file);
    element.download = "myImage.svg";
    element.click();
  }

  render () {

    const {dropDownOpen} = this.state;


    return (
      <div className="menu">
        <div>
          <div onClick={ this.menuClick }>
            Menu
          </div>
            <div className={ dropDownOpen ? "dropDownOpen" : "dropDownClosed" }>

                <li onClick={this.clearBoard}>New</li>
                <li onClick={this.showSvg}>Show inline SVG code</li>
                <li  onClick={this._downloadSvgFile}>Save svg file ...</li>
              
            </div>

        </div>
      </div>
    )
  }
}

export default Menu
