import { ActionTypes } from "./actiontypes";

export const deleteDuplicate = async (key, pathToDelete) => {
  // await newFromExisting.deleteFile("/home/temedeus/fi/");

  return {
    type: ActionTypes.DELETE_DUPLICATE,
    key,
    pathToDelete
  };
};
