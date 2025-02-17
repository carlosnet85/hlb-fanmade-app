import * as S from "./SigilsGrid-style";
import { Sigil, sigils } from "../../data/SigilsData";
import { useContext, useRef, useState } from "react";
import { LoadingContext } from "../context/LoadingContext";

import SigilCard from "./SigilCard";

const SigilsGrid: React.FC = () => {
  const { isContentLoading } = useContext(LoadingContext);
  const selectedSigil = useRef<Sigil | null>(null);
  const [showAll, setShowAll] = useState<boolean>(true);

  const handleSigilClick = (sigil: Sigil) => {
    selectedSigil.current = sigil;
    setShowAll(false);
  };

  const handleClearSelection = () => {
    selectedSigil.current = null;
    setShowAll(true);
  };

  const displayedSigils = showAll ? sigils : sigils.filter(sigil => sigil.id === selectedSigil.current?.id);

  return (
    <div>
      <S.SigilsGrid $onContentLoad={!isContentLoading}>
        {displayedSigils.map((sigil) => (
          <SigilCard
            key={sigil.id}
            sigil={sigil}
            onClick={() => handleSigilClick(sigil)}
            isSelected={sigil.id === selectedSigil.current?.id}
          />
        ))}
      </S.SigilsGrid>
      {!showAll && (
        <S.ReturnButton onClick={handleClearSelection}>Return</S.ReturnButton>
      )}
    </div>
  );
};

export default SigilsGrid;