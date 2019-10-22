import React from "react";
import ReactDOM from "react-dom";
import CollapsableListItem from "../duplicateList/CollapsableListItem";
import { mount } from "enzyme";

it("mounts and unmounts without crashing", () => {
  const wrapper = mount(<CollapsableListItem title="Title" />);
  wrapper.unmount();
});
