import React, {Component} from 'react';
import Profile from './Profile';
import Search from './Search';
import $ from 'jquery'

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

	handleProjectsSelected(projects) {
		this.onHideModal()
		this.props.onFormSubmit(projects)
	}
	

	componentDidMount(){
		//this.getUserData();
		//this.getUserRepos();
	}

	render(){
		return(
        <div>
            <button type="button" className="btn btn-primary btn-lg btn-link" data-toggle="modal" data-target="#githubFormModal">
                Github
            </button>

            <div className="modal fade" id="githubFormModal" tabIndex="-1" role="dialog" aria-labelledby="githubModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="githubModalLabel">Github</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div className="modal-body">
                    <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
					<Profile {...this.state} onSubmit={this.handleProjectsSelected.bind(this)} />
                </div>
            </div>
        </div>
        </div>

          
        </div>
		)
	}
}


GitHubProjects.defaultProps ={
	clientId: '75c556ed8660b478c919',
	clientSecret: '9d68ee85c0f8b5240f4cd36f9bd8bed7c6c95c6b'
}

export default GitHubProjects