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
          addProject: false
      };
      this.handleAddProject = this.handleAddProject.bind(this)
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleAddProject() {
      this.setState({addProject: true})
  }

  handleFormSubmit(projects) {
       this.props.emitter.emit('NewProjectsData', projects)
  }

  componentWillUpdate() {
  }

  render(){
		return(
			<div className="Projects">
               
			 	<ul className="Projects-List">
			 		{
			 			this.props.projects.map(project => {
			 				return ( 
                                    <Project key={project.name} projectData={project}/>
                                 )
			 			})
			 		}
			 	</ul>
            
			</div>
		)
	}
}

export default Projects;
