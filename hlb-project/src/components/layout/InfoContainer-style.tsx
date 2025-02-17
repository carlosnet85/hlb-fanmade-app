import styled, { keyframes } from "styled-components";

const buttonSlide = keyframes`
  from {
    transform: translateY(-100px) rotateY(0deg);
  }
  to {
    transform:  translateY(0) rotateY(360deg);
  }
`;

export const InfoContainer = styled.section<{ $showInfo: boolean }>`
  display: flex;
  place-content: center;
  place-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${({ $showInfo }) => ($showInfo ? "1024px" : "0")};
  height: ${({ $showInfo }) => ($showInfo ? "300px" : "0")};

  @media screen and (max-width: 1024px) {
    width: ${({ $showInfo }) => ($showInfo ? "100vw" : "0")};
  }

  z-index: 123;
  background: rgba(0, 0, 0, 0.5);
  border: ${({ $showInfo }) =>
    $showInfo
      ? "10px double var(--primary-color)"
      : "0px double var(--primary-color)"};
  backdrop-filter: blur(1px);

  transition: width 350ms cubic-bezier(0.23, 1, 0.32, 1),
    padding 250ms cubic-bezier(0.23, 1, 0.32, 1) 50ms,
    height 350ms cubic-bezier(0.23, 1, 0.32, 1) 150ms,
    border 800ms cubic-bezier(0.23, 1, 0.32, 1);

  padding: ${({ $showInfo }) => ($showInfo ? "1rem" : "0")};

  overflow: hidden;
`;

export const InfoText = styled.div`
  text-align: justify;
  color: var(--secondary-color);

  font-size: calc(0.8rem + 0.333vw);
`;

export const InfoLink = styled.a`
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: 600;
  text-shadow: 0px 0px 3px var(--primary-color);
`;

export const InfoButton = styled.button<{
  $showInfo: boolean;
  $onContentLoad: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  margin: calc(1rem - 1vh);

  display: flex;
  place-content: center;
  place-items: center;

  svg {
    fill: ${({ $showInfo }) =>
      $showInfo ? "var(--secondary-color)" : "var(--primary-color)"};
    transition: all 350ms;
    transform: ${({ $showInfo }) =>
      $showInfo ? "rotate(180deg)" : "rotate(0deg)"};
  }

  padding: 0.2rem;
  background: ${({ $showInfo }) =>
    $showInfo ? "var(--primary-color)" : "none"};
  border: 3px solid var(--primary-color);
  border-radius: 50%;

  animation: ${(props) => (props.$onContentLoad ? buttonSlide : "none")} 1.1s
    cubic-bezier(0.23, 1, 0.32, 1) forwards 2s;

  transform: translateY(-100px);
  opacity: ${({ $onContentLoad }) => ($onContentLoad ? "1" : "0")};

  transition: all 350ms;
  cursor: pointer;
`;
