import React, { Component } from 'react';
import '../css/Skills.css';

class Skills extends Component {

  constructor(props){
      super(props)
  }

  render() {
    if (this.props.skillsData.length === 0) {
      return (<div/>);
    }
    return (
        
            <div className="label-group">
              {
                this.props.skillsData.map(skill => {
                  return (
                    <div className="skill" key={skill}>
                      {skill}
                    </div>
                  )
                })
              }
            </div>
         
    );
  }
}

export default Skills

