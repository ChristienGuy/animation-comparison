import React, { Component, Fragment } from "react";
import { Motion, spring } from "react-motion";
import styled from "styled-components";

import { Button } from "../components";

const StyledBox = styled.div`
  width: auto;
  height: 100px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;

class Box extends Component {
  state = {
    boxOpen: false
  };

  render() {
    const { boxOpen } = this.state;

    return (
      <Fragment>
        <Button
          style={{ marginBottom: 16 }}
          onClick={() => this.setState(state => ({ boxOpen: !state.boxOpen }))}
        >
          Open Box
        </Button>
        <Motion
          defaultStyle={{ width: 0, height: 0 }}
          style={{
            width: spring(boxOpen ? 100 : 0),
            height: spring(boxOpen ? 100 : 0)
          }}
        >
          {({ width, height }) => (
            <StyledBox
              style={{
                width: `${width}%`,
                height: `${height}px`
              }}
            />
          )}
        </Motion>
      </Fragment>
    );
  }
}

export { Box };
