import React, { Component } from 'react'
import '../css/Project.css'
import $ from 'jquery';


class ProjectForm extends Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

	handleSubmit(e){
		e.preventDefault()
        this.props.onFormSubmit({
            name: this.refs.name.value,
            summary: this.refs.summary.value,
            photo: "photo_default.png"
        })

      //  this.refs.name.value = ''
       // this.refs.summary.value = ''
       // this.refs.photo.value = ''
	}

    handleEdit() {
         if(this.props.projectData !== undefined) {
            this.refs.name.value = this.props.projectData.name
            this.refs.summary.value = this.props.projectData.summary
            //this.refs.photo.value =  this.props.bioData.photo
        }
    }

    componentDidMount(){
         if(this.props.projectData !== undefined) {
            this.refs.name.value = this.props.projectData.name
            this.refs.summary.value = this.props.projectData.summary
            //this.refs.photo.value =  this.props.bioData.photo
        }
	}
    
    


	render(){

		return(
            <div>
                <button type="button" onClick={this.handleEdit.bind(this)} className="btn btn-primary btn-link float-right" data-toggle="modal" data-target="#projectFormModal">
                    {this.props.buttonName}
                </button>

                <div className="modal fade" id="projectFormModal" tabIndex="-1" role="dialog" aria-labelledby="projectModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="projectModalLabel">Project</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="formGroupName">Title</label>
                                        <input type="text" className="form-control" ref="name" id="formGroupName" placeholder="Enter Project Title" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupSummary">Summary</label>
                                        <textarea className="form-control" ref="summary" id="formGroupSummary" placeholder="Enter Project description" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupPhoto">Photo</label>
                                        <input type="file" className="form-control" ref="photo" id="formGroupPhoto" placeholder="upload profile picture" />
                                    </div>
                                    <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#projectFormModal">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
		)
	}
}


export default ProjectForm;