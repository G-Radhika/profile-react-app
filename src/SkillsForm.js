import React, { Component } from 'react'
import './css/Skills.css'
import {addSkills} from './actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

console.log(addSkills)

class SkillsForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            skills : []

        }
        this.handleAddSkill = this.handleAddSkill.bind(this)

    }

	handleAddSkill(e){
		e.preventDefault()
        let new_skills = []
        this.state.skills.forEach(function(skill) {
            new_skills.push(skill)
        })
        new_skills.push(this.refs.skill.value)
        this.setState({skills:new_skills})
        this.refs.skill.value = ''
	}

    handleSubmit() {
        this.props.addSkills(['javascript', 'bla']);
    }

	render(){
		return(
        <div>
            <button type="button" className="btn btn-primary btn-lg btn-link" data-toggle="modal" data-target="#skillFormModal">
                {this.props.buttonName}
            </button>

            <div className="modal fade" id="skillFormModal" tabIndex="-1" role="dialog" aria-labelledby="skillModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="skillModalLabel">Project</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div className="modal-body">
                   <form className="form-inline" onSubmit={this.handleAddSkill}>
                        <label className="sr-only" htmlFor="inlineFormInput">Skill</label>
                        <input type="text" ref="skill" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="ex. Javascript"/>
                        <button type="submit" className="btn">Add</button>
                    </form>
                  
                </div>
			    <div className="modal-footer">
                 <div className="skills">
			 		{
			 			this.state.skills.map(skill => {
			 				return ( 
                                    <div className="skill" key={skill}>{skill}</div>
                                 )
			 			})
			 		}
                    <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)} data-toggle="modal" data-target="#skillFormModal">Submit</button>
                </div>
                </div>
            </div>
        </div>
        </div>

          
        </div>
		)
	}
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ addSkills: addSkills }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(null, mapDispatchToProps)(SkillsForm);
