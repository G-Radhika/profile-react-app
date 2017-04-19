import React, { Component } from 'react';
import './Project.css';
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
      <div className="container-fluid">
      <div className="card-group row">
        <div className="card col-md-3">
          <img className="card-img-top" src={projectData.photo} alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">{projectData.name}</h4>
            <ProjectForm buttonName="Edit" onFormSubmit={this.handleFormSubmit.bind(this)}/>
          </div>
        </div>
         <div className="card col-md-9">
          <div className="card-block">
            <h4 className="card-title">Summary</h4>
            <p className="card-text">{projectData.summary}</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Project;
