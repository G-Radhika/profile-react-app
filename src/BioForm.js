import React, { Component } from 'react'
import './css/Bio.css'
import { editBioData } from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Bio from './Bio'



class BioForm extends Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

	handleSubmit(e){
		e.preventDefault()

		this.props.editBioData({
            name: this.refs.name.value,
            location: this.refs.location.value,
            summary: this.refs.summary.value,
            photo: "photo_default.png"
        });

        //this.refs.name.value = ''
        //this.refs.location.value = ''
        //this.refs.summary.value = ''
        //this.refs.photo.value = ''
	}

    componentDidMount(){
        this.refs.name.value = this.props.bioData.name
        this.refs.location.value = this.props.bioData.location
        this.refs.summary.value = this.props.bioData.summary
        //this.refs.photo.value =  this.props.bioData.photo
	}

	render(){
		return(
        <div>
            <button type="button" className="btn btn-primary btn-lg btn-link  btn-active" data-toggle="modal" data-target="#bioFormModal">
                {this.props.buttonName}
            </button>

            <div className="modal fade" id="bioFormModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Bio</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div className="modal-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="formGroupName">Full Name</label>
                            <input type="text" className="form-control" ref="name" id="formGroupName" placeholder="Enter firstname lastname"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupLocation">Location</label>
                            <input type="number" className="form-control" ref="location" id="formGroupLocation" placeholder="Enter zipcode"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupSummary">Summary</label>
                            <textarea className="form-control" ref="summary" id="formGroupSummary" placeholder="Enter profile summary"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupPhoto">Photo</label>
                            <input type="file" className="form-control" ref="photo" id="formGroupPhoto" placeholder="Upload profile picture"/>
                        </div>
                         <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#bioFormModal">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div>

          
        </div>
		)
	}
}


function mapStateToProps(state) {
  return {
    bioData: state.BioReducer
  };
}


const  mapDispatchToProps = (dispatch) => {
  return {
      editBioData: (bioData) => { dispatch(editBioData(bioData))}
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(BioForm);