import React, { Component } from 'react';
import './Project.css';
import ProjectForm from './ProjectForm'
import {Jumbotron} from 'react-bootstrap'
import {Image} from 'react-bootstrap'

class Project extends Component {

  constructor(props){
      super(props)
      this.state = {isBioFormOn: false};

      // This binding is necessary to make `this` work in the callback
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentWillUpdate() {
  }

  handleFormSubmit(projectData) {
    this.props.emitter.emit('NewProjectData', [projectData])
  }

  render() {
    const projectData = this.props.projectData
    return (
       <div className="Project">
        <Jumbotron>
           <div className="Project-Menu">
            <ProjectForm onFormSubmit={this.handleFormSubmit.bind(this)}/>
          </div>
          <div className="row">
			    	<div className="col-md-4 col-xs-6">
              <div className="list-group-item" style={{width:"95%"}}><strong></strong> {projectData.name}</div>
			    	  <img src={projectData.photo} alt="240x200" class="img-thumbnail img-responsive" style={{width:"90%"}}/>
			    	</div>
			    	<div className="col-md-8 col-xs-12">
			    		<div className="row">
			    			<div className="">
                    <h3>Description</h3>
			    					<div className="list-group-item" style={{width:"95%"}}><strong></strong> {projectData.summary}  </div>
			    			</div>
			    		</div>
			    		<hr />
			    		<br />
			    		<a className="btn btn-primary" target="_blank" href={projectData.name}>More details</a>
			    	</div>
			    </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Project;
