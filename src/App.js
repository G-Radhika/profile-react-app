import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
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
      skillsData : [],
      projectsData: [],
    }
    this.emitter = new EventEmitter()
  }


  handleBioFormSubmit(bioData2){
		  this.setState({bioData: bioData2})
	}

  componentWillUpdate() {
    //alert('App: component will update')
  }

  handleProjectsData(new_projects) {
    let all_projects = []
    this.state.projectsData.forEach(function(project) {
      all_projects.push(project)
    })
    new_projects.forEach(function(project) {
      project.photo = "photo_default.png"
      all_projects.push(project)
    })
    this.setState({projectData:all_projects})
  }

   handleSkillsData(new_skills) {
    let all_skills = []
    this.state.skillsData.forEach(function(skill) {
      all_skills.push(skill)
    })
    new_skills.forEach(function(skill) {
      all_skills.push(skill)
    })
    this.setState({skillsData:all_skills})
  }



  componentDidMount(){
    this.emitter.addListener('NewBioData', (bioData) => this.handleBioFormSubmit(bioData) )
    this.emitter.addListener('NewProjectsData', (projects) => this.handleProjecstData(projects) )
    this.emitter.addListener('NewSkillsData', (skillsData) => this.handleSkillsData(skillsData) )
	}

  render() {
    return (
      <div className="App">
        <div className="container" >
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
                <ProjectForm buttonName="+Project" onFormSubmit={this.handleProjectsData.bind(this)}/>
              </li>
              <li className="nav-item">
                <GitHubProjects onFormSubmit={this.handleProjectsData}/>
              </li>
              <li className="nav-item">
                <SkillsForm buttonName="Skills" onFormSubmit={this.handleSkillsData.bind(this)}/>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Export</a>
              </li>
            </ul>
            </div>
            </nav>
            </div>
          <Bio/>
          <Skills/>
          <Projects/>
        
         <div className="container">
         <footer className="footer">
          <p>&copy; Company 2017</p>
        </footer>
        </div>

        
      </div>
    );
  }
}

export default App;
