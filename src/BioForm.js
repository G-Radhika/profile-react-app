import React, { Component } from 'react'
import {Modal, Button, ButtonGroup, Popover, Tooltip} from 'react-bootstrap'
import './Bio.css'

class BioForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            showModal : false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onShowModal = this.onShowModal.bind(this)
        this.onHideModal = this.onHideModal.bind(this)
    }

    onShowModal() {
        this.setState({ showModal: true })
    }

    onHideModal() {
        this.setState({ showModal: false })
    }

	handleSubmit(e){
		e.preventDefault();

		this.props.onFormSubmit({
            name: this.refs.name.value.trim(),
            location: this.refs.location.value.trim(),
            summary: this.refs.summary.value.trim(),
            photo: this.refs.photo.value.trim()
        });

        this.refs.name.value = ''
        this.refs.location.value = ''
        this.refs.summary.value = ''
        this.refs.photo.value = ''
	}

	render(){
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        )
        const tooltip = (
        <Tooltip id="modal-tooltip">
            wow.
        </Tooltip>
        )
		return(
        <div>
           <Button bsStyle="primary" bsSize="large" onClick={this.onShowModal}>
           Edit
           </Button>
           <Modal show={this.state.showModal} onHide={this.onHideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
			        <div className="Bio-Form">
				        <form onSubmit={this.handleSubmit}>
					        <label>UserName:<input type="text" ref="name" /> </label><br/>
                            <label>Location:<input type="text" ref="location" /> </label><br/>
                            <label>Summary:<input type="text" ref="summary" /> </label><br/>
                            <label>Photo:<input type="text" ref="photo" /> </label><br/>
                            <input type="submit" value="Submit" />
				        </form>
			        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.onHideModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
		)
	}
}

export default BioForm