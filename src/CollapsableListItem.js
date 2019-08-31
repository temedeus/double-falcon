import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { forEach } from "lodash";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
    textOverflow: "ellipsis"
  }
}));

const CollapsableListItem = props => {
  const classes = useStyles();
  const { title, duplicates } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const listItems = duplicates => {
    return forEach(duplicates, duplicateItemPath => {
      return (
        <ListItem button className={classes.nested}>
          <ListItemText primary={duplicateItemPath} />
        </ListItem>
      );
    });
  };

  const items = listItems(duplicates);

  return (
    <div>
      <ListItem button onClick={handleClick}>
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
