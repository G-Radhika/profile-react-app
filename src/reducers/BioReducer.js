const BioReducer = (state=null, action) => {

  switch(action.type) {
  case 'EDIT_BIODATA':
    return action.payload;
  }

  return {
        name: 'Sridhar Uyyala', 
        location: '97124', 
        summary: 'Software Engineer developing cool appliations bla bal abla',
        photo: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAdxAAAAJDQ4NGE0MjdiLWUwNDgtNDUzYS1iYTU0LTViNDI5MGNiNDc1OA.jpg'};
}

export default BioReducer