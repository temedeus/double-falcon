import { ActionTypes } from "./actiontypes";
import { getActiveInstance } from "../utils/nativeUtil";

/**
 * Delete duplicate file from both the file system and state.
 *
 * @param {*} key
 * @param {*} pathToDelete
 */
export const deleteDuplicate = async (key, pathToDelete) => {
  if (getActiveInstance() !== undefined) {
    await getActiveInstance().deleteFile(pathToDelete);

    return {
      type: ActionTypes.DELETE_DUPLICATE,
      key,
      pathToDelete
    };
  }
};

/**
 * Add received duplicates into state.
 * @param {*} results
 */
export const addDuplicates = results => {
  return {
    type: ActionTypes.ADD_DUPLICATES,
    duplicates: results
  };
};
