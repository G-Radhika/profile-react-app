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
      <div className="Project">
        <Jumbotron>
        <div className="Project-Menu">
          <ProjectForm onFormSubmit={this.handleFormSubmit.bind(this)}/>
        </div>
        <div className="Project-Data">
          <div>
            <Image src={projectData.photo} responsive alt="242x200" />
          </div>
          <div>
            <div className="Project-Name"><h4>{projectData.name}</h4></div>
            <div className="Project-Summary"><h4>{projectData.summary}</h4></div>
          </div>
        </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Project;
