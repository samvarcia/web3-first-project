import * as React from "react";
// import { ethers } from "ethers";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
          <span role="img" aria-label=".">
            ☄️
          </span>{" "}
          Send waves and tips
        </div>

        <div className="bio">
          This tool is designed to be the easiest way to wave at someone and
          give them money.
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
