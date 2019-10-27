import { Actions } from "../actions/actions";
/**
 * 
 * Returned duplicates use followuing format (object with arrays of duplicate paths, hash as key):
 * {
 *  "1e9c9911c56f0ac620ec6588babcb52cc6cfa9723132e53cfb8ee8fb1a5d4dec": 
 *      ['/path/to/duplicatePath1','/path/to/duplicatePath2', '/path/to/duplicatePath3', '/path/to/duplicatePath4']
 * }

 * 
 * @param {*} state 
 * @param {*} action 
 */
export const duplicateReducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD_DUPLICATES:
      return {
        ...state,
        duplicates: { ...action.duplicates }
      };

    default:
      return state;
  }
};
