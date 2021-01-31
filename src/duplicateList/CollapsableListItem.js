import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { map } from "lodash";
import { makeCollapsibleListItemStyles } from "../styles/styles";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

const CollapsableListItem = (props) => {
  const classes = makeCollapsibleListItemStyles();
  const { title, duplicateItemPaths, deleteAction } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const listItems = (duplicates) => {
    return map(duplicates, (duplicateItemPath) => {
      return (
        <ListItem key={duplicateItemPath} button className={classes.nested}>
          <ListItemText primary={duplicateItemPath} />
          <ListItemSecondaryAction>
            <DeleteConfirmationDialog
              deletePath={duplicateItemPath}
              deleteAction={() => {
                console.log("blaa", deleteAction);

                deleteAction(title, duplicateItemPath);
              }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
  };

  const items = listItems(duplicateItemPaths);

  return (
    <div>
      <ListItem className={classes.main} button onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse key={title} in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items}
        </List>
      </Collapse>
    </div>
  );
};

export default CollapsableListItem;
