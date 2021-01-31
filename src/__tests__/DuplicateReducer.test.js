import { duplicateReducer } from "../reducers/duplicateReducer";
import { ActionTypes } from "../actions/actiontypes";

it("saves duplicates in the state using correct action", () => {
  const state = {};
  const action = {
    type: ActionTypes.ADD_DUPLICATES,
    duplicates: ["duplicate1", "duplicate2"]
  };

  const newState = duplicateReducer(state, action);
  expect(Object.keys(newState.duplicates).length).toEqual(2);
});

it("empties duplicates when no values given", () => {
  const state = {};
  const action = {
    type: ActionTypes.ADD_DUPLICATES,
    duplicates: []
  };

  const newState = duplicateReducer(state, action);
  expect(Object.keys(newState.duplicates).length).toEqual(0);
});

it("leaves state intact when incorrect action", () => {
  const state = { 0: "duplicates1", 1: "duplicates2" };
  const action = {
    type: "INCORRECT",
    duplicates: []
  };

  const newState = duplicateReducer(state, action);
  expect(newState).toEqual(state);
});
