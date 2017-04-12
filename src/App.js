import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './Bio'
import Skills from './Skills'
import {EventEmitter} from 'events';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bioData : {},
      skills : [],
    }
    this.emitter = new EventEmitter()
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

  handleBioFormSubmit(bioData2){
		  this.setState({bioData: bioData2})
	}

  componentWillUpdate() {
    //alert('App: component will update')
  }


  componentDidMount(){
		this.getUserData()
    this.getSkills()
    this.emitter.addListener('NewBioData', (bioData) => this.handleBioFormSubmit(bioData) )
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Bio  emitter={this.emitter} bioData={this.state.bioData}/>
        </div>
        <div className="App-header">
          <Skills skills={this.state.skills}/>
        </div>
      </div>
    );
  }
}

export default App;
