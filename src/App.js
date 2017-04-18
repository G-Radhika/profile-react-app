import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './Bio'
import BioForm from './BioForm'
import Skills from './Skills'
import {EventEmitter} from 'events';
import Projects from './Projects'
import ProjectForm from './ProjectForm'
import GitHubProjects from './github/GithubProjects'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bioData : {},
      skills : [],
      projects: [],
    }
    this.emitter = new EventEmitter()
    this.handleProjectsData = this.handleProjectsData.bind(this)
  }

  

  getUserData() {
    this.setState({bioData: {
            name: '', 
            location: '', 
            summary: '',
            photo: 'photo_default.png'}})
  }

  getSkills() {
    this.setState({skills: []})
  }

  handleBioFormSubmit(bioData2){
		  this.setState({bioData: bioData2})
	}

  componentWillUpdate() {
    //alert('App: component will update')
  }

  handleProjectsData(new_projects) {
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
        <div className="container-fluid">
          <div className="card">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <BioForm className="nav-link" buttonName="Bio" onFormSubmit={this.handleBioFormSubmit.bind(this)}/>
              </li>
              <li className="nav-item">
                <ProjectForm buttonName="+Project" onFormSubmit={this.handleProjectsData}/>
              </li>
              <li className="nav-item">
                <GitHubProjects onFormSubmit={this.handleProjectsData}/>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Export</a>
              </li>
            </ul>
          </div>
          <Bio  emitter={this.emitter} bioData={this.state.bioData}/>
          <Skills emitter={this.emitter} skills={this.state.skills}/>
          <Projects emitter={this.emitter} projects={this.state.projects}/>
          
        </div>
      </div>
    );
  }
}

export default App;
