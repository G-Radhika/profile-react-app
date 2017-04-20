import { combineReducers } from 'redux';
import BioReducer from './BioReducer';
import SkillsReducer from './SkillsReducer';

const rootReducer = combineReducers({
  bioData: BioReducer,
  skills: SkillsReducer
});

export default rootReducer;