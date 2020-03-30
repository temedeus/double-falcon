import React from "react";
import ReactDOM from "react-dom";
import CollapsableListItem from "../duplicateList/CollapsableListItem";
import Collapse from "@material-ui/core/Collapse";

import { mount, shallow } from "enzyme";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";

it("mounts and unmounts without crashing", () => {
  const wrapper = mount(<CollapsableListItem title="Title" />);
  expect(wrapper.props().title).toBe("Title");
  wrapper.unmount();
});

it("properly prints out duplicates", () => {
  const duplicates = ["/path/file1", "/path/file2", "/path/file3"];

  const wrapper = shallow(
    <CollapsableListItem title="Title" duplicateItemPaths={duplicates} />
  );

  duplicates.forEach(duplicate => {
    expect(wrapper.exists({ primary: duplicate })).toBe(true);
  });

  expect(wrapper.find("ExpandMoreIcon").exists());
});
