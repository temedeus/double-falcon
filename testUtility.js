/**
 * Test utility for duplicatefinder.
 * Utility requires only one parameter: path to scan.
 *
 * How to use:
 * node testUtility.js /path/to/scan/dir/
 */
const createDuplicateFinder = require("./build/Release/duplicatefinder.node");

var myArgs = process.argv.slice(2);
console.log("myArgs: ", myArgs[0]);

const newFromExisting = new createDuplicateFinder.DuplicateFinderWrapper(
  myArgs[0]
);

console.log("Testing class initial value for derived instance");
console.log(newFromExisting.scan());
newFromExisting.clear();
module.exports = createDuplicateFinder;
