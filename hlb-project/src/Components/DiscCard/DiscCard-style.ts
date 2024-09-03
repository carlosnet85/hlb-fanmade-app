import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80vw;
  margin: 0 auto;

  padding: 6rem;
  gap: 2rem;

  @media (max-width: 425px) {
    padding: 4rem;
  }
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
  font-size: 8vh;
  font-weight: bolder;
  text-decoration: none;
  height: 6rem;
  color: #959067;
  white-space: nowrap;

  opacity: ${(props) => (props.onAnimation ? "0" : "1")};
  transition: ${(props) =>
    props.onAnimation
      ? "none"
      : "opacity 550ms, margin-right 800ms, text-shadow 800ms, color 950ms"};

  @media (max-width: 640px) {
    font-size: 10vw;
    white-space: normal;
  }
  
  &:hover {
    color: #d8d2a1
  }
`;

export const CardDescription = styled.p<{ onAnimation: boolean }>`
  font-size: 3vh;
  font-weight: 100;
  font-style: italic;
  color: white;

  opacity: ${(props) => (props.onAnimation ? "0" : "1")};
  transition: ${(props) =>
    props.onAnimation ? "none" : "opacity 550ms, margin-right 800ms"};
`;
