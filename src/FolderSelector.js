import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Box";
import { StateContext } from "./state";

class FolderSelector extends Component {
  static contextType = StateContext;

  constructor(props) {
    super(props);
    this.state = { selectedPath: undefined };
    this.setPathValue = this.setPathValue.bind(this);
    this.scanFolder = this.scanFolder.bind(this);
  }

  setPathValue() {
    const remote = window.require("electron").remote;
    const mainProcess = remote.require("./main");
    const selectDialog = mainProcess.selectDirectory;

    this.setState({
      selectedPath: selectDialog()[0]
    });
  }

  scanFolder() {
    const [{ duplicates }, dispatch] = this.context;
    const remote = window.require("electron").remote;
    const mainProcess = remote.require("./main");
    const instance = mainProcess.createDuplicateFinder(this.state.selectedPath);
    const results = instance.scan();

    dispatch({
      type: "setDuplicates",
      duplicates: results
    });
  }

  render() {
    return (
      <div>
        <Container color="text.primary">
          <Button
            variant="contained"
            color="default"
            onClick={this.setPathValue}
          >
            Select folder
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={!this.state.selectedPath}
            onClick={this.scanFolder}
          >
            Scan duplicates
          </Button>
        </Container>
        <Container color="text.primary">
          <p>Selected folder: {this.state.selectedPath}</p>
        </Container>
      </div>
    );
  }
}

export default FolderSelector;
