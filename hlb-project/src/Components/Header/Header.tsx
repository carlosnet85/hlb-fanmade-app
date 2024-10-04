import * as S from "./Header-style";
import logo from "../../assets/hlb-logo.webp";

export const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
    <S.LogoContainer>
      <a href="https://humanitys-last-breath.com/" target="_blank" >
        <S.Logo src={logo} />
      </a>
    </S.LogoContainer>
    </S.HeaderContainer>
  );
};
