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
        <div className="Bio-Data">
          <div>
            <Image src={bioData.photo} responsive alt="242x200" />
          </div>
          <div>
            <div className="Bio-Name"><h4>{bioData.name}</h4></div>
            <div className="Bio-Location"><h4>{bioData.location}</h4></div>
            <div className="Bio-Summary"><h4>{bioData.summary}</h4></div>
          </div>
        </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Bio;
