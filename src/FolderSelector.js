import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Box";
import { useStateValue } from "./state";
import { ActionTypes } from "./actions/actiontypes";

const FolderSelector = () => {
  const [{ duplicates }, dispatch] = useStateValue();
  const [selectedPath, setSelectedPath] = useState(undefined);

  const setPathValue = () => {
    const remote = window.require("electron").remote;
    const mainProcess = remote.require("./main");
    const selectDialog = mainProcess.selectDirectory;

    setSelectedPath(selectDialog()[0]);
  };

  const scanFolder = () => {
    const remote = window.require("electron").remote;
    const mainProcess = remote.require("./main");
    const instance = mainProcess.createDuplicateFinder(selectedPath);
    const results = instance.scan();

    dispatch({
      type: ActionTypes.ADD_DUPLICATES,
      duplicates: results
    });
  };

  return (
    <div>
      <Container color="text.primary">
        <Button variant="contained" color="default" onClick={setPathValue}>
          Select folder
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={!selectedPath}
          onClick={scanFolder}
        >
          Scan duplicates
        </Button>
      </Container>
      <Container color="text.primary">
        <p>Selected folder: {selectedPath}</p>
      </Container>
    </div>
  );
};

export default FolderSelector;
