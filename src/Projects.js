import React, { Component } from 'react';
import './css/Project.css';
import Project from './Project'
import { connect } from 'react-redux';

class Projects extends Component {

  constructor(props){
      super(props)
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
			 			this.props.projectsData.map(project => {
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
    projectsData: state.projectsData
  };
}

export default connect(mapStateToProps)(Projects)

