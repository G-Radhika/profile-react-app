import React, {Component} from 'react';

class Repo extends Component{

	render(){
		const {repo} = this.props;

		return(
			<div>
    			
				<li className="list-group-item">
					<div class="input-group">
      					<span class="input-group-addon">
        					<input type="checkbox" aria-label="..."/>
							<a href={repo.html_url}>
			 					{repo.name}
			 				</a> : {repo.description}
      					</span>
    				</div>
			 		
				</li>
			</div>
		)
	}
}

export default Repo