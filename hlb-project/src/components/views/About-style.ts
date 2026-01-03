import styled from "styled-components";
import { pulse } from "../../styles/Animations";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;

  overflow: hidden;

  color: var(--secondary-text-color);

  font-size: clamp(12px, 0.4vw + 0.4vh + 4px, 14px);
  letter-spacing: 0.03em
`;

export const AnthraciteSigilWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100vw;   
  height: 100vh;  
  max-width: 100vh;

  opacity: 0.85;
  pointer-events: none;
  z-index: 1;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    max-width: 100%;
    max-height: 100%;
    height: auto;

    z-index: var(--layer-2);
    drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
  }

  #img2 {
    animation: rotate 100s infinite linear;
    z-index: var(--layer-3);

    @keyframes rotate {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow: auto;
  padding: 0 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 0 10px;
    margin-top: var(--header-height);
    gap: 1.5rem;
  }

  z-index: var(--layer-1);
`;

export const BoxSeparator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  padding: 1.4rem 1.6rem;
  max-width: 340px;
  width: 100%; 
  box-sizing: border-box;

  border: 1px solid var(--primary-border-color);
  border-left: 3px solid var(--primary-color);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BoxText = styled.p`
  color: var(--secondary-text-color);
  line-height: 1.7;
  margin: 0.3rem 0;
`;

export const BoxTextStrong = styled.strong`
  font-weight: 600;
  color: white;

  animation: ${pulse} 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
;
`;

export const BoxLink = styled.a`
  align-self: flex-start;

  color: white;
  text-decoration: none;
  border-bottom: 1px solid var(--primary-color);
  padding-top: 5px;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const BoxBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;       
    width: 100%;   
    height: 100%; 
    object-fit: fill; 
    z-index: -1;
    filter: brightness(0.2) blur(3px);
    opacity: 0.5;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  user-select: none;

  margin: 0.5rem 0;

  input {
    display: none;
  }

  .custom-box {
    width: 12px;
    height: 12px;
    border: 1px solid var(--primary-color);
    transition: all 0.15s ease;

    transform: rotate(45deg);
    border-radius: 3px;
  }

  input:checked + .custom-box {
    background: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
  }
`;
