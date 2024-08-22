import styled from "styled-components";

const _Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <_Container>{children}</_Container>;
};
