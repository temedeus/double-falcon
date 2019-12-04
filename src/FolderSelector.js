import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Box";
import { useStateValue } from "./state";
import { createDuplicateFinderInstance } from "./utils/nativeUtil";
import { addDuplicates } from "./actions/actions";

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
    const instance = createDuplicateFinderInstance(selectedPath);
    const results = instance.scan();

    dispatch(addDuplicates(results));
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
