import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import { value, transform } from "popmotion";

const { pipe, clamp, interpolate } = transform;

const Wrapper = posed(styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;

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
    left: -200,
    right: 200
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
    translateX: ["x", pipe(interpolate([-80, 80], [-8, 8])), true]
  }
});

class Draggable extends Component {
  x = value(0);
  state = {
    count: 0
  };

  onDragEnd = () => {
    if (this.x > 150) {
      this.props.onDelete();
    } else if (this.x < -150) {
      this.props.onAccept();
    }
  };

  render() {
    const values = { x: this.x };
    const { style } = this.props;
    return (
      <Wrapper style={style} parentValues={values}>
        <Delete parentValues={values}>delete</Delete>
        <Accept parentValues={values}>accept</Accept>
        <DraggableDiv
          onValueChange={{ x: x => (this.x = x) }}
          onDragEnd={this.onDragEnd}
          values={values}
        >
          Drag Me
        </DraggableDiv>
      </Wrapper>
    );
  }
}

export { Draggable };
