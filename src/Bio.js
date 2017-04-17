import React, { Component } from 'react';
import './Bio.css';
import BioForm from './BioForm'
import {Jumbotron} from 'react-bootstrap'
import {Image} from 'react-bootstrap'

class Bio extends Component {

  constructor(props){
      super(props)
      this.state = {isBioFormOn: false};

      // This binding is necessary to make `this` work in the callback
      this.handleBioFormSubmit = this.handleBioFormSubmit.bind(this)
  }

  componentWillUpdate() {
  }

  handleBioFormSubmit(bioData) {
    this.props.emitter.emit('NewBioData', bioData)
  }

  render() {
    const bioData = this.props.bioData
    return (
      <div className="Bio">
        <Jumbotron>
           <div className="Bio-Menu">
            <BioForm onFormSubmit={this.handleBioFormSubmit.bind(this)}/>
          </div>
          <div className="row">
			    	<div className="col-md-4 col-xs-6">
              <div className="list-group-item" style={{width:"95%"}}><strong></strong> {bioData.name}</div>
              <div className="list-group-item" style={{width:"95%"}}><strong></strong> {bioData.location}</div>
			    	  <img src={bioData.photo} alt="photo_default.png" class="img-thumbnail img-responsive" style={{width:"90%"}}/>
			    	</div>
			    	<div className="col-md-8 col-xs-12">
			    		<div className="row">
			    			<div className="">
                    <h3>Summary</h3>
			    					<div className="list-group-item" style={{width:"95%"}}><strong></strong> {bioData.summary}  </div>
			    			</div>
			    		</div>
			    		<hr />
			    		<br />
			    		<a className="btn btn-primary" target="_blank" href={bioData.name}>Visit Profile</a>
			    	</div>
			    </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Bio;
