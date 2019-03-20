import React, { Component } from 'react';
import Search from './component/Search';
import ResultList from './component/ResultList';
import SideList from './component/SideList';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      results:{}
    }
  }

  updatestate(newplace){
    this.setState({
      results:newplace
    })
    
  }
  render() {
    return (
    <div className = "container">
    <div className ="row">
        <div className = "col-md-8">
          <Search callUpdate = {this.updatestate.bind(this)}/>
          <ResultList resultPlace={this.state.results}/>
        </div>

        <div className = "col-md-4">
            <SideList/>
        </div>
    </div>
      
      
    </div>
      
    );
  }
}

export default App;
