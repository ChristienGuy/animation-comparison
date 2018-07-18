import React, { Component } from "react";

import { Alert } from "./Alert";
import { Draggable } from "./Draggable";

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
      <div>
        <Alert
          color={alertColor}
          backgroundColor={alertBackgroundColor}
          pose={alertStatus}
        >
          {message}
        </Alert>
        <button
          onClick={() =>
            this.toggleAlert("This is a nice alert, isn't it lovely")
          }
        >
          Alert
        </button>

        <Draggable onAccept={this.onAccept} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default WithPose;
