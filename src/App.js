import React, { useState } from "react";
import styled from "styled-components";
import WithPose from "./WithPose";
import WithMotion from "./WithMotion";
import WithSpring from "./WithSpring";
import posed from "react-pose";

const AppWrapper = styled.div`
  padding: 10vw;
`;

const Nav = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #17c7b6;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 32px 16px 16px;

  z-index: 100;
`;

const PosedNav = posed(Nav)({
  closed: {
    x: "-100%",
    staggerChildren: 50,
    duration: 100,
    transition: {
      duration: 150
    }
  },
  open: {
    x: "0%",
    delayChildren: 50,
    staggerChildren: 50,
    transition: {
      ease: "easeOut",
      stiffness: 120,
      duration: 150
    }
  },
  initialPose: "closed"
});

const NavButton = styled.input`
  transition: box-shadow 0.2s ease-out;
  height: 40px;
  width: 100%;
  background-color: #fff;
  border: 0;
  box-shadow: inset 0 0 0 1px #000;
  margin: 16px 0;

  &:hover {
    box-shadow: inset 0 0 0 6px #000;
    cursor: pointer;
  }
`;

const PosedNavButton = posed(NavButton)({
  closed: {
    y: -20,
    opacity: 0
  },
  open: {
    y: 0,
    opacity: 1
  },
  initialPose: "closed"
});

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

const NavToggleButton = styled.button`
  background-color: #fff;
  border: 1px solid black;
  outline: none;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 16px;
  top: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const App = () => {
  const [currentView, setCurrentView] = useState("spring");
  const [navState, setNavState] = useState("closed");

  const renderView = () => {
    switch (currentView) {
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

  const onNavigate = e => {
    setCurrentView(e.target.value);
    setNavState("closed");
  };

  const toggleNav = () => {
    setNavState(navState => (navState === "closed" ? "open" : "closed"));
  };

  return (
    <AppWrapper>
      <NavToggleButton onClick={toggleNav}>menu</NavToggleButton>
      <PosedNav pose={navState}>
        <NavToggleButton withParent={false} onClick={toggleNav}>
          menu
        </NavToggleButton>
        <PosedNavButton onClick={onNavigate} value="pose" type="button" />
        <PosedNavButton onClick={onNavigate} value="motion" type="button" />
        <PosedNavButton onClick={onNavigate} value="spring" type="button" />
      </PosedNav>
      <Wrapper>{renderView()}</Wrapper>
    </AppWrapper>
  );
};

export default App;
