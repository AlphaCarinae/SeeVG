import React, { Component } from 'react'

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      dropDownOpen: false
    }
    this.menuClick = this.menuClick.bind(this)
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
                <li>New</li>
                <li>Open</li>
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
