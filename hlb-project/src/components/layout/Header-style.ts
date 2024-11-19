import styled, { keyframes } from "styled-components";

const blink = keyframes`
    50% {
      opacity: 0;
    }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const scaleDown = keyframes`
  from {
    transform: scale(3);
  }

  to {
    transform: scale(1);
  }
`;

const toTop = keyframes`
  from {
    top: 50%;
    transform: translateY(-50%);
  }

  to {
    top: 0;
    transform: translateY(0);
  }
`;

export const HeaderContainer = styled.header<{ $onContentLoad: boolean }>`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  display: inline-flex;
  place-content: center;
  place-items: center;

  width: 100vw;
  height: var(--header-height);

  animation: ${(props) =>
    props.$onContentLoad ? toTop : "none"} 1000ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
`;

export const LogoContainer = styled.div`
  display: inline-flex;
  place-content: center;

  height: min(100%, 16vw);
  animation: ${scaleDown} 2000ms cubic-bezier(0, 1.18, 1, 0.72) forwards;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
  animation: ${blink} 200ms steps(1, start) 3;
`;

export const LoadingShit = styled.div<{ $onContentLoad: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1rem;
  
  display: flex;
  place-content: center;
  place-items: center;
  gap: 1rem;

  height: 1rem;
  color: var(--primary-color);
  font-size: calc(0.8rem + 0.5vw);
  font-weight: 600;

  &:hover {
    opacity: 1;
  }

  opacity: ${({ $onContentLoad }) => ($onContentLoad ? "0" : "0.65")};

  ${({ $onContentLoad }) =>
    $onContentLoad &&
    `
      pointer-events: none;
  `}

      
  transition: opacity 500ms, bottom 350ms;
  transition-timing-function: ease-in-out;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;
