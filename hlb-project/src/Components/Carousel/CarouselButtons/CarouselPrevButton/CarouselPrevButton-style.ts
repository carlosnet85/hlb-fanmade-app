import styled from "styled-components";

export const CarouselPrevButton = styled.button<{
  disabled: boolean;
  $active: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 20px;

  background: none;
  border: none;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: ${(props) => (props.$active ? "-1" : "2")};
  color: ${(props) => (props.disabled ? "rgba(255, 255, 255, 0.5)" : "white")};
 
  animation: ${(props) => (props.$active && !props.disabled ? "rotate 500ms infinite linear" : "none")};

  transition: transform 200ms, color 300ms;
  transition-timing-function: ease-in-out;

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    transform: ${(props) => (props.disabled ? "none" : "scale(1.2)")};
  }

  svg {
    font-size: 5rem;
  }

  @media screen and (max-width: 425px) {
    top: 67.5%;
    left: 8px;

    svg {
      font-size: 3.5rem;
    }
  }
`;
