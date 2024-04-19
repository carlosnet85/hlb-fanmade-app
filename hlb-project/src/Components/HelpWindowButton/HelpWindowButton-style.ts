import styled from "styled-components";

export const HelpButtonContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  padding: 1rem;

  z-index: 1010;
`;

export const HelpButton = styled.button`
  background: none;
  border: none;
  color: #509046;
  filter: drop-shadow(0 0 1rem black);

  svg {
    font-size: 1.8rem;
  }

  &:hover {
    cursor: pointer;
  }
`;