import { makeStyles } from "@material-ui/core/styles";

/**
 * Styles used in collapsible list items.
 */
export const makeCollapsibleListItemStyles = makeStyles(theme => ({
  main: {
    border: "solid 1px"
  },
  nested: {
    paddingLeft: theme.spacing(4),
    textOverflow: "ellipsis",
    backgroundColor: theme.palette.background.paper
  }
}));

/**
 * Styles used in duplicate list.
 */
export const makeDuplicateListStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 650,
    backgroundColor: theme.palette.background.default
  }
}));

/**
 * Styles used in app main layout.
 */
export const makeAppStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
