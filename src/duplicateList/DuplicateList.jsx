import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import {useStateValue} from "../state";
import {map} from "lodash";
import CollapsableListItem from "./CollapsableListItem";
import {deleteDuplicate} from "../actions/actions";

const createItems = (duplicates, deleteAction) =>
    map(duplicates, (value, key) => (
        <CollapsableListItem
            key={key}
            title={key}
            duplicateItemPaths={value}
            deleteAction={(title, path) => deleteAction(title, path)}
        />
    ));

const DuplicateList = () => {
  const [{ duplicates }, dispatch] = useStateValue();

  const deleteAction = async (title, duplicateItemPath) => {
    const action = await deleteDuplicate(title, duplicateItemPath);
    dispatch(action);
  };

  const items = createItems(duplicates, deleteAction);

  return (
      <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Duplicate Files
            </ListSubheader>
          }
      >
        {items}
      </List>
  );
};

export default DuplicateList;
