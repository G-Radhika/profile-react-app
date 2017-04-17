import React, {Component} from 'react';
import Checkbox from '../util/Checkbox'

class RepoList extends Component{

	constructor(props) {
		super(props)
		this.state = {

		}
		this.handleSelected = this.handleSelected.bind(this)
	}

	componentWillMount = () => {
		this.selectedCheckboxes = new Set();
	}

	handleSelected = label => {
		if (this.selectedCheckboxes.has(label)) {
			this.selectedCheckboxes.delete(label);
		} else {
			this.selectedCheckboxes.add(label);
		}
	}

	handleFormSubmit = formSubmitEvent => {
		formSubmitEvent.preventDefault();
		let selectedProjects = []
		for (const checkbox of this.selectedCheckboxes) {
			console.log(checkbox, 'is selected.');
			for (const repo of this.props.userRepos) {
				if (repo.name === checkbox)
					selectedProjects.push({ name: repo.name, summary: repo.description, photo: '' })
			}
		}
		this.props.onSubmit(selectedProjects)
		//this.props.emitter.emit('NewProjectsData', selectedProjects)
		
	}

	createCheckbox = label => (
		<Checkbox
			label={label}
			handleCheckboxChange={this.handleSelected}
			key={label}
		/>
	)

	createCheckboxes = (repos) => (
		repos.map((repo)=> this.createCheckbox(repo.name))
	)


	render() {
		return (
		

						<form onSubmit={this.handleFormSubmit}>
							{this.createCheckboxes(this.props.userRepos)}
							<button className="btn btn-default" type="submit">Submit</button>
						</form>

		);
	}

}

export default RepoList