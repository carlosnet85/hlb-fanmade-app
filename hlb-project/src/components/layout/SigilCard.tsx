import * as S from "./SigilCard-style";

import sigilLayer01 from "../../assets/sigils/sigilLayer01.png";
import sigilLayer02 from "../../assets/sigils/sigilLayer02.png";
import sigilLayer03 from "../../assets/sigils/sigilLayer03.png";

import { Sigil } from "../../data/SigilsData";

interface SigilCardProps {
  sigil: Sigil;
  isSelected: boolean;
  onClick: () => void;
}

const SigilCard: React.FC<SigilCardProps> = ({
  sigil,
  isSelected,
  onClick,
}) => {
  function handleClick() {
    onClick();

    if (isSelected) {
      window.open(sigil.redirectUrl, "_blank");
    }
  }

  return (
    <S.SigilCardContainer isSelected={isSelected} onClick={handleClick}>
      <S.SigilContainer>
        <S.SigilLayer
          src={sigilLayer01}
          alt="Sigil Logo"
          $size="100%"
          $rotateSpeed="65s"
        />
        <S.SigilLayer
          src={sigilLayer02}
          alt="Sigil Logo"
          $size="90%"
          $rotateSpeed="50s"
          $reverseRotation
        />
        <S.SigilLayer
          src={sigilLayer03}
          alt="Sigil Logo"
          $size="80%"
          $rotateSpeed="45s"
        />
        <S.SigilLayer
          src={sigil.image}
          alt="Sigil Logo"
          $size="92%"
          $rotateSpeed="0s"
        />
      </S.SigilContainer>

      <S.SigilLabel>{sigil.title}</S.SigilLabel>
    </S.SigilCardContainer>
  );
};

export default SigilCard;
