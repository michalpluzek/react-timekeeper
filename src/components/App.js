import React, { useEffect, useState } from "react";
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
    setActive((prevValue) => !prevValue);
  };

  useEffect(() => {
    if (active) idInterval = setInterval(() => addSecond(), 1000);
    else clearInterval(idInterval);
    return () => clearInterval(idInterval);
  }, [active]);

  return (
    <>
      <h2>{time}</h2>
      <SwitchButton click={handleClick} active={active} />
    </>
  );
};

export default App;
