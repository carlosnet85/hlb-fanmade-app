import styled from "styled-components";

export const WindowContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;

  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ContentContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 10rem;

  margin: auto auto;
  background-color: white;

  background: rgba(255, 255, 255, 0.10);

  border-radius: 32px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
`;

export const HelpTextWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem;
`;

export const HelpText = styled.p`
  color: white;
  font-size: 2rem;
`;
