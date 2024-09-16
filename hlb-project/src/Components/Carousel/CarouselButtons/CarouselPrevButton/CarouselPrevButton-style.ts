import styled from "styled-components";

export const CarouselPrevButton = styled.button<{
  disabled: boolean;
  $active: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 0;

  background: none;
  border: none;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => (props.disabled || props.$active ? "0" : "1")};
  z-index: 10;

  cursor: ${(props) => (props.disabled || props.$active ? "normal" : "pointer")};

  transition: opacity 500ms cubic-bezier(0.23, 1, 0.32, 1);

  svg {
    font-size: 5rem;
    border-radius: 100%;
    color: ${(props) =>
      props.disabled || props.$active
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(234, 237, 109, 0.3)"};
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    transition: color 500ms cubic-bezier(0.23, 1, 0.32, 1);

    @media screen and (max-width: 640px) {
      font-size: 4.2rem;
    }
  }
  
`;
