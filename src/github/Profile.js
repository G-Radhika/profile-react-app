import React, {Component} from 'react';
import RepoList from './RepoList';

class Profile extends Component{

	render(){

		 return (
  	<div className="container">
  		<div className="card-group row">
        <div className="card col-md-4">
          <img className="card-img-top" src={this.props.userData.avatar_url} alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">{this.props.userData.name}</h4>
						<a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile</a>
          </div>
          <ul className="list-group list-group-flush">
							<span className="list-group-item label label-primary">{this.props.userData.public_repos} Repos</span> 
			    		<span className="list-group-item label label-success">{this.props.userData.public_gists} Public Gists</span> 
			    		<span className="list-group-item label label-info">{this.props.userData.followers} Followers</span> 
			    		<span className="list-group-item label label-danger">{this.props.userData.following} Following</span> 
          </ul>
          <div className="card-block">
            <a href="#" className="card-link">Email</a>
            <a href="#" className="card-link">LinkedIn</a>
          </div>
        </div>
         <div className="card col-md-8">
          <div className="card-block">
           	<ul className="list-group">
			    					<li className="list-group-item"><strong>Username: </strong> {this.props.userData.login}</li>
			    					<li className="list-group-item"><strong>Location: </strong> {this.props.userData.location}</li>
			    					<li className="list-group-item"><strong>Email Address: </strong> {this.props.userData.email}</li>			
			    	</ul>
          </div>
					<div className="card-block">
						<h3>User Repositories</h3>
           <RepoList onSubmit={this.props.onSubmit} userRepos={this.props.userRepos} />
          </div>
        </div>
  		</div>
  	</div>  
    );
	}
}

export default Profile