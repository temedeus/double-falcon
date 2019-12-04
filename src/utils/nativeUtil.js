/**
 * Used to provide access for electron functionality.
 *
 * @param {*} path
 */
var instance;

export const createDuplicateFinderInstance = path => {
  const remote = window.require("electron").remote;
  const mainProcess = remote.require("./main");
  instance = mainProcess.createDuplicateFinder(path);
  return instance;
};

export const getActiveInstance = () => {
  return instance;
};
