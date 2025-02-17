import styled from "styled-components";

export const SigilsGrid = styled.div<{
  $onContentLoad: boolean;
}>`
  display: grid;
  justify-content: center;
  align-items: center;

  max-width: 100vw;
  height: 90vh;
  margin-top: var(--header-height);

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

  opacity: ${({ $onContentLoad }) => ($onContentLoad ? "1" : "0")};

  transition: opacity 3500ms;
  pointer-events: ${({ $onContentLoad }) => ($onContentLoad ? "auto" : "none")};
`;

export const ReturnButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 0;

  display: flex;
  place-content: center;
  place-items: center;

  margin: calc(1rem - 1vh);

  padding: 0.2rem;
  border: 3px solid var(--primary-color);
  background: none;
  color: var(--primary-color);
  font-weight: 800;
  text-align: center;

  cursor: pointer;
`;
