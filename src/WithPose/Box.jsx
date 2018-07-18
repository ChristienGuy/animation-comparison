import React, { Component, Fragment } from "react";
import styled from "styled-components";
import posed from "../../node_modules/react-pose";

const StyledBox = styled.div`
  width: 300px;
  height: 100px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  /* padding: 16px; */
`;

const PosedBox = posed(StyledBox)({
  closed: {
    width: 0,
    height: 0,
    delay: 100
  },
  open: {
    width: "300px",
    height: "100px",
    delayChildren: 100
  },
  initialPose: "closed"
});

const Content = posed.div({
  closed: {
    opacity: 0,
    y: 20
  },
  open: {
    opacity: 1,
    y: 0
  },
  initialPose: "closed"
});

class Box extends Component {
  state = {
    boxState: "closed"
  };
  triggerFade = () => {
    this.setState(state => ({
      boxState: state.boxState === "open" ? "closed" : "open"
    }));
  };

  render() {
    const { boxState } = this.state;
    return (
      <Fragment>
        <button onClick={this.triggerFade}>fade</button>
        <PosedBox pose={boxState}>
          <Content>This is some content</Content>
        </PosedBox>
      </Fragment>
    );
  }
}

export { Box };
