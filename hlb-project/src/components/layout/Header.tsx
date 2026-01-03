import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Header-style";

import hlbDesktopLogo from "../../assets/logos/hlb-logo-desktop.png";
import hlbMobileLogo from "../../assets/logos/hlb-logo-mobile.png";

import { UIContext } from "../context/UIContext";
import { Button } from "./Button";
import styled from "styled-components";

const Icon = styled.svg`
  width: 1.2em;
  height: 1.2em;
  fill: currentColor;
`;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isContentLoading, isImmersiveMode } = useContext(UIContext);

  return (
    <S.HeaderContainer
      $showHeader={!isImmersiveMode}
      $onContentLoad={!isContentLoading}
    >
      <S.LogoWrapper onClick={() => navigate("/sigils")}>
        <S.DesktopLogo
          src={hlbDesktopLogo}
          alt="Humanity's Last Breath Logo Desktop"
         
        />
        <S.MobileLogo
          src={hlbMobileLogo}
          alt="Humanity's Last Breath Logo Mobile"
        />
      </S.LogoWrapper>

      <S.NavGroup>
        <Button onClick={() => navigate("/about")} >
            <Icon viewBox="0 0 640 640"><path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 384C302.3 384 288 398.3 288 416C288 433.7 302.3 448 320 448C337.7 448 352 433.7 352 416C352 398.3 337.7 384 320 384zM320 192C301.8 192 287.3 207.5 288.6 225.7L296 329.7C296.9 342.3 307.4 352 319.9 352C332.5 352 342.9 342.3 343.8 329.7L351.2 225.7C352.5 207.5 338.1 192 319.8 192z"/></Icon>
        </Button>
      </S.NavGroup>
    </S.HeaderContainer>
  );
};

export default Header;
