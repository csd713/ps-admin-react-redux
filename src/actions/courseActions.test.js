import expect from 'expect';
import * as types from './actionTypes';
import * as courseActions from './courseActions';

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      //arrange required variables
      const course = { id: 'clean-code', title: 'Clean Code' };
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };
      //do the action
      const action = courseActions.createCourseSuccess(course);

      //check if we got the expected result
      expect(action).toEqual(expectedAction);
    });
  });
});
