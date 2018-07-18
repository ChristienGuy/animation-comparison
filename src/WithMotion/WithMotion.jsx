import React, { Component, Fragment } from "react";
import { Motion, spring } from "react-motion";

import { Alert } from "./Alert";
import { Box } from "./Box";
import { Button } from "../components";

class WithMotion extends Component {
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
        <h1>MOTION</h1>
        <Motion
          defaultStyle={{ y: -100 }}
          style={{
            y: spring(alertOpen ? 0 : -100, { stiffness: 250, damping: 20 })
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

        <Button onClick={this.showAlert}>ALERT</Button>
        <p>
          react-motion does not handle dragging, would need to handle it
          ourselves or find another library
        </p>
        <Box />
      </Fragment>
    );
  }
}

export default WithMotion;