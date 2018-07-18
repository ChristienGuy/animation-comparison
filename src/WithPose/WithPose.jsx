import React, { Component } from "react";

import { Alert } from "./Alert";
import { Draggable } from "./Draggable";

class WithPose extends Component {
  state = {
    alertStatus: "closed"
  };

  toggleAlert = () => {
    this.setState({
      alertStatus: "open"
    });
    setTimeout(() => {
      this.setState({
        alertStatus: "closed"
      });
    }, 2000);
  };

  render() {
    const { alertStatus } = this.state;

    return (
      <div>
        <Alert pose={alertStatus}>WARNING THIS IS A WARNING</Alert>
        <button onClick={this.toggleAlert}>Alert</button>

        <Draggable />
      </div>
    );
  }
}

export default WithPose;
