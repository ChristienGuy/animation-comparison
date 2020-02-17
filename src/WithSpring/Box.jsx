import React, { useState } from "react";
import { useSpring } from "react-spring";
import styled from "styled-components";
import { Button } from "../components";

const StyledBox = styled.div`
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const Content = styled.div`
  padding: 16px;
`;

const Box = () => {
  const [boxOpen, setBoxOpen] = useState(false);

  const { width, height } = useSpring({
    width: 0,
    height: 0,
    from: {}
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
        style={{
          width: `${width}%`,
          height: `${height}px`
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
