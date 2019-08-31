import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import { useStateValue } from "./state";
import _ from "lodash";
import CollapsableListItem from "./CollapsableListItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 650,
    backgroundColor: theme.palette.background.default
  }
}));

const createItems = duplicates => {
  return _.map(duplicates, (value, key) => {
    return <CollapsableListItem key={key} title={key} duplicates={value} />;
  });
};

const DuplicateList = () => {
  const classes = useStyles();
  const [{ duplicates }] = useStateValue();
  const items = createItems(duplicates);
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
