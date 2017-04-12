import React, { Component } from 'react';
import './Bio.css';

class Bio extends Component {

  constructor(props){
      super(props)
  }

  render() {
    const bioData = this.props.bioData
    return (
      <div className="Bio">
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
