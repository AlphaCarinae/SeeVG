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
        tools: "",
        svg: {
          width: 400,
          height: 400
        },
        shape: {}
      }
    }

    updateSVG(svgValues){
       this.setState(...this.state, svgValues)
    }

    updateTool(toolValues){
       this.setState(...this.state, toolValues)
    }


    render() {
        return(
            <div className="container">
              <Menu />
              <Tools {...this.state} update={this.updateTool.bind(this)}/>
              <Board {...this.state} />
              <Controls {...this.state} update={this.updateSVG.bind(this)} />
              <Shapes />
            </div>
        )
    }
}


export default Home;
