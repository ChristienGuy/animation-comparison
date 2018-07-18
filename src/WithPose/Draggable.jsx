import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import { value, transform } from "popmotion";

const { pipe, clamp, interpolate } = transform;

const Wrapper = posed(styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;

  width: 120px;
  height: 40px;

  overflow: hidden;
`)({
  passive: {
    backgroundColor: ["x", v => (v >= 0 ? "#FF1C68" : "#14D790"), true]
  }
});

const DraggableDiv = posed(styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  background-color: cornflowerblue;
`)({
  draggable: "x",
  dragBounds: {
    left: -80,
    right: 80
  },
  dragEnd: {
    transition: {
      duration: 250,
      ease: "easeOut"
    }
  }
});

const Delete = posed(styled.div`
  width: 40px;
`)({
  passive: {
    translateX: [
      "x",
      pipe(
        interpolate([-80, 80], [-20, 8]),
        clamp(-20, 8)
      ),
      true
    ]
  }
});

const Accept = posed(styled.div`
  width: 40px;
`)({
  passive: {
    translateX: ["x", pipe(interpolate([-80, 80], [-20, 8])), true]
  }
});

class Draggable extends Component {
  x = value(0);
  state = {
    count: 0
  };

  onDragEnd = () => {
    if (this.x > 50) {
      this.setState(
        state => ({
          count: state.count + 1
        }),
        () => {
          console.log("====================================");
          console.log("DELETE", this.state.count);
          console.log("====================================");
        }
      );
    } else if (this.x < -60) {
      this.setState(
        state => ({
          count: state.count + 1
        }),
        () => {
          console.log("====================================");
          console.log("ACCEPT", this.state.count);
          console.log("====================================");
        }
      );
    }
  };

  render() {
    const values = { x: this.x };
    return (
      <Wrapper parentValues={values}>
        <Delete parentValues={values}>delete</Delete>
        <Accept parentValues={values}>accept</Accept>
        <DraggableDiv
          onValueChange={{ x: x => (this.x = x) }}
          onDragEnd={this.onDragEnd}
          values={values}
        />
      </Wrapper>
    );
  }
}

export { Draggable };
