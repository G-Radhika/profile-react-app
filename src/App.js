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
import SkillsForm from './SkillsForm'


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
     this.handleSkillsData = this.handleSkillsData.bind(this)
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

   handleSkillsData(new_skills) {
    let all_skills = []
    this.state.skills.forEach(function(skill) {
      all_skills.push(skill)
    })
    new_skills.forEach(function(skill) {
      all_skills.push(skill)
    })
    this.setState({skills:all_skills})
  }



  componentDidMount(){
		this.getUserData()
    this.getSkills()
    this.emitter.addListener('NewBioData', (bioData) => this.handleBioFormSubmit(bioData) )
    this.emitter.addListener('NewProjectsData', (projects) => this.handleProjecstData(projects) )
    this.emitter.addListener('NewSkillsData', (skills) => this.handleSkillsData(skills) )
	}

  render() {
    return (
      <div className="App">
        <div className="container-fluid" >
          <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">My Profile</a>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto justify-content-center">
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
                <SkillsForm buttonName="Skills" onFormSubmit={this.handleSkillsData}/>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Export</a>
              </li>
            </ul>
            </div>
            </nav>
          <Bio  emitter={this.emitter} bioData={this.state.bioData}/>
          <Skills emitter={this.emitter} skills={this.state.skills}/>
          <Projects emitter={this.emitter} projects={this.state.projects}/>
          
        </div>
      </div>
    );
  }
}

export default App;
