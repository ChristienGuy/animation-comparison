import React, { Component, Fragment } from "react";

import { Alert } from "./Alert";
import { Draggable } from "./Draggable";
import { Box } from "./Box";

import { Button } from "../components";

class WithPose extends Component {
  state = {
    alertStatus: "closed",
    alertBackgroundColor: "#a643c6",
    alertColor: "#fff",
    message: "",
    alertTimeout: () => {}
  };

  toggleAlert = (message, options = {}) => {
    const { alertTimeout } = this.state;
    const {
      backgroundColor: alertBackgroundColor = "#17c7b6",
      color: alertColor = "#fff"
    } = options;

    clearTimeout(alertTimeout);

    this.setState(() => ({
      message,
      alertBackgroundColor,
      alertColor,
      alertStatus: "open",
      alertTimeout: setTimeout(() => {
        this.setState({
          alertStatus: "closed"
        });
      }, 2000)
    }));
  };

  onAccept = () => {
    this.toggleAlert("ACCEPTED", {
      color: "#fff",
      backgroundColor: "#07d142"
    });
  };

  onDelete = () => {
    this.toggleAlert("DELETED", {
      color: "#fff",
      backgroundColor: "#d20b0b"
    });
  };

  render() {
    const {
      alertStatus,
      alertColor,
      alertBackgroundColor,
      message
    } = this.state;

    return (
      <Fragment>
        <h1>POSE</h1>
        <Alert
          color={alertColor}
          backgroundColor={alertBackgroundColor}
          pose={alertStatus}
        >
          {message}
        </Alert>
        <Button
          style={{ marginBottom: 16 }}
          onClick={() =>
            this.toggleAlert("This is a nice alert, isn't it lovely")
          }
        >
          Show alert
        </Button>

        <Draggable
          style={{ marginBottom: 16 }}
          onAccept={this.onAccept}
          onDelete={this.onDelete}
        />
        <Box />
      </Fragment>
    );
  }
}

export default WithPose;
