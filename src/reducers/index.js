import { combineReducers } from 'redux';
import BioReducer from './BioReducer';
import SkillsReducer from './SkillsReducer';
import ProjectsReducer from './ProjectsReducer'

const AppReducer = combineReducers({
  bioData: BioReducer,
  skillsData: SkillsReducer,
  projectsData: ProjectsReducer
});
export default AppReducer;
