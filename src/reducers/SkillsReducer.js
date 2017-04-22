export  default  function(state=null, action) {

  switch(action.type) {
  case 'ADD_SKILLS':
    console.log('in add_skills')
    return action.payload;
  default:
    return ['javascript', 'C']
  }

}