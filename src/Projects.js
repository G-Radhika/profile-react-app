import React, { Component } from 'react';
import './css/Project.css';
import Project from './Project'
import { connect } from 'react-redux';

class Projects extends Component {

  constructor(props){
      super(props)
  }

  render(){
		return(
      <div className="container">
			  <div className="card-deck">
			 		{
			 			this.props.projectsData.map(project => {
			 				return ( <Project key={project.name} onFormSubmit={this.props.onFormSubmit} projectData={project}/>)
			 			})
			 		}
            
			  </div>
      </div>
		)
	}
}

export default Projects

