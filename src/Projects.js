import React, { Component } from 'react';
import './css/Project.css';
import Project from './Project'
import { connect } from 'react-redux';

class Projects extends Component {

  constructor(props){
      super(props)
  }


  componentWillUpdate() {
  }

  render(){
		return(
      <div className="container">
			  <div className="card-deck">
			 		{
			 			this.props.projectsData.map(project => {
			 				return ( <Project key={project.name} projectData={project}/>)
			 			})
			 		}
            
			  </div>
      </div>
		)
	}
}



function mapStateToProps(state) {
  return {
    projectsData: state.ProjectsReducer
  };
}

export default connect(mapStateToProps)(Projects)

