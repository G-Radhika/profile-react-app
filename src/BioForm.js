import React, { Component } from 'react';
import './Bio.css';

class BioForm extends Component{
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
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
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>UserName:<input type="text" ref="name" /> </label><br/>
                    <label>Location:<input type="text" ref="location" /> </label><br/>
                    <label>Summary:<input type="text" ref="summary" /> </label><br/>
                    <label>Photo:<input type="text" ref="photo" /> </label><br/>
                    <input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default BioForm