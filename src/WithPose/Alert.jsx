import styled from "styled-components";
import posed from "react-pose";

const Alert = posed(styled.div`
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
`)({
  open: {
    translateY: 0,
    transition: {
      ease: "easeOut",
      duration: 250
    }
  },
  closed: {
    translateY: "-100%",
    transition: {
      duration: 250
    }
  }
});

Alert.defaultProps = {
  backgroundColor: "#33c5ac",
  color: "#fff"
};
export { Alert };
