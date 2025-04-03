import styled from "styled-components";

export const SigilsGrid = styled.div<{
  $showHeader: boolean;
  $onContentLoad: boolean;
}>`
  display: grid;
  justify-content: center;
  align-items: center;

  max-width: 100vw;
  height: 90vh;
  margin-top: ${({ $showHeader }) => ($showHeader ? "var(--header-height)" : "0")};

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

  transition: opacity 3500ms, margin 1000ms ease;
  pointer-events: ${({ $onContentLoad }) => ($onContentLoad ? "auto" : "none")};
`;

export const OptionButton = styled.button<{ $showHeader: boolean }>`
   position: absolute;
    top: 0;
    left: 0;
    display: flex;
    place-content: center;
    place-items: center;

    margin: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(132, 132, 94, 0.6);
    background-color: rgb(0, 0, 0);

    border-radius: 8px;
    color: var(--primary-color);
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
        color: white;
        border-color: white;
    }

    transition: all 300ms;
    transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);

    opacity: ${({ $showHeader }) => ($showHeader ? "1" : "0")};
    pointer-events: ${({ $showHeader }) => ($showHeader ? "all" : "none")};
`;

