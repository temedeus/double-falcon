import React from "react";
import "./App.css";
import FolderSelector from "./FolderSelector";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Double Falcon</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <FolderSelector />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
