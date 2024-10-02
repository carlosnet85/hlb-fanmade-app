import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  margin: 0 auto;

  width: clamp(60vw, 40rem, 80vw);
  height: calc(100vh - var(--header-height) - var(--footer-height));

  gap: 2rem;
`;

export const CardLogoContainer = styled.div`
  position: relative;

  display: flex;
  place-items: center;

  width: 100%;
  height: 50%;

  padding: 1rem;

  transition: transform 500ms, filter 500ms;
  transition-timing-function: ease-in-out;
`;

export const DiscLayer = styled.img<{
  $size: string;
  $rotateSpeed: string;
  $reverseRotation?: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);

  width: ${(props) => props.$size};
  height: ${(props) => props.$size};

  object-fit: contain;

  animation: rotate ${(props) => props.$rotateSpeed} infinite linear
    ${(props) => (props.$reverseRotation ? "reverse" : "")};

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export const CardTitle = styled.a<{ $isOnAnimation: boolean }>`
  position: relative;
  font-size: calc(2.5vw + 2vh);
  font-weight: bolder;
  text-decoration: none;

  padding-top: ${(props) => (props.$isOnAnimation ? "4rem" : "0")};

  color: transparent;
  background: linear-gradient(90deg, #d8d2a1 0%, #979169 80%, #d8d2a1 100%);
  background-size: ${(props) =>
    props.$isOnAnimation ? "2000% 2000%" : "200% 200%"};
  background-position: ${(props) =>
    props.$isOnAnimation ? "0% 0%" : "100% 100%"};

  background-clip: text;
  -webkit-background-clip: text;
  white-space: nowrap;

  opacity: ${(props) => (props.$isOnAnimation ? "0" : "1")};
  transition: ${(props) =>
    props.$isOnAnimation
      ? "none"
      : "opacity 550ms, text-shadow 2000ms, background-position 1100ms, background-size 2000ms, transform 1100ms, padding 800ms"};
  transition-timing-function: cubic-bezier(0, 1.18, 1, 0.72);

  text-shadow: ${(props) => (props.$isOnAnimation ? "0 0 90px #d8d2a1" : "")};
  transform: ${(props) => (props.$isOnAnimation ? "scale(1.5)" : "")};

  &:hover {
    span {
      opacity: 0.2;
    }
  }

  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -5vw;

    color: #979169;
    font-weight: bolder;
    font-size: calc(4vw + 2vh);

    opacity: 0;

    transition: opacity 500ms;
  }
`;

export const CardDescription = styled.q<{ $isOnAnimation: boolean }>`
  position: relative;

  color: white;
  font-size: calc(1.35vw + 1.2vh);
  font-weight: 100;
  font-style: italic;

  opacity: ${(props) => (props.$isOnAnimation ? "0" : "1")};

  transition: ${(props) => (props.$isOnAnimation ? "none" : "opacity 500ms")};
  transition-timing-function: ease-in-out;
`;
