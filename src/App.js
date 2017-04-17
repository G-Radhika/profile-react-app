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
            summary: 'Regardless of which you choose to include on your resume, this section should\
Be focused on helping an employer meet his or her goals (this means you will want to write a slightly different objective or summary statement for each job you are trying to get)\
Start with the most important idea about yourself that you want to tell a hiring manager\
Be brief but concise (a few bullet points of your best skills and achievements, or a sentence or two that really tells a potential employer what you have to offer if he keeps reading)\
Position you as the best model of whatever position, role, or industry you are trying to enter; this means you should research the position before you write your resume for it\
Include keywords—that is, words that every person in the field or position you are trying to get will know; CareerBuilder suggests using some general keywords, too, but these are less critical in a summary statement than in the body of your resume',
            photo: 'photo_default.png'}})
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
      project.photo = "photo_default.png"
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
