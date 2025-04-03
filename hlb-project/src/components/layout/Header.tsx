import * as S from "./Header-style";
import logo from "../../assets/hlb-logo.png";

import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";

const Header: React.FC = () => {
  const { isContentLoading, showHeader } = useContext(LoadingContext);

  return (
      <S.HeaderContainer $showHeader={showHeader} $onContentLoad={!isContentLoading}>
        <S.LogoContainer $onContentLoad={!isContentLoading}>
          <S.Logo
            src={logo}
            onClick={() => {
              window.open("https://humanitys-last-breath.com/", "_blank");
            }}
          />
        </S.LogoContainer>
      </S.HeaderContainer>
  );
};

export default Header;
