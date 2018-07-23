import React, { Component, Fragment } from "react";
import { Spring } from "react-spring";

import { Alert } from "./Alert";
import { Box } from "./Box";
import { Draggable } from "./Draggable";
import { Button } from "../components";

class WithSpring extends Component {
  state = {
    alertOpen: false
  };

  showAlert = () => {
    this.setState(
      () => ({
        alertOpen: true
      }),
      () => {
        setTimeout(() => {
          this.setState({
            alertOpen: false
          });
        }, 2000);
      }
    );
  };

  render() {
    const { alertOpen } = this.state;

    return (
      <Fragment>
        <h1>SPRING</h1>
        <Spring from={{ y: -100 }} to={{ y: alertOpen ? 0 : -100 }}>
          {styles => (
            <Alert
              backgroundColor="#17c7b6"
              color="#fff"
              style={{
                transform: `translateY(${styles.y}%)`
              }}
            >
              Hello there,
            </Alert>
          )}
        </Spring>
        <Button onClick={this.showAlert}>Show alert</Button>
        <p>Draggable goes here</p>
        <Draggable />
        <Box />
      </Fragment>
    );
  }
}

export default WithSpring;
