import React, { Component } from 'react';
import './Skills.css';
import {Jumbotron} from 'react-bootstrap'

class Skills extends Component {


  render() {
    //const skills = this.props.skills
    if (this.props.skills.length === 0) {
      return (<div/>);
    }
    return (
        <div className="card">
          <div className="card-block">
        <div className="label-group">
			 		{
              this.props.skills.map(skill => { return (
                <div className="skill" key={skill}>
                  {skill}
                </div>
               
                )
			 			})
			 		}
           </div>
           </div>
        </div>
    );
  }
}

export default Skills;
