import styled from "styled-components";

export const SigilsGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  max-width: 100vw;
  height: 90vh;
 
  grid-template-columns: repeat(2, 1fr);
  transition: grid-template-columns 0.5s ease;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr)
  }

  grid-gap: 1rem;

  overflow: hidden;

  transition: opacity 3500ms, margin 1000ms ease;
`;

