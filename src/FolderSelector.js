import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Box";

class FolderSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPath: undefined };
    this.setPathValue = this.setPathValue.bind(this);
  }

  setPathValue() {
    const remote = window.require("electron").remote;
    const mainProcess = remote.require("./main");
    const selectDialog = mainProcess.selectDirectory;
    this.setState({
      selectedPath: selectDialog()
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
            onClick={() => {}}
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
