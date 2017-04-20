import React, { Component } from 'react';
import './css/Skills.css';
import { connect } from 'react-redux';

class Skills extends Component {

  constructor(props){
      super(props)
  }

  render() {
    if (this.props.skillsData.length === 0) {
      return (<div/>);
    }
    return (
      <div className="container">
        <div className="card">
          <div className="card-block">
             <h4 className="card-title">Skills</h4>
        <div className="label-group">
			 		{
              this.props.skillsData.map(skill => { return (
                <div className="skill" key={skill}>
                  {skill}
                </div>
               
                )
			 			})
			 		}
           </div>
           </div>
          </div>
        </div>
    );
  }
}


function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    skillsData: state.skillsData
  };
}

export default connect(mapStateToProps)(Skills)

