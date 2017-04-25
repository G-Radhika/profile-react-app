const BioReducer = (state={}, action) => {
  console.log('BioReducer: ',state, action)

  switch(action.type) {
  case 'EDIT_BIODATA':
    return action.payload;
  }

  return  state;
}

export default BioReducer