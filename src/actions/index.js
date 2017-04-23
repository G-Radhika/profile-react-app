
export const addSkillsData = (skillsData = []) =>  {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'ADD_SKILLS',
    payload: skillsData
  };
}

export const editBioData = (bioData) => {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'EDIT_BIODATA',
    payload: bioData
  };
}
