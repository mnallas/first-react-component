import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button.js";

function App() {
  const [counter, modifyCounter] = useState(0);

  return (
    <div className="App">
      {counter}
      <Button
        float={true}
        size={"large"}
        wavesEffect={true}
        waveColor={"light"}
        color={"blue"}
      >
        <i
          onClick={() => {
            let tempCounter = counter;
            tempCounter++;
            modifyCounter(tempCounter);
          }}
          className="material-icons"
        >
          add
        </i>
      </Button>

      <Button
        float={true}
        size={"large"}
        wavesEffect={true}
        waveColor={"light"}
        color={"blue"}
      >
        <i
          onClick={() => {
            let tempCounter = counter;
            tempCounter--;
            modifyCounter(tempCounter);
          }}
          className="material-icons"
        >
          remove
        </i>
      </Button>
    </div>
  );
}

export default App;
