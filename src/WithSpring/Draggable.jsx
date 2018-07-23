/*
  Code adapted from
  https://codesandbox.io/embed/jzn14k0ppy
*/
import React, { Component } from "react";
import { Spring, animated } from "react-spring";
import { withGesture } from "react-with-gesture";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 320px;
  height: 90px;
  pointer-events: auto;
  transform-origin: 50% 50% 0px;
  border-radius: 4px;
  padding-left: 32px;
  padding-right: 32px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  margin-bottom: 32px;
`;

const Slider = styled(animated.div)`
  background-color: cornflowerblue;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

class Draggable extends Component {
  render() {
    const { xDelta, down, children } = this.props;
    return (
      <Spring
        native
        to={{ x: down ? xDelta : 0 }}
        immediate={name => down && name === "x"}
      >
        {({ x }) => (
          <Container
            className="item"
            style={{ backgroundColor: xDelta < 0 ? "#FF1C68" : "#14D790" }}
            onMouseUp={this.onMouseUp}
          >
            <animated.div>
              {down && Math.abs(xDelta) > 50
                ? xDelta < 0
                  ? "Cancel"
                  : "Accept"
                : children}
            </animated.div>
            <Slider
              style={{
                transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
              }}
            />
          </Container>
        )}
      </Spring>
    );
  }
}

// react-spring documentation uses 'react-with-gesture' to handle capturing input on a component.
// This can be replaced with anything else that handles gestures
const DraggableWithGesture = withGesture(Draggable);

export { DraggableWithGesture as Draggable };
