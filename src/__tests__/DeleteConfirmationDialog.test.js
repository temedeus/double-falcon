import React, { createContext, useContext, useReducer } from "react";

import DuplicateList from "../duplicateList/DuplicateList";
import { mount, shallow } from "enzyme";
import { StateProvider } from "../state";
import DeleteConfirmationDialog from "../duplicateList/DeleteConfirmationDialog";

it("mounts and unmounts without crashing", () => {
  const initialState = {};

  const wrapper = shallow(
    <StateProvider initialState={initialState} reducer={null}>
      <DeleteConfirmationDialog />
    </StateProvider>
  );
  expect(wrapper.exists(DeleteConfirmationDialog)).toBe(true);
  wrapper.unmount();
});

it("mounts and unmounts without crashing", () => {
  const initialState = {};

  const wrapper = shallow(
    <StateProvider initialState={initialState} reducer={null}>
      <DeleteConfirmationDialog />
    </StateProvider>
  );
  expect(wrapper.exists(DeleteConfirmationDialog)).toBe(true);
  wrapper.unmount();
});
