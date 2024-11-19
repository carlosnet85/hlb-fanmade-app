import styled from "styled-components";

export const SigilsGrid = styled.div<{ $onContentLoad: boolean }>`
    display: grid;
    place-content: center;
    
    max-width: 100vw;
    height: calc(90vh - var(--header-height));
    margin-top: var(--header-height);
    
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

    grid-gap: 1rem;

    overflow: hidden;

    opacity: ${({ $onContentLoad }) => ($onContentLoad ? "1" : "0")};

    transition: opacity 3500ms;
    pointer-events: ${({ $onContentLoad }) => ($onContentLoad ? "auto" : "none")};
`;
