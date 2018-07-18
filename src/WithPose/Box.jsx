import React, { Component, Fragment } from "react";
import styled from "styled-components";
import posed from "react-pose";

import { Button } from "../components";

const StyledBox = styled.div`
  width: auto;
  height: 100px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;

const PosedBox = posed(StyledBox)({
  closed: {
    width: 0,
    height: 0,
    delay: 100
  },
  open: {
    width: "100%",
    height: "100px",
    delayChildren: 100
  },
  initialPose: "closed"
});

const Content = styled.div`
  padding: 16px;
`;
const PosedContent = posed(Content)({
  closed: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 100
    }
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
        <Button style={{ marginBottom: 16 }} onClick={this.triggerFade}>
          Show content
        </Button>
        <PosedBox pose={boxState}>
          <PosedContent>This is some content</PosedContent>
        </PosedBox>
      </Fragment>
    );
  }
}

export { Box };
