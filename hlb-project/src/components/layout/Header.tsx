import * as S from "./Header-style";
import logo from "../../assets/hlb-logo.png";

import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";
import InfoWrapper from "./InfoContainer";

const Header: React.FC = () => {
  const { isContentLoading } = useContext(LoadingContext);

  return (
    <>
      <S.HeaderContainer $onContentLoad={!isContentLoading}>
        <S.LogoContainer $onContentLoad={!isContentLoading}>
          <S.Logo
            src={logo}
            onClick={() => {
              window.open("https://humanitys-last-breath.com/", "_blank");
            }}
          />
        </S.LogoContainer>
      </S.HeaderContainer>
      <InfoWrapper />
  
    </>
  );
};

export default Header;
