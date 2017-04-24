import { combineReducers } from 'redux';
import BioReducer from './BioReducer';
import SkillsReducer from './SkillsReducer';
import ProjectsReducer from './ProjectsReducer'

const AppReducer = combineReducers({
  BioReducer,
  SkillsReducer,
  ProjectsReducer,
});
export default AppReducer;
