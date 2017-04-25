const AppConfigReducer =  (state=[], action) => {

  switch(action.type) {
  case 'CONFIG_PROJECT':
    return [...state, action.payload]
  default:
    return []
  }
}


export default AppConfigReducer