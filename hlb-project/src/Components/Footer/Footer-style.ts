import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: var(--footer-height);

  display: flex;
  place-content: space-between;
  place-items: end;

  a {
    text-decoration: none;
    color: transparent;
    background: linear-gradient(45deg, #d8d2a1 0%, #979169 50%, #d8d2a1 100%);
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: bold;

    animation: textSmoothGlow 5s infinite;
  }
`;

export const FooterText = styled.div<{ $rtl?: boolean }>`
  color: white;
  font-size: 1.1rem;
  font-weight: 450;

  padding: 0 0.5rem;

  text-align: ${(props) => (props.$rtl ? "right" : "left")};

  @media screen and (max-width: 1160px) {
    font-size: calc(0.9vw + 0.9vh);

  }
`;
