import * as S from "./Header-style";
import logo from "../../assets/hlb-logo.webp";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";
import InfoWrapper from "./InfoContainer";

const Header: React.FC = () => {
  const { isContentLoading } = useContext(LoadingContext);

  return (
    <>
      <S.HeaderContainer $onContentLoad={!isContentLoading}>
        <S.LogoContainer>
          <S.Logo
            src={logo}
            onClick={() => {
              window.open("https://humanitys-last-breath.com/", "_blank");
            }}
          />
        </S.LogoContainer>
      </S.HeaderContainer>
      <InfoWrapper />
      <S.LoadingShit $onContentLoad={!isContentLoading}>
        Loading content... <AiOutlineLoading3Quarters />
      </S.LoadingShit>
    </>
  );
};

export default Header;
