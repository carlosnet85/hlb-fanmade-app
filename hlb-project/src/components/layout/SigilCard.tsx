import * as S from "./SigilCard-style";

import sigilLayer01 from "../../assets/sigils/sigilLayer01.png";
import sigilLayer02 from "../../assets/sigils/sigilLayer02.png";
import sigilLayer03 from "../../assets/sigils/sigilLayer03.png";
import sigilLayer04 from "../../assets/sigils/sigilLayer04.png";
import sigilLayer05 from "../../assets/sigils/sigilLayer05.png";

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
  function getRandomLayers(layers: string[], count: number) {
    const shuffled = [...layers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomLayers = getRandomLayers(
    [sigilLayer01, sigilLayer02, sigilLayer03, sigilLayer04, sigilLayer05],
    3
  );

  function handleClick() {
    onClick();

    if (isSelected) {
      window.open(sigil.redirectUrl, "_blank");
    }
  }

  return (
    <S.SigilCardContainer isSelected={isSelected} onClick={handleClick}>
      <S.SigilContainer>
        {randomLayers.map((layer) => (
          <S.SigilLayer
            key={layer}
            src={layer}
            alt="Sigil Logo"
            $size={`${100 - randomLayers.indexOf(layer) * 10}%`}
            $rotateSpeed={`${65 - randomLayers.indexOf(layer) * 15}s`}
            $reverseRotation={randomLayers.indexOf(layer) % 2 === 0}
          />
        ))}
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
