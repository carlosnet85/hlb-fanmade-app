import { useContext } from "react";
import styled from "styled-components";
import { UIContext } from "../context/UIContext";

interface ButtonProps {
  onClick: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const StyledButton = styled.button<{ $showButton: boolean }>`
  display: ${({ $showButton }) => ($showButton ? "inline-flex" : "none")};
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  cursor: pointer;

  font-size: calc(1rem + 0.55vw);

  color: var(--primary-color);

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  border: 1px solid var(--primary-color);

  transition:
    background .2s ease,
    border-color .3s ease,
    transform .1s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.25);
  }

  &:active {
    transform: translateY(1px);
  }

  z-index: var(--layer-1);
`;

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  style,
}) => {
  const { isImmersiveMode } = useContext(UIContext);

  return (
    <StyledButton
      type="button"
      onClick={onClick}
      style={style}
      $showButton={!isImmersiveMode}
    >
      {children}
    </StyledButton>
  );
};
