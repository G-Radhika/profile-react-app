
const ProjectsReducer =  (state=[], action) => {

  switch(action.type) {
  case 'ADD_PROJECTS':
    return action.payload;
  default:
    return [
    {
        name: 'personal-photographer',
        summary: `React makes it painless to create interactive UIs'
        Design simple views for each state in your application, and React will'
        efficiently update and render just the right components when your data changes`,
        photo:'https://facebook.github.io/react/img/logo.svg'
    },
    {
        name: 'profile page creator',
        summary: 'another great project',
        photo:'http://www.cooltanarts.org.uk/wp-content/uploads/2013/10/robot.jpg'
    },
     {
        name: 'personal-photographer2',
        summary: `React makes it painless to create interactive UIs'
        Design simple views for each state in your application, and React will'
        efficiently update and render just the right components when your data changes`,
        photo:'https://angular.io/resources/images/logos/angular/angular.svg'
    },
     {
        name: 'personal-photographer3',
        summary: `React makes it painless to create interactive UIs'
        Design simple views for each state in your application, and React will'
        efficiently update and render just the right components when your data changes`,
        photo:'https://angular.io/resources/images/logos/angular/angular.svg'
    },
  ];
  }

}

export default ProjectsReducer
