import React from 'react';
import './App.css';

function App() {

  const remote = window.require("electron").remote
  const mainProcess = remote.require('./main')
  const selectDialog = mainProcess.selectDirectory
  console.log(selectDialog)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => selectDialog()}>Select folder</button>
      </header>
    </div>
  );
}

export default App;
