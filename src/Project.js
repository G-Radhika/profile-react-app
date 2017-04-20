import React, { Component } from 'react';
import './css/Project.css';
import ProjectForm from './ProjectForm'
import {Jumbotron} from 'react-bootstrap'
import {Image} from 'react-bootstrap'

class Project extends Component {

  constructor(props){
      super(props)
      this.state = {isBioFormOn: false};

      // This binding is necessary to make `this` work in the callback
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentWillUpdate() {
  }

  handleFormSubmit(projectData) {
    this.props.emitter.emit('NewProjectData', [projectData])
  }

  render() {
    const projectData = this.props.projectData
    return (
        <div className="card">
          <img className="card-img-top img-fluid" src={projectData.photo} alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">{projectData.name}</h4>
             <p className="card-text">{projectData.summary}</p>
            <ProjectForm buttonName="Edit" onFormSubmit={this.handleFormSubmit.bind(this)}/>
          </div>
        </div>
       
    );
  }
}

export default Project;
