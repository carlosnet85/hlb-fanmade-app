import styled from "styled-components";
import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";
import bg from "../../assets/background.jpg"

const StyledContainer = styled.section<{  children: React.ReactNode, isContentLoading: boolean, $showBackground: boolean }>`
  min-height: 100vh;
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
    opacity: ${({ $showBackground, isContentLoading }) => ($showBackground && !isContentLoading ? "0.3" : "0")};

    z-index: -1;

    transition: opacity 1.2s;
  }
`;

const Container = ({ children }: { children: React.ReactNode }) => {
  const { isContentLoading, showBackground } = useContext(LoadingContext);

  return <StyledContainer isContentLoading={isContentLoading} $showBackground={showBackground}>{children}</StyledContainer>;
};

export default Container;

