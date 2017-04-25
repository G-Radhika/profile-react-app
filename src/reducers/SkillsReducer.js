const SkillsReducer =  (state=[], action) => {
  console.log('SkillsReducer: ',state, action)
  switch(action.type) {
  case 'ADD_SKILLS':
    return action.payload;
  default:
    return state
  }

}

export default SkillsReducer