import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './Bio'
import Skills from './Skills'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bioData : {},
      skills : []
    }
  }

  getUserData() {
    this.setState({bioData: {
            name: 'Sridhar Uyyala', 
            location: '97124', 
            summary: 'Web developer',
            photo: './profile_pic.png'}})
  }

  getSkills() {
    this.setState({skills: ['javascript', 'css', 'html', 'react']})
  }


  componentDidMount(){
		this.getUserData()
    this.getSkills()
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Bio bioData={this.state.bioData}/>
        </div>
        <div className="App-header">
          <Skills skills={this.state.skills}/>
        </div>
      </div>
    );
  }
}

export default App;
