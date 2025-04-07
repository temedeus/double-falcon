import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import FolderSelector from "./FolderSelector";
import DuplicateList from "./duplicateList/DuplicateList";
import { StateProvider } from "./state";
import { duplicateReducer } from "./reducers/duplicateReducer";

const App = () => {
  const initialState = {};

  return (
      <StateProvider initialState={initialState} reducer={duplicateReducer}>
        <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 4 }}>
          <Container maxWidth="md">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="h4" align="center">
                    Double Falcon
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <FolderSelector />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <DuplicateList />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </StateProvider>
  );
};

export default App;
