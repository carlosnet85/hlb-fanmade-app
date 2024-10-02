import styled from "styled-components";

const _Container = styled.section<{ $isLoading?: boolean }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  place-content: space-between;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => (props.$isLoading ? "100%" : "0")};
    background: black;
    transition: height 1500ms;

    z-index: 1000;
  }
`;

interface ContainerProps {
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children, isLoading }) => {
  return <_Container $isLoading={isLoading}>{children}</_Container>;
};
