import React from "react";
import "./App.css";
import FolderSelector from "./FolderSelector";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DuplicateList from "./duplicateList/DuplicateList";
import { StateProvider } from "./state";
import { makeAppStyles } from "./styles/styles";
import { duplicateReducer } from "./reducers/duplicateReducer";

const App = () => {
  const classes = makeAppStyles();
  const initialState = {};

  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={duplicateReducer}>
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
