import { Actions } from "../actions/actions";
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
