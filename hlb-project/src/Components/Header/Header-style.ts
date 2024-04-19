import styled from "styled-components";

export const LogoContainer = styled.div`
  max-width: 1024px;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.5rem auto;

  @media screen and (max-width: 425px) {
    height: 3.5rem;
  }
`;

export const LogoLink = styled.a`
  width: 20rem;
  height: 5rem;

  filter: drop-shadow(0 0 2px black);

  transition: transform 500ms;
  
  &:hover {
    transform: scale(1.1) rotate(-10deg);
  }

  @media screen and (max-width: 425px) {
    width: 15rem;
    height: 4rem;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
