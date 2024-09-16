import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: clamp(60vw, 40rem, 80vw);
  height: min(65vh, 80rem);

  gap: 2rem;
`;

export const CardLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35vh;
  height: 35vh;

  padding: 1rem;

  transition: transform 500ms, filter 500ms;
  transition-timing-function: ease-in-out;

  img,
  [role="img"] {
    width: 100%;
    height: 100%;

    object-fit: cover;
    animation: rotate 50s infinite linear;

    border-radius: 100%;

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export const CardTitle = styled.a<{ onAnimation: boolean }>`
  font-size: calc(2.5vw + 2vh);
  font-weight: bolder;
  text-decoration: none;

  color: transparent;
  background: linear-gradient(
    45deg,
    #d8d2a1 0%,
    #fff673 50%,
    #d8d2a1 100%
  );
  background-size: 200% 200%;
  background-position: ${(props) =>
    props.onAnimation ? "0% 0%" : "100% 100%"};
 
  background-clip: text;
  -webkit-background-clip: text;
  white-space: nowrap;

  opacity: ${(props) => (props.onAnimation ? "0" : "1")};
  transition: ${(props) =>
    props.onAnimation
      ? "none"
      : "opacity 550ms, text-shadow 800ms, background-position 1100ms"};
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    background-position: 50% 50%;
  }
`;

export const CardDescription = styled.q<{ onAnimation: boolean }>`
  width: max-content;
  font-size: calc(1.1vw + 1.2vh);
  font-weight: 100;
  font-style: italic;
  color: white;

  opacity: ${(props) => (props.onAnimation ? "0" : "1")};
  transition: ${(props) =>
    props.onAnimation ? "none" : "opacity 550ms"};
`;
