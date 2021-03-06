import { ActionTypes } from "../actions/actiontypes";
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
    case ActionTypes.DELETE_DUPLICATE:
      const key = action.key;
      const oldDuplicates = state.duplicates;

      const duplicates = Object.keys(oldDuplicates).reduce((acc, key) => {
        const cleanedPaths = oldDuplicates[key].filter(
          element => element !== action.pathToDelete
        );
        if (cleanedPaths.length > 1) {
          acc[key] = cleanedPaths;
        }

        return acc;
      }, {});

      return {
        ...state,
        duplicates
      };
    case ActionTypes.ADD_DUPLICATES:
      return {
        ...state,
        duplicates: { ...action.duplicates }
      };

    default:
      return state;
  }
};
