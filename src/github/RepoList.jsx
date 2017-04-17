import React, {Component} from 'react';
import Repo from './Repo.jsx';

class RepoList extends Component{

	constructor(props) {
		super(props)
		this.state = {

		}
		this.handleSelected = this.handleSelected.bind(this)
	}

	handleSelected() {
		
	}

	render(){
		return(
			<div>
			 	<ul className="list-group">
			 		{
			 			this.props.userRepos.map(repo => {
			 				return <Repo 
			 							repo={repo}
			 							key={repo.id}
										select={this.handleSelected}
			 							{...this.props} />
			 			})
			 		}
			 	</ul>
			</div>
		)
	}
}

export default RepoList