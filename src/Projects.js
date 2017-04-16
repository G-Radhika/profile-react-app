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
                <div className="Projects-Menu">
                    <div className="row">
                        <div className="col-md-1">
                            <GitHubProjects onSubmit={this.handleFormSubmit}/>
                        </div>
                        <div className="col-md-1">
                            <ProjectForm onSubmit={this.handleFormSubmit}/>
                        </div>
                    </div>
                </div>
			 	<ul className="Projects-List">
			 		{
			 			this.props.projects.map(project => {
			 				return  <Jumbotron><Project projectData={project}/></Jumbotron>
			 			})
			 		}
			 	</ul>
            
			</div>
		)
	}
}

export default Projects;
