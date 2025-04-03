import styled from "styled-components";

export const SectionInfo = styled.section<{ $isOpen: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${({ $isOpen }) => ($isOpen ? "scale(1) translate(-50%, -50%)" : " scale(0) translate(-50%, -50%)")};
    
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    
    gap: 20px;

    border: 1px solid rgba(132, 132, 94, 0.6);

    background-color: rgba(18, 18, 18, 0.36);
    backdrop-filter: blur(45px);
   -webkit-backdrop-filter: blur(45px);

    filter: blur(${({ $isOpen }) => ($isOpen ? "0" : "28px")});
 
    width: 80%;

    @media (min-width: 768px) {
        width: 75%;
    }

    @media (min-width: 1024px) {
        width: 50%;
    }
    
    border-radius: 8px;
    padding: 1.5rem;
    z-index: 700000;

    transition: transform 600ms, filter 900ms;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
`
export const YappingContainer = styled.span`
   font-size: 1.8323vh;
   text-align: justify;
   color: white;
`

export const SectionInfoButton = styled.button<{ $isOpen: boolean; $onContentLoad: boolean, $showHeader: boolean }>`
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    place-content: center;
    place-items: center;

    margin: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(132, 132, 94, 0.6);
    border-left-width: ${({ $isOpen }) => ($isOpen ? "8px" : "1px")};
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

    opacity: ${({ $onContentLoad, $showHeader }) => ($onContentLoad && $showHeader ? "1" : "0")};
    pointer-events: ${({ $onContentLoad, $showHeader }) => ($onContentLoad && $showHeader ? "all" : "none")};
`

export const ConfigButtonWrapper = styled.div`
    display: flex;
    place-content: center;
    place-items: center;
    gap: 10px;
`

export const ConfigToggleButton = styled.button<{ $isEnabled: boolean }>`
    padding: 0.5rem;
    border: 1px solid rgba(132, 132, 94, 0.6);
    background-color: rgb(0, 0, 0);
    font-size: 1.832vh;
    border-radius: 8px;
    color: white;
    
    cursor: pointer;
    
    opacity: ${props => props.$isEnabled ? "1" : "0.5"};

    transition: opacity 300ms;

    &:hover {
        border-color: white;
    }
    
`