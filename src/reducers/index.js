import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({ //add all new reducers to this root reducer
  courses,
  authors
  //can use just 'courses: courses' - short hand property name
});

export default rootReducer;
