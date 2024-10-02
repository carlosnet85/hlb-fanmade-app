import * as S from "./SigilCard-style";
import sigilLayer01 from "../../assets/sigils/sigilLayer01.png";
import sigilLayer02 from "../../assets/sigils/sigilLayer02.png";
import sigilLayer03 from "../../assets/sigils/sigilLayer03.png";

import { Sigil } from "../../Data/Data";
interface OptionCardProps {
  sigil: Sigil;
  isOnAnimation: boolean;
}

export const OptionCard: React.FC<OptionCardProps> = ({
  sigil,
  isOnAnimation,
}) => {
  return (
    <S.CardContainer>
      <S.CardTitle
        href={sigil.redirectUrl}
        target="_blank"
        $isOnAnimation={isOnAnimation}
      >
        <span>#</span>
        {sigil.title}
      </S.CardTitle>
      <S.CardLogoContainer>
        <S.DiscLayer
          src={sigilLayer01}
          alt="Sigil Logo"
          $size="18rem"
          $rotateSpeed="65s"
        />
        <S.DiscLayer
          src={sigilLayer02}
          alt="Sigil Logo"
          $size="16rem"
          $rotateSpeed="50s"
          $reverseRotation
        />
        <S.DiscLayer
          src={sigilLayer03}
          alt="Sigil Logo"
          $size="14rem"
          $rotateSpeed="45s"
        />
        <S.DiscLayer
          src={sigil.image}
          alt="Sigil Logo"
          $size="16.5rem"
          $rotateSpeed="0s"
        />
      </S.CardLogoContainer>
      <S.CardDescription $isOnAnimation={isOnAnimation}>
        {sigil.description}
      </S.CardDescription>
    </S.CardContainer>
  );
};

