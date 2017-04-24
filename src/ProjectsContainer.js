import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ProjectsReducer } from './actions'
import Projects from './Projects'
import ProjectForm from './ProjectForm'
import GitHubProjects from './github/GithubProjects'



class ProjectsContainer extends Component {

  constructor(props){
      super(props)
  }

  render(){
		return(
            <div>
                <ProjectForm buttonName="+Project" onFormSubmit={this.props.addProject}/>
                <GitHubProjects onFormSubmit={this.props.addGithubProjects}/>
                <Projects onFormSubmit={this.props.editProject} projectsData={this.props.projectsData}/>        
            </div>
		)
	}
}


const mapStateToProps = (state) => {
  return {
    projectsData: state.ProjectsReducer
  };
}


//map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    addGithubProjects: (projects) => {
      dispatch({type : 'ADD_PROJECTS', payload: projects})
    },
    addProject: (project) => {
    console.log('dispatching add project')
      dispatch({type : 'ADD_PROJECT', payload: project})
    },
    editProject: (project) => {
      console.log('dispatching edit project')
      dispatch({type : 'EDIT_PROJECT', payload: project})
    }
  }  
}

export default  connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);