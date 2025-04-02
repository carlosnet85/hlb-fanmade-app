import styled, { keyframes } from "styled-components";

const blink = keyframes`
    50% {
      opacity: 0;
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

const gradientAnimation = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
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

export const LogoContainer = styled.div<{ $onContentLoad: boolean }>`
  display: inline-flex;
  place-content: center;
  height: min(100%, 12vw);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5), transparent);
    background-size: 200% 100%;
    animation: ${gradientAnimation} 1s linear infinite;
    opacity: ${({ $onContentLoad }) => ($onContentLoad ? 0 : 1)};
    transition: opacity 0.5s ease-out;
  }
`;


export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${blink} 200ms steps(1, start) 3;
`;