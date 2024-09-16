import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;

  height: 4rem;
  
  display: flex;
  justify-content: space-between;
  place-items: center;

  a {
    text-decoration: none;
    color: #959067;
    font-weight: bold;

    animation: textSmoothGlow 5s infinite;
  }
`;

export const FooterText = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 450;

  padding: 0.5rem;

  @media screen and (max-width: 1110px) {
    font-size: 0.85rem;
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const MobileFooterButton = styled.button`
  display: none;

  width: 2.5rem;
  height: 2.5rem;

  font-size: 1.5rem;
  background: black;
  color: #959667;

  position: fixed;
  place-items: center;
  place-content: center;

  bottom: 0;
  left: 0;

  z-index: 9999;
  margin: 0.5rem;

  border-radius: 100%;
  border: 2px solid #959667;

  animation: containerSmoothGlow 5s infinite;

  @media screen and (max-width: 950px) {
    display: block;
  }
`;

export const MobileFooterContainer = styled.div<{ $showText: boolean }>`
    display: none;

    position: absolute;
    top: 0;
    
    width: 100%;
    padding: 1rem;
    text-align: center;

    opacity: ${(props) => (props.$showText ? "1" : "0")};
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: black;
    color: white;

    transition: opacity 500ms ease-in-out;

    @media screen and (max-width: 948px) {
         display: flex;
  }
`;
