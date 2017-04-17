import React, { Component } from 'react';
import './Skills.css';
import {Jumbotron} from 'react-bootstrap'

class Skills extends Component {


  render() {
    //const skills = this.props.skills
    return (
      <div className="Skills">
        <Jumbotron>
        <div className="label-group">
			 		{
              this.props.skills.map(skill => { return ( 
                <button className="btn btn-info btn-info-outline" type="button" key={skill}>
                {skill} <span className="badge">4</span>
                </button>
                )
			 			})
			 		}
        </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Skills;
