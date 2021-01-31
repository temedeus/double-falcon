import React, { createContext, useContext, useReducer } from "react";

import DuplicateList from "../duplicateList/DuplicateList";
import { duplicateReducer } from "../reducers/duplicateReducer";
import { mount, shallow } from "enzyme";
import { StateProvider } from "../state";

describe("<DuplicateList />", () => {
  it("mounts and unmounts without crashing", () => {
    const initialState = {};

    const wrapper = shallow(
      <StateProvider initialState={initialState} reducer={null}>
        <DuplicateList />
      </StateProvider>
    );
    expect(wrapper.exists(DuplicateList)).toBe(true);
    wrapper.unmount();
  });
});
