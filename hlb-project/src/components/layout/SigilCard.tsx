import React, { useMemo } from "react";
import * as S from "./SigilCard-style";
import { Sigil } from "../../data/SigilsData";

import sigilLayer01 from "../../assets/sigils/sigilLayer01.png";
import sigilLayer02 from "../../assets/sigils/sigilLayer02.png";
import sigilLayer03 from "../../assets/sigils/sigilLayer03.png";
import sigilLayer04 from "../../assets/sigils/sigilLayer04.png";
import sigilLayer05 from "../../assets/sigils/sigilLayer05.png";

const ALL_LAYERS = [sigilLayer01, sigilLayer02, sigilLayer03, sigilLayer04, sigilLayer05];

interface SigilCardProps {
  sigil: Sigil;
  isSelected: boolean;
  onClick: () => void;
}

const SigilCard: React.FC<SigilCardProps> = ({ sigil, isSelected, onClick }) => {

  const randomLayers = useMemo(() => {
    return [...ALL_LAYERS].sort(() => Math.random() - 0.5).slice(0, 3);
  }, []); 


  return (
    <S.SigilCardContainer $isSelected={isSelected} onClick={onClick}>
      <S.SigilContainer>
        {randomLayers.map((layer, index) => (
          <S.SigilLayer
            key={`${sigil.id}-layer-${index}`}
            src={layer}
            alt=""
            $size={`${100 - index * 10}%`}
            $rotateSpeed={`${55 + index}s`}
            $reverseRotation={index % 2 === 0}
          />
        ))}
        
        <S.SigilLayer
          src={sigil.image}
          alt={sigil.title}
          $size="92%"
          $rotateSpeed="0s"
        />
      </S.SigilContainer>

      <S.SigilLabel>{sigil.title}</S.SigilLabel>
    </S.SigilCardContainer>
  );
};

export default SigilCard;