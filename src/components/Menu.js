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

  render () {

    const {dropDownOpen} = this.state;


    return (
      <div className="menu">
        <div>
          <div onClick={ this.menuClick }>
            SeeVG
          </div>
            <div className={ dropDownOpen ? "dropDownOpen" : "dropDownClosed" }>
              <ul>
                <li onClick={this.clearBoard}>New</li>
                <li onClick={this.showSvg}>Show inline SVG code</li>
                <li>Import</li>
                <li>Save</li>
                <li>Save As</li>
              </ul>
            </div>

        </div>
      </div>
    )
  }
}

export default Menu
