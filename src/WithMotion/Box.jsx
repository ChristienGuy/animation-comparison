import React, { Component, Fragment } from "react";
import { Motion, spring } from "react-motion";
import styled from "styled-components";

import { Button } from "../components";

const StyledBox = styled.div`
  width: auto;
  height: 100px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const Content = styled.div`
  padding: 16px;
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
            width: spring(boxOpen ? 100 : 0, { stiffness: 200, damping: 20 }),
            height: spring(boxOpen ? 100 : 0, { stiffness: 200, damping: 20 })
          }}
        >
          {({ width, height }) => (
            <StyledBox
              style={{
                width: `${width}%`,
                height: `${height}px`
              }}
            >
              <Motion
                defaultStyle={{
                  y: 10,
                  opacity: 0
                }}
                style={{
                  y: spring(boxOpen ? 0 : 10, { stiffness: 250, damping: 20 }),
                  opacity: spring(boxOpen ? 1 : 0, {
                    stiffness: 250,
                    damping: 20
                  })
                }}
              >
                {({ opacity, y }) => (
                  <Content style={{ transform: `translateY(${y}px)`, opacity }}>
                    Hello there
                  </Content>
                )}
              </Motion>
            </StyledBox>
          )}
        </Motion>
      </Fragment>
    );
  }
}

export { Box };
