import React, { Component } from 'react';
import './Project.css';
import ProjectForm from './ProjectForm'
import {Jumbotron, Button, ButtonToolbar} from 'react-bootstrap'
import Project from './Project'
import GitHubProjects from './github/GithubProjects.js'

class Projects extends Component {

  constructor(props){
      super(props)
      this.state = {
      };
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }


  handleFormSubmit(projects) {
       this.props.emitter.emit('NewProjectsData', projects)
  }

  componentWillUpdate() {
  }

  render(){
		return(
			<div className="card-deck">
			 		{
			 			this.props.projects.map(project => {
			 				return ( 
                                    <Project key={project.name} projectData={project}/>
                                 )
			 			})
			 		}
            
			</div>
		)
	}
}

export default Projects;
