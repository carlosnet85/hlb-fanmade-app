import * as S from "./Header-style";
import logo from "../../assets/hlb-logo.png";

export const Header: React.FC = () => {
  return (
    <S.LogoContainer>
      <S.LogoLink href="https://humanitys-last-breath.com/" >
        <S.Logo src={logo} />
      </S.LogoLink>
    </S.LogoContainer>
  );
};
