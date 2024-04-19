import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 1024px;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  margin: 0 auto;

  @media screen and (max-width: 425px) {
    height: 75vh;
  }
`;

export const CardLogoContainer = styled.a`
  width: 350px;
  height: 350px;

  transition: transform 500ms;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: scale(0.9);
    cursor: pointer;
  }

  @media screen and (max-width: 425px) {
    width: 250px;
    height: 250px;
  }
`;

export const CardLogo = styled.div`
  width: 100%;
  height: 100%;

  filter: drop-shadow(0 0 0.5rem black);

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: rotate 10s infinite linear;
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  font-weight: 550;

  color: white;

  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  padding: 1rem;

  @media screen and (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

export const CardDescription = styled.p`
  position: absolute;
  font-size: 2rem;
  font-weight: 100;
  font-style: italic;

  color: white;

  margin-bottom: 10px;
  bottom: 0;

  text-shadow: 0 0 0.4rem black;

  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: black;

  @media screen and (max-width: 425px) {
    bottom: 40px;
    font-size: 1.3rem;
  }
`;
