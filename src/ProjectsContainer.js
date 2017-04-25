import React, { Component } from 'react';
import { connect } from 'react-redux'
import Project from './Project'
import ProjectForm from './ProjectForm'
import GitHubProjects from './github/GithubProjects'



class ProjectsContainer extends Component {

  constructor(props){
      super(props)
  }

  render(){
      console.log('render: ProjectsContainer')
		return(
            <div className="container">
                <section className="jumbotron">
                    <div className="row">
                        <div className='col-xs-1'>
                            <ProjectForm buttonName="+Project" onFormSubmit={this.props.addProject} />
                        </div>
                        <div className='col-xs-1'>
                            <GitHubProjects onFormSubmit={this.props.addGithubProjects} />
                        </div>
                    </div>
                    <div className="card-deck">
                    {
                        this.props.projectsData.map(project => {
                        return (<Project key={project.name} onFormSubmit={this.props.editProject} projectData={project} />)
                        })
                    }
                    </div>
                   
                </section>
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
        console.log('dispatch: ADD_PROJECTS')
      dispatch({type : 'ADD_PROJECTS', payload: projects})
    },
    addProject: (project) => {
    console.log('dispatch: ADD_PROJECT')
      dispatch({type : 'ADD_PROJECT', payload: project})
    },
    editProject: (project) => {
      console.log('dispatch: EDIT_PROJECT')
      dispatch({type : 'EDIT_PROJECT', payload: project})
    }
  }  
}

export default  connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);