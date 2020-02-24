/*
  Code adapted from
  https://codesandbox.io/embed/jzn14k0ppy
*/
import React from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";
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

const Slider = styled(animated.div)`
  background-color: cornflowerblue;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const Draggable = () => {
  const [bind, { delta, down }] = useGesture();
  const { x } = useSpring({
    x: down ? delta[0] : 0,
    // Prevents animation if true.
    immediate: name => down && name === "x"
  });

  return (
    <Container
      {...bind()}
      className="item"
      style={{ backgroundColor: delta[0] < 0 ? "#FF1C68" : "#14D790" }}
    >
      <animated.div>{delta[0] < 0 ? "Cancel" : "Accept"}</animated.div>
      <Slider
        style={{
          transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
        }}
      />
    </Container>
  );
};

export { Draggable };
