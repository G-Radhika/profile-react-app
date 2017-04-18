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
      <Jumbotron>
          <div className="container">
              <div className="Project-Menu pull-right">
                <ProjectForm onFormSubmit={this.handleFormSubmit.bind(this)}/>
              </div>
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading">{projectData.name} <span className="text-muted">{projectData.name}</span></h2>
                  <p className="lead"> {projectData.summary}</p>
                </div>
                <div className="col-md-5">
                  <img src={projectData.photo} alt="photo_default.png" className="featurette-image img-thumbnail img-responsive center-block" style={{width:"90%"}}/>
                </div>
              </div>
          </div>
        </Jumbotron>
    );
  }
}

export default Project;
