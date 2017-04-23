const SkillsReducer =  (state=[], action) => {

  switch(action.type) {
  case 'ADD_SKILLS':
    return action.payload;
  default:
    return ['javascript', 'C']
  }

}

export default SkillsReducer