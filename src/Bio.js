import React, { Component } from 'react';
import './Bio.css';
import BioForm from './BioForm'

class Bio extends Component {

  constructor(props){
      super(props)
      this.state = {isBioFormOn: false};

      // This binding is necessary to make `this` work in the callback
      this.handleEditBio = this.handleEditBio.bind(this);
  }

  componentWillUpdate() {
  }

  handleEditBio(e) {
    e.preventDefault()
    this.setState({isBioFormOn: true})
  }

  handleBioFormSubmit(bioData) {
    this.setState({isBioFormOn: false})
    this.props.emitter.emit('NewBioData', bioData)
  }

  render() {
    const bioData = this.props.bioData
    return (
      <div className="Bio">
        <div className="Bio-Menu">
          <div className="Bio-Edit">
            <button onClick={this.handleEditBio}>Edit</button>
            {this.state.isBioFormOn ? <BioForm onFormSubmit={this.handleBioFormSubmit.bind(this)} /> : <div/> }
          </div>
        </div>
        <div className="Bio-Data">
          <img src={bioData.photo} className="Bio-Photo" alt="profile pic" />
          <div className="Bio-Name"><h4>{bioData.name}</h4></div>
          <div className="Bio-Location"><h4>{bioData.location}</h4></div>
          <div className="Bio-Summary"><h4>{bioData.summary}</h4></div>
        </div>
      </div>
    );
  }
}

export default Bio;
