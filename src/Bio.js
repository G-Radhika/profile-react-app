import React, { Component } from 'react';
import './css/Bio.css';
import { connect } from 'react-redux'

class Bio extends Component {

  constructor(props){
      super(props)
  }

  componentWillUpdate() {
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

function mapStateToProps(state) {
  return {
    bioData: state.BioReducer
  };
}

export default connect(mapStateToProps)(Bio)

