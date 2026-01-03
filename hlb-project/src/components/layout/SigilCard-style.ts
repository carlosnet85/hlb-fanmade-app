import styled from "styled-components";
import { pulse, rotate, rotateReverse } from "../../styles/Animations";

export const SigilCardContainer = styled.div<{ $isSelected: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;

  width: ${({ $isSelected }) => ($isSelected ? "90vw" : "100%")};
  height: ${({ $isSelected }) => ($isSelected ? "90vh" : "100%")};
  grid-column: ${({ $isSelected }) => ($isSelected ? "1 / -1" : "auto")};

  transition: ${({ $isSelected }) => ($isSelected ? "none" : "filter 0.4s")};
  cursor: ${({ $isSelected }) => ($isSelected ? "default" : "zoom-in")};

  p {
    display: ${({ $isSelected }) => ($isSelected ? "none" : "flex")};
  }

    &:hover {
      filter: ${({ $isSelected }) => ($isSelected ? "brightness(1)" : "brightness(2)")};

      p {
        animation: ${pulse} 3s infinite linear;
      }
    }

  z-index: var(--layer-2);
`;

export const SigilContainer = styled.div`
  position: relative;
  display: inline-flex;
  place-items: center;
  width: 100%;
  height: 100%;
  transition: transform 500ms, filter 500ms;
  transition-timing-function: ease-in-out;
`;

export const SigilLabel = styled.p`
  font-size: calc(0.7vw + 1.2vh);
  font-weight: 500;
  color: var(--secondary-color);
 
  white-space: nowrap;
  margin: 0;
  display: flex;
  gap: 0.08em;
  align-items: center;
  justify-content: center;
`;

export const SigilLayer = styled.img<{
  $size: string;
  $rotateSpeed: string;
  $reverseRotation?: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  object-fit: contain;
  animation: ${(props) =>
    props.$reverseRotation ? rotateReverse : rotate}
    ${(props) => props.$rotateSpeed} infinite linear;
`;


