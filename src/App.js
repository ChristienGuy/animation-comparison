import React, { Component } from "react";
import styled from "styled-components";
import WithPose from "./WithPose";
import WithMotion from "./WithMotion";
import WithSpring from "./WithSpring";

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr 100px;
`;
const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavButton = styled.input`
  transition: box-shadow 0.2s ease-out;
  height: 100%;
  width: 64px;
  background-color: #fff;
  border: 0;
  box-shadow: inset 0 0 0 1px #000;
  margin: 0 16px;

  &:hover {
    box-shadow: inset 0 0 0 6px #000;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  padding: 120px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

class App extends Component {
  state = {
    showing: "pose"
  };

  children = () => {
    switch (this.state.showing) {
      case "pose":
        return <WithPose />;
      case "motion":
        return <WithMotion />;
      case "spring":
        return <WithSpring />;
      default:
        break;
    }
  };

  onNavigate = e => {
    this.setState({
      showing: e.target.value
    });
  };

  render() {
    return (
      <AppWrapper>
        <Nav>
          <NavButton onClick={this.onNavigate} value="pose" type="button" />
          <NavButton onClick={this.onNavigate} value="motion" type="button" />
          <NavButton onClick={this.onNavigate} value="spring" type="button" />
        </Nav>
        <Wrapper>{this.children()}</Wrapper>
      </AppWrapper>
    );
  }
}

export default App;
