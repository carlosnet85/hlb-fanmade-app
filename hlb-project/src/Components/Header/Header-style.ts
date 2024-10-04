import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  place-content: center;
  place-items: start;

  width: 100vw;

  height: var(--header-height);

`;

export const LogoContainer = styled.div`
  width: calc(20vh + 10vw);
`;

export const Logo = styled.img`
  max-width: 100%;
  object-fit: contain;
`;
