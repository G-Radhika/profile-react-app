import React, { Component } from 'react';
import { connect } from 'react-redux'
import Skills from './components/Skills'
import SkillsForm from './components/SkillsForm'



class SkillsContainer extends Component {

  constructor(props){
      super(props)
  }

  render(){
        console.log('render: SkillsContainer')

		return(
            <div className="container">
                <section className="jumbotron text-center">
                    <div className="row">
                        <div className='col-xs-1'>
                            <SkillsForm buttonName="+Skills" {...this.props} />
                        </div>
                    </div>
                    <Skills {...this.props}/>
                </section>
            </div>
		)
	}
}



function mapStateToProps(state) {
  return {
    skillsData: state.SkillsReducer
  };
}


//map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    addSkillsData: (skills) => {
      console.log('dispatch: ADD_SKILLS')
      dispatch({type : 'ADD_SKILLS', payload: skills})
    }
  }  
}

export default  connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);
