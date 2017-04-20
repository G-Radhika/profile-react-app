import React, { Component } from 'react';
import './css/Project.css';
import ProjectForm from './ProjectForm'
import {Jumbotron, Button, ButtonToolbar} from 'react-bootstrap'
import Project from './Project'
import GitHubProjects from './github/GithubProjects.js'
import { connect } from 'react-redux';

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
            <div className="container">
			<div className="card-deck">
			 		{
			 			this.props.projects.map(project => {
			 				return ( 
                                    <Project key={project.name} projectData={project}/>
                                 )
			 			})
			 		}
            
			</div>
            </div>
		)
	}
}



function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps(Projects));

