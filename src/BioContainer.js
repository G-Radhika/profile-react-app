import React, { Component } from 'react';
import { connect } from 'react-redux'
import Bio from './Bio'
import BioForm from './BioForm'



class BioContainer extends Component {

  constructor(props){
      super(props)
  }

  render(){
      console.log('render: BioContainer')
		return(
            <div className="container">
                <section className="jumbotron text-center">
                    <div className="row">
                        <div className='col-xs-1'>
                            <BioForm buttonName="Bio" {...this.props} />
                        </div>
                    </div>
                    <Bio {...this.props}/>
                </section>
            </div>
		)
	}
}


function mapStateToProps(state) {
  return {
    bioData: state.BioReducer
  };
}


const  mapDispatchToProps = (dispatch) => {
  return {
      editBioData: (bioData) => {
          console.log('dispatch: EDIT_BIODATA')
          dispatch({type : 'EDIT_BIODATA', payload: bioData})}
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(BioContainer);