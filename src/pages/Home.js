import React, { Component } from 'react';

import Board from '../components/Board';
import Menu from '../components/Menu';
import Controls from '../components/Controls';
import Shapes from '../components/Shapes';
import Tools from '../components/Tools';
import SvgCode from '../components/SvgCode';




class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tools: "pointer",
        color: "#000000",
        fillColor: "#ffffff",
        opacity: 0.5,
        lineWidth: 1,
        svg: {
          width: 200,
          height: 200
        },
        shapes: {},
        board: {},
        svgCode: "",
        svgCodeShow: false
      }
      
    }



    update(obj) {
      this.setState(obj)
    }

    componentDidMount() {
// if the screen gets too small load the blank SVG board with 200x200px by default, otherwise 400x400px

      if (window.innerWidth < 500)  {
        this.setState({...this.state, svg: {width: 200, height: 200 }})
      } else {
        this.setState({...this.state, svg: {width: 400, height: 400 }})
      }
    }

    render() {
        return(
            <div className="container">
              <h2 className="logo">SeeVG</h2>
              <Menu {...this.state} update={this.update.bind(this)}/>
              <Tools {...this.state} update={this.update.bind(this)}/>
              <Board {...this.state} update={this.update.bind(this)}/>
              <Controls  {...this.state} update={this.update.bind(this)}/>
              <Shapes />
              <SvgCode {...this.state} update={this.update.bind(this)}/>
            </div>
        )
    }
}


export default Home;
