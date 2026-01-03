import styled from "styled-components";

export const HeaderContainer = styled.header<{ $showHeader: boolean; $onContentLoad: boolean }>`
  display: ${({ $showHeader, $onContentLoad }) => ($showHeader && $onContentLoad ? "flex" : "none")};

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  z-index: var(--layer-3);

  align-items: center;
  justify-content: space-between;

  height: var(--header-height);

  padding: 0 1.7vw;
`;

export const LogoWrapper = styled.div`
  position: relative;
  height: 100%;
  min-width: 120px;
  height: var(--header-height);

  img {
      height: 100%;
      width: auto;
      max-height: 100%;
    }

    &:hover {
      opacity: 0.5;

    }

    transition: opacity 0.2s ease;
    cursor: pointer;
`;

export const DesktopLogo = styled.img`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileLogo = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavGroup = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem; 
  height: 100%;
`;