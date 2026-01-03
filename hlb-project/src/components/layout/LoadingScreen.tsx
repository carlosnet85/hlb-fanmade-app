import { useContext } from "react";
import styled from "styled-components";
import { UIContext } from "../context/UIContext";

const StyledLoadingScreen = styled.div<{ $onContentLoad: boolean }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: black;
  color: white;

  opacity: ${({ $onContentLoad }) => $onContentLoad ? "0" : "1"};
  pointer-events: ${({ $onContentLoad }) => $onContentLoad ? "none" : "all"};
  z-index: 9999;

  transition: opacity 0.5s ease-in-out;
`;

const ThallTextForTitleRole = styled.span`
    font-size: calc(2rem + 2.5vw);
    font-family:  'Helvetica', 'Cinzel', serif;
`

const SubTitle = styled.p`
    font-size: calc(0.8rem + 0.5vw);
    opacity: 0.2;
`

export const LoadingScreen: React.FC = () => {

    const { isContentLoading } = useContext(UIContext);

    return (
        <StyledLoadingScreen $onContentLoad={!isContentLoading}>
            <ThallTextForTitleRole>THALL</ThallTextForTitleRole>
            <SubTitle>Loading assets...</SubTitle>
        </StyledLoadingScreen>
    );
};