import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import Search from './Search';
import $ from 'jquery'
import {Modal, Button, ButtonGroup, Popover, Tooltip, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'

class GitHubProjects extends Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			username: '',
			userData: [],
			userRepos: [],
			perPage: 10
		}
		this.onShowModal = this.onShowModal.bind(this)
        this.onHideModal = this.onHideModal.bind(this)
	}

	onShowModal() {
        this.setState({ showModal: true })
    }

    onHideModal() {
        this.setState({ showModal: false })
    }

	// Get user data from github
	getUserData(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userData: data});
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}

	// Get user repos
	getUserRepos(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userRepos: data});
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}

	handleFormSubmit(username){
		this.setState({username: username}, function(){
			this.getUserData();
			this.getUserRepos();
		});
	}

	componentDidMount(){
		//this.getUserData();
		//this.getUserRepos();
	}

	render(){
		return(
			<div>
				<div className="Github-Menu">
					 <Button onClick={this.onShowModal}>+GitHub</Button>
				</div>
				<Modal show={this.state.showModal} onHide={this.onHideModal}>
                	<Modal.Header closeButton>
                    	<Modal.Title>GitHub Projets</Modal.Title>
                	</Modal.Header>
                	<Modal.Body>
						<Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
						<Profile {...this.state} />
					</Modal.Body>
				</Modal>
			</div>
		)
	}
}

GitHubProjects.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};
GitHubProjects.defaultProps ={
	clientId: '75c556ed8660b478c919',
	clientSecret: '9d68ee85c0f8b5240f4cd36f9bd8bed7c6c95c6b'
}

export default GitHubProjects