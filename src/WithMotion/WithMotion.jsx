import React, { useState } from "react";
import { Motion, spring } from "react-motion";

import { Alert } from "./Alert";
import { Box } from "./Box";
import { Draggable } from "./Draggable";
import { Button } from "../components";

const WithMotion = () => {
  const [alertOpen, setAlertOpen] = useState(false);

  const showAlert = () => {
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 2000);
  };

  return (
    <>
      <h1>MOTION</h1>
      <Motion
        defaultStyle={{ y: -100 }}
        style={{
          y: spring(alertOpen ? 0 : -100, { stiffness: 300, damping: 40 })
        }}
      >
        {value => {
          return (
            <Alert
              style={{
                transform: `translateY(${value.y}%)`
              }}
              backgroundColor="#17c7b6"
              color="#fff"
            >
              MESSAGE
            </Alert>
          );
        }}
      </Motion>

      <Button onClick={showAlert}>ALERT</Button>
      <Draggable />
      <Box />
    </>
  );
};

export default WithMotion;
