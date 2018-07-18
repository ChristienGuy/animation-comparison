import React, { Component, Fragment } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 300px;
  height: 100px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  padding: 16px;
`;

class Box extends Component {
  triggerFade = () => {
    console.log("====================================");
    console.log("FADING");
    console.log("====================================");
  };

  render() {
    return (
      <Fragment>
        <StyledBox>This is some content</StyledBox>
        <button onClick={this.triggerFade}>fade</button>
      </Fragment>
    );
  }
}

export { Box };
