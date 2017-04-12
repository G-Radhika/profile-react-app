import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './Bio'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bioData : {}
    }
  }

  getUserData() {
    this.setState({bioData: {
            name: 'Sridhar Uyyala', 
            location: '97124', 
            summary: 'Web developer',
            photo: './profile_pic.png'}})
  }

  componentDidMount(){
		this.getUserData();
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Bio bioData={this.state.bioData}/>
        </div>
      </div>
    );
  }
}

export default App;
