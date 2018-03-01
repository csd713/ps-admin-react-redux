import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
  //can use just 'courses: courses' - short hand property name
});

export default rootReducer;
