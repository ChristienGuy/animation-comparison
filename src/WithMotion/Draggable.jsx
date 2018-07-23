import React, { Component } from "react";
import { withGesture } from "react-with-gesture";
import { Motion, spring } from "react-motion";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: auto;
  height: 60px;
  pointer-events: auto;
  transform-origin: 50% 50% 0px;

  padding-left: 32px;
  padding-right: 32px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  margin: 32px 0;
`;

const Slider = styled.div`
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
      <Motion
        style={{
          x: spring(down ? xDelta : 0, { stiffness: 200, damping: 17 })
        }}
      >
        {({ x }) => (
          <Container
            className="item"
            style={{ backgroundColor: xDelta < 0 ? "#FF1C68" : "#14D790" }}
            onMouseUp={this.onMouseUp}
          >
            <div>
              {down && Math.abs(xDelta) > 50
                ? xDelta < 0
                  ? "Cancel"
                  : "Accept"
                : children}
            </div>
            <Slider
              style={{
                transform: `translate3d(${down ? xDelta : x}px,0,0)`
              }}
            />
          </Container>
        )}
      </Motion>
    );
  }
}

// react-spring documentation uses 'react-with-gesture' to handle capturing input on a component.
// This can be replaced with anything else that handles gestures
const DraggableWithGesture = withGesture(Draggable);

export { DraggableWithGesture as Draggable };
