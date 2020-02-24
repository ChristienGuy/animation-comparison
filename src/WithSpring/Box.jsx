import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import useMeasure from "react-use-measure";

import { Button } from "../components";

const StyledBox = styled(animated.div)`
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const Content = styled.div`
  padding: 16px;
`;

const Box = () => {
  const [boxOpen, setBoxOpen] = useState(false);
  const [ref, bounds] = useMeasure();

  const { width, height } = useSpring({
    width: boxOpen ? 100 : 0,
    height: boxOpen ? 100 : 0,
    config: {
      mass: 3,
      tension: 600,
      friction: 80
    }
  });

  return (
    <>
      <Button
        style={{ marginBottom: 16 }}
        onClick={() => setBoxOpen(boxOpen => !boxOpen)}
      >
        Open Box
      </Button>
      <StyledBox
        ref={ref}
        style={{
          width: width.interpolate(width => `${width}%`),
          height: height.interpolate(height => `${height}px`)
        }}
      >
        <Content>Hello there</Content>
      </StyledBox>
      {/* <Spring
        from={{ height: 0, width: 0 }}
        to={{ height: boxOpen ? 100 : 0, width: boxOpen ? 100 : 0 }}
      >
        {({ width, height }) => (
          
        )}
      </Spring> */}
    </>
  );
};

export { Box };
