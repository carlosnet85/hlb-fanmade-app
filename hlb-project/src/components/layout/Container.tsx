import styled from "styled-components";

const Container = styled.section<{  children: React.ReactNode }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
`;

export default Container;

