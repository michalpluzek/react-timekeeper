import React, { Component } from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";

class App extends Component {
  state = {
    time: 0,
    active: false,
  };

  addSecond = () => {
    this.setState((prev) => ({
      time: ++prev.time,
    }));
  };

  handleClick = () => {
    if (this.state.active) clearInterval(this.idInterval);
    else this.idInterval = setInterval(() => this.addSecond(), 1000);

    this.setState((prev) => ({
      active: !prev.active,
    }));
  };

  render() {
    const { time, active } = this.state;

    return (
      <>
        <h2>{time}</h2>
        <SwitchButton click={this.handleClick} active={active} />
      </>
    );
  }
}

export default App;
