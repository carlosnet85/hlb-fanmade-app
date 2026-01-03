import styled from "styled-components";
import { useContext } from "react";
import { UIContext } from "../context/UIContext";
import bg from "../../assets/background.png";
import { LoadingScreen } from "./LoadingScreen";

const StyledContainer = styled.section<{ $onContentLoad: boolean; $showBackground: boolean}>`
  position: relative;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${bg}) no-repeat center center;
    background-size: cover;
    opacity: ${({ $showBackground, $onContentLoad }) =>
      $showBackground && !$onContentLoad ? 0.3 : 0};
    z-index: -1;
    transition: opacity 1.2s;
  }
`;



const Container = ({ children }: { children: React.ReactNode }) => {
  const { isContentLoading, showBackground } = useContext(UIContext);
 
  return (
    <StyledContainer
      $onContentLoad={isContentLoading}
      $showBackground={showBackground}
    >
      <LoadingScreen />
      {children}
    </StyledContainer>
  );
};

export default Container;
