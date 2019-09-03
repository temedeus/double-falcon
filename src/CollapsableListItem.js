import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { map } from "lodash";
import { makeCollapsibleListItemStyles } from "./styles/styles";

const CollapsableListItem = props => {
  const classes = makeCollapsibleListItemStyles();
  const { title, duplicates } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const listItems = duplicates => {
    return map(duplicates, duplicateItemPath => {
      return (
        <ListItem button className={classes.nested}>
          <ListItemText primary={duplicateItemPath} />
        </ListItem>
      );
    });
  };

  const items = listItems(duplicates);
  console.log("baaitems", items);
  return (
    <div>
      <ListItem className={classes.main} button onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items}
        </List>
      </Collapse>
    </div>
  );
};

export default CollapsableListItem;
