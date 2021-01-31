import React, { createContext, useContext, useReducer } from "react";

import DuplicateList from "../duplicateList/DuplicateList";
import { mount, shallow } from "enzyme";
import { StateProvider } from "../state";
import DeleteConfirmationDialog from "../duplicateList/DeleteConfirmationDialog";
import Button from "@material-ui/core/Button";
import { IconButton, withStyles } from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";

describe("<DeleteConfirmationDialog />", () => {
  it("mounts and unmounts without crashing", () => {
    const wrapper = mount(<DeleteConfirmationDialog />);
    wrapper.unmount();
  });

  it("pressess cancel button and closes dialog", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);

    const dialog = <DeleteConfirmationDialog />;
    const wrapper = shallow(dialog);
    wrapper.find({ color: "primary" }).simulate("click");
    expect(setState).toHaveBeenCalledWith(false);

    wrapper.unmount();
  });

  it("pressess confirm button and triggers delete function", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    const deleteAction = jest.fn();

    const dialog = <DeleteConfirmationDialog deleteAction={deleteAction} />;
    const wrapper = shallow(dialog);
    wrapper.find({ color: "secondary" }).simulate("click");
    expect(setState).toHaveBeenCalledWith(false);
    expect(deleteAction).toHaveBeenCalled();
    wrapper.unmount();
  });
});
