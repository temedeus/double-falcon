import React from "react";
import "./App.css";
import FolderSelector from "./FolderSelector";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DuplicateList from "./DuplicateList";
import { StateProvider } from "./state";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const App = () => {
  const classes = useStyles();
  const initialState = { blaa: "blaa" };
  const reducer = (state, action) => {
    console.log("action", action);
    switch (action.type) {
      case "setDuplicates":
        return {
          ...action.duplicates
        };

      default:
        return state;
    }
  };

  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Double Falcon</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FolderSelector />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <DuplicateList />
          </Grid>
        </Grid>
      </StateProvider>
    </div>
  );
};

export default App;
