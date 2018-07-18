import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid black;
  padding: 8px 16px;
`;
const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
