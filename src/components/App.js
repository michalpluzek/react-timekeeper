import React, { Component } from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";

class App extends Component {
  state = {
    time: 0,
    active: false,
  };

  render() {
    const { time } = this.state;

    return (
      <>
        <h2>{time}</h2>
        <SwitchButton />
      </>
    );
  }
}

export default App;
