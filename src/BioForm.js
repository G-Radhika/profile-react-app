import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Modal, Button, ButtonGroup, Popover, Tooltip, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'
import './Bio.css'

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
        );
    }

class BioForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            showModal : false,
            name: '',
            location: '',
            summary: '',
            photo: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onShowModal = this.onShowModal.bind(this)
        this.onHideModal = this.onHideModal.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSummaryChange = this.handleSummaryChange.bind(this)
    }

    onShowModal() {
        this.setState({ showModal: true })
    }

    onHideModal() {
        this.setState({ showModal: false })
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }
     handleLocationChange(e) {
        this.setState({ location: e.target.value })
    }
     handleSummaryChange(e) {
        this.setState({ summary: e.target.value })
    }

	handleSubmit(e){
		e.preventDefault()
        //alert(ReactDOM.findDOMNode('name'))
        this.onHideModal()

		this.props.onFormSubmit({
            name: this.state.name,
            location: this.state.location,
            summary: this.state.summary,
            photo: this.state.photo
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
            <div>
                <Button bsStyle="primary"  onClick={this.onShowModal}>
                 Edit
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.onHideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
			        <div className="Bio-Form">
                        <form onSubmit={this.handleSubmit}>
                            <FieldGroup
                                id="formControlsText"
                                value={this.state.name}
                                type="text"
                                label="Full Name:"
                                placeholder="Enter full name"
                                onChange={this.handleNameChange} 
                            />
                            <FieldGroup
                                id="formControlsLocation"
                                value={this.state.location}
                                type="number"
                                label="Zipcode"
                                placeholder="Enter zipcode"
                                onChange={this.handleLocationChange}
                            />
                            <FieldGroup
                                id="formControlsSummary"
                                value={this.state.summary}
                                type="text"
                                componentClass="textarea"
                                label="Summary"
                                placeholder="Enter summary"
                                onChange={this.handleSummaryChange}
                            />
                            <FieldGroup
                                id="formControlsFile"
                                value={this.state.photo}
                                ref="photo"
                                type="file"
                                label="Photo"
                                help="Example block-level help text here."
                            />
                            <Button type="submit">  Submit</Button>
                        </form>
			        </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
		)
	}
}

export default BioForm