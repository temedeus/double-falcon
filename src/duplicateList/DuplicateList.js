import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import { useStateValue } from "../state";
import _ from "lodash";
import CollapsableListItem from "./CollapsableListItem";
import { makeDuplicateListStyles } from "../styles/styles";
import { deleteDuplicate } from "../actions/actions";

const createItems = (duplicates, deleteAction) => {
  return _.map(duplicates, (value, key) => {
    return (
      <CollapsableListItem
        key={key}
        title={key}
        duplicateItemPaths={value}
        deleteAction={() => deleteAction(key, value)}
      />
    );
  });
};

const DuplicateList = () => {
  const classes = makeDuplicateListStyles();
  const [{ duplicates }, dispatch] = useStateValue();

  const deleteAction = (title, duplicateItemPath) => {
    return () => {
      deleteDuplicate(title, duplicateItemPath).then(action =>
        dispatch(action)
      );
    };
  };

  const items = createItems(duplicates, deleteAction);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
        ></ListSubheader>
      }
      className={classes.root}
    >
      {items}
    </List>
  );
};

export default DuplicateList;
