import React, { Component, Fragment } from "react";
import { Spring } from "react-spring";
import styled from "styled-components";
import { Button } from "../components";

const StyledBox = styled.div`
  ${({ styles: { width, height } }) => `
      width: ${width}%;
      height: ${height}px;
    `};
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const Content = styled.div`
  padding: 16px;
`;

class Box extends Component {
  state = {
    boxOpen: false
  };

  toggleBox = () => {};

  render() {
    const { boxOpen } = this.state;
    return (
      <Fragment>
        <Button
          style={{ marginBottom: 16 }}
          onClick={() => this.setState(state => ({ boxOpen: !state.boxOpen }))}
        >
          Open Box
        </Button>
        <Spring
          from={{ height: 0, width: 0 }}
          to={{ height: boxOpen ? 100 : 0, width: boxOpen ? 100 : 0 }}
        >
          {styles => (
            <StyledBox styles={styles}>
              <Content>Hello there</Content>
            </StyledBox>
          )}
        </Spring>
      </Fragment>
    );
  }
}

export { Box };
