import styled from "styled-components";

const Alert = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;

  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
`;

export { Alert };
