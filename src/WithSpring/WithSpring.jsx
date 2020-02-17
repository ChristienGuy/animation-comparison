import React, { useState } from "react";
import { useSpring } from "react-spring";

import { Alert } from "./Alert";
import { Box } from "./Box";
import { Button } from "../components";
import { Draggable } from "./Draggable";

const WithSpring = () => {
  const [alertOpen, setAlertOpen] = useState(false);

  const { transform } = useSpring({
    transform: `translateY(${alertOpen ? 0 : -100}%)`,
    config: {
      mass: 1,
      tension: 1000,
      friction: 80
    }
  });

  const showAlert = () => {
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 2000);
  };

  return (
    <>
      <h1>SPRING</h1>

      <Alert
        backgroundColor="#17c7b6"
        color="#fff"
        style={{
          transform: transform.interpolate(t => t)
        }}
      >
        Hello there
      </Alert>
      <Button onClick={showAlert}>Show alert</Button>

      <Draggable />
      <Box />
    </>
  );
};

export default WithSpring;
