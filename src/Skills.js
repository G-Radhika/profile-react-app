import React, { Component } from 'react';
import './Skills.css';
import {Jumbotron} from 'react-bootstrap'

class Skills extends Component {


  render() {
    //const skills = this.props.skills
    return (
      <div className="Skills">
        <Jumbotron>
        <div className="skills-list">
          <ul className="list-group">
			 		{
                         this.props.skills.map(skill => {
			 				return <div key={skill}> <h4>{skill}</h4> </div>
			 			})
			 		}
			    </ul>
        </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Skills;
