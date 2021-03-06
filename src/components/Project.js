import React, { Component } from 'react';
import '../css/Project.css';
import ProjectForm from './ProjectForm'

class Project extends Component {

  constructor(props){
      super(props)
  }

  render() {
    const projectData = this.props.projectData
    return (
      <div className="card card-margin">
        <img className="card-img-top img-thumbnail" src={projectData.photo} alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title">{projectData.name}</h4>
          <p className="card-text">{projectData.summary}</p>
           <a href={projectData.ref} rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-sm">Learn More</a>
          <ProjectForm modalKey={projectData.name} buttonName="Edit" {...this.props} />
        </div>
      </div>
       
    );
  }
}


export default  Project;
