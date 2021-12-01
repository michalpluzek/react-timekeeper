import React, { useState } from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";

let idInterval;

const App = () => {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);

  const addSecond = () => {
    setTime((prevValue) => prevValue + 1);
  };

  const handleClick = () => {
    if (active) clearInterval(idInterval);
    else idInterval = setInterval(() => addSecond(), 1000);

    setActive((prevValue) => !prevValue);
  };

  return (
    <>
      <h2>{time}</h2>
      <SwitchButton click={handleClick} active={active} />
    </>
  );
};

export default App;
