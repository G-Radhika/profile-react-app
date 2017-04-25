import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import BioConatiner from './BioContainer'
import SkillsContainer from './SkillsContainer'
import ProjectsContainer from './ProjectsContainer'



class App extends Component {
  constructor(props) {
    super(props)
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
            </div>
          </nav>
        </div>
        <BioConatiner/>
        <SkillsContainer/>
        <ProjectsContainer/>
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
