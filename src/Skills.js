import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {


  render() {
    //const skills = this.props.skills
    return (
      <div className="Skills">
        <div className="skills-list">
            <ul className="list-group">
			 		{
                         this.props.skills.map(skill => {
			 				return <div key={skill}> <h4>{skill}</h4> </div>
			 			})
			 		}
			</ul>
        </div>
      </div>
    );
  }
}

export default Skills;
