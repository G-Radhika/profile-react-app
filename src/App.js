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
  }


  componentWillUpdate() {
    //alert('App: component will update')
  }

  componentDidMount(){

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
                <BioForm className="nav-link" buttonName="Bio"/>
              </li>
              <li className="nav-item">
                <ProjectForm buttonName="+Project"/>
              </li>
              <li className="nav-item">
                <GitHubProjects/>
              </li>
              <li className="nav-item">
                <SkillsForm buttonName="Skills"/>
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
