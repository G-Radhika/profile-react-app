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
      <div className="container">
        <Jumbotron>
          <div className="Bio-Menu pull-right">
            <BioForm onFormSubmit={this.handleBioFormSubmit.bind(this)}/>
          </div>
          <ul className="media-list">
            <li className="media">
              <div className="media-left">
                <a href="#">
                  <img  className="media-object img-thumbnail img-responsive" src={bioData.photo} alt="..."/>
                </a>
              </div>
              <div className="media-body">
                <h3 className="media-heading">{bioData.name}</h3>
                <h4 className="pull-left">Summary</h4>
                <p>{bioData.summary}</p>
              </div>
            </li>
          </ul>
          </Jumbotron>
        </div>
     
    );
  }
}

export default Bio;
