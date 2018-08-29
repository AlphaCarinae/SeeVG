import React, { Component } from 'react';

import Board from '../components/Board';
import Menu from '../components/Menu';
import Controls from '../components/Controls';
import Shapes from '../components/Shapes';
import Tools from '../components/Tools';




class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tools: "pointer",
        color: "#000",
        fillColor: "#fff",
        opacity: 1,
        lineWidth: 1,
        svg: {
          width: 400,
          height: 400
        },
        shapes: {},
        board: {}
      }
    }

    updateSVG(svgValues){
       this.setState(...this.state, svgValues)
    }

    updateTool(toolValues){
       this.setState(...this.state, toolValues)
    }

    updateBoard(boardItems) {
      console.log(boardItems);
      // this.setState(...this.state, boardItems )
    }


    render() {
        return(
            <div className="container">
              <Menu />
              <Tools {...this.state} update={this.updateTool.bind(this)}/>
              <Board {...this.state} update={this.updateBoard.bind(this)}/>
              <Controls {...this.state} update={this.updateSVG.bind(this)} />
              <Shapes />
            </div>
        )
    }
}


export default Home;
