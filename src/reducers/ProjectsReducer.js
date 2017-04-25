
const ProjectsReducer =  (state=[], action) => {
  console.log('ProjectReducer: ',state, action)

  switch(action.type) {
  case 'ADD_PROJECT':
    return [...state, action.payload]
  case 'ADD_PROJECTS':
    return [...state,
            ...action.payload]
  case 'EDIT_PROJECT':
    console.log('EDIT_PROJECT')
    let projectUpdate = action.payload
    let newProjects = state.map((project) => {if (projectUpdate.name === project.name)
                                  return projectUpdate
                            return project })
    return newProjects
  default:
    return state
  }
}


export default ProjectsReducer
