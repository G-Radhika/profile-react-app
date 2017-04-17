import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './Bio'
import Skills from './Skills'
import {EventEmitter} from 'events';
import {Jumbotron} from 'react-bootstrap'
import Projects from './Projects'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bioData : {},
      skills : [],
      projects: [],
    }
    this.emitter = new EventEmitter()
    this.handleProjecstData = this.handleProjecstData.bind(this)
  }

  

  getUserData() {
    this.setState({bioData: {
            name: 'Sridhar Uyyala', 
            location: '97124', 
            summary: 'Web developer',
            photo: './photo_default.png'}})
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

  handleProjecstData(new_projects) {
    let all_projects = []
    this.state.projects.forEach(function(project) {
      all_projects.push(project)
    })
    new_projects.forEach(function(project) {
      all_projects.push(project)
    })
    this.setState({projects:all_projects})
  }


  componentDidMount(){
		this.getUserData()
    this.getSkills()
    this.emitter.addListener('NewBioData', (bioData) => this.handleBioFormSubmit(bioData) )
    this.emitter.addListener('NewProjectsData', (projects) => this.handleProjecstData(projects) )
    this.emitter.addListener('NewSkillsData', (skills) => this.setState({skills: skills}) )
	}

  render() {
    return (
      <div className="App">
        <div className="App-Container">
          <Bio  emitter={this.emitter} bioData={this.state.bioData}/>
          <Skills emitter={this.emitter} skills={this.state.skills}/>
          <Projects emitter={this.emitter} projects={this.state.projects}/>
        </div>
      </div>
    );
  }
}

export default App;
