import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const rotateReverse = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;

export const SigilCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: opacity .3s, transform .3s, filter .6s;
  transition-timing-function: ease;
  cursor: pointer;

  &:hover {
    filter: brightness(1.5);
  }
`;

export const SigilContainer = styled.div`
  position: relative;
  display: inline-flex;
  place-items: center;
  width: 100%;
  height: 100vh;
  transition: transform 500ms, filter 500ms;
  transition-timing-function: ease-in-out;
`;

export const SigilLabel = styled.p`
  font-size: calc(1vw + 1.2vh);
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  color: var(--secondary-color);
  
  text-shadow: 0px 0px 10px var(--primary-color);
  background: none;
  transition: color 300ms, text-shadow 300ms;
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

