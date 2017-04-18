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
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentWillUpdate() {
  }

  handleFormSubmit(bioData) {
    this.props.emitter.emit('NewBioData', bioData)
  }

  render() {
    const bioData = this.props.bioData
    if (bioData.name === '') {
      return (<div/>);
    }
    return (
  <div className="container">
  <div className="card-group row">
        <div className="card col-md-3">
          <img className="card-img-top" src={bioData.photo} alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">{bioData.name}</h4>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{bioData.location}</li>
          </ul>
          <div className="card-block">
            <a href="#" className="card-link">Email</a>
            <a href="#" className="card-link">LinkedIn</a>
            <BioForm buttonName="Edit" onFormSubmit={this.handleFormSubmit.bind(this)}/>
          </div>
        </div>
         <div className="card col-md-9">
          <div className="card-block">
            <h4 className="card-title">Summary</h4>
            <p className="card-text">{bioData.summary}</p>
          </div>
        </div>
  </div>
  </div>  
    );
  }
}

export default Bio;
