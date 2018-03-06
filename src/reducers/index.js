import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({ //add all new reducers to this root reducer
  courses,
  authors,
  ajaxCallsInProgress
  //can use just 'courses: courses' - short hand property name
});

export default rootReducer;
