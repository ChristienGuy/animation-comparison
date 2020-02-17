import styled from "styled-components";
import { animated } from "react-spring";

const Alert = animated(styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;

  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
`);

export { Alert };
