export const duplicateReducer = (state, action) => {
  switch (action.type) {
    case "setDuplicates":
      return {
        ...state,
        duplicates: { ...action.duplicates }
      };

    default:
      return state;
  }
};
