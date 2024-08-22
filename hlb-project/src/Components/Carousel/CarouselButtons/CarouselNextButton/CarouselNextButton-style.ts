import styled from "styled-components";

export const CarouselNextButton = styled.button<{
  disabled: boolean;
  $active: boolean;
}>`
  position: absolute;
  top: 50%;
  right: 0;

  background: none;
  border: none;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: ${(props) => (props.$active ? "-1" : "2")};
  color: ${(props) => (props.disabled || props.$active ? "rgba(255, 255, 255, 0.5)" : "#959667")};

  transition: transform 200ms, color 300ms;
  transition-timing-function: ease-in-out;

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    transform: ${(props) => (props.disabled ? "none" : "scale(1.2)")};
  }

  svg {
    font-size: 5rem;
  }

  @media (max-width: 425px) {
    bottom: 0;
    svg {
      font-size: 3rem;
    }
  }
`;
