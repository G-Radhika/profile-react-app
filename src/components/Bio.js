import React, { Component } from 'react';
import '../css/Bio.css';

class Bio extends Component {

  constructor(props) {
    super(props)
  }

  componentWillUpdate() {
  }

  render() {
    const bioData = this.props.bioData
    if (bioData.name === undefined) {
      return (<div />);
    }

    return (
      <div className="row">
        <div className="col col-md-3">
          <div className="card">
            <img className="card-img-top" src={bioData.photo} alt="Card image cap" />
          </div>
        </div>
        <div className="col col-md-9">
          <h1 className="jumbotron-heading">{bioData.name}</h1>
          <p className="lead text-muted">{bioData.summary}</p>
          <p>
            <a href="#" className="btn">LinkedIn</a>
            <a href="#" className="btn">Email</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Bio

