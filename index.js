/**
 * Test utility for duplicatefinder.
 */
const createDuplicateFinder = require("./build/Release/duplicatefinder.node");

const newFromExisting = new createDuplicateFinder.DuplicateFinderWrapper(
  "/home/temedeus/fi"
);

console.log("Testing class initial value for derived instance");
console.log(newFromExisting.scan());

module.exports = createDuplicateFinder;
