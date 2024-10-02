import styled from "styled-components";

export const CarouselButton = styled.button<{
  disabled: boolean;
  $active: boolean;
  $left?: boolean;
  $right?: boolean;
}>`
  display: ${(props) => (props.disabled ? "none" : "inline-flex")};
  position: absolute;
  top: 50%;
  left: ${(props) => (props.$left ? "0" : "")};
  right: ${(props) => (props.$right ? "0" : "")};

  background: none;
  border: none;

  opacity: ${(props) => (props.disabled || props.$active ? "0" : "1")};
  z-index: ${(props) => (props.disabled || props.$active ? "-1" : "1")};

  transition: transform 800ms, opacity 500ms;
  transition-timing-function: ease;

  cursor: ${(props) => (props.$active ? "default" : "pointer")};

  &:hover {
    transform: scale(0.85);
  }

  svg {
    font-size: calc(3rem + 3.0vw);
    border-radius: 100%;
    color: rgba(234, 237, 109, 0.3);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

  
  }
`;
