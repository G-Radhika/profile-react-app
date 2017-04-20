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
      <section className="jumbotron text-center">
     
        <div className="row">
          <div className="col col-md-3">
            <div className="card">
          <img className="card-img-top"  src={bioData.photo} alt="Card image cap"/>
          </div>
          </div>
          <div className="col col-md-9">
        <h1 className="jumbotron-heading">{bioData.name}</h1>
        <p className="lead text-muted">{bioData.summary}</p>
        <p>
          <a href="#" className="btn btn-primary">Main call to action</a>
          <a href="#" className="btn btn-secondary">Secondary action</a>
        </p>
      </div>
      </div>
       </section>
      </div>
   

    
    );
  }
}

export default Bio;
