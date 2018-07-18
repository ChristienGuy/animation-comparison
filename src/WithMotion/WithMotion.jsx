import React, { Component, Fragment } from "react";
import { Motion, spring } from "react-motion";

import { Alert } from "./Alert";
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
        <Motion
          defaultStyle={{ y: -100 }}
          style={{
            y: spring(alertOpen ? 0 : -100, { stiffness: 120, damping: 1 })
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
      </Fragment>
    );
  }
}

export default WithMotion;
