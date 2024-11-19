import * as S from "./SigilsGrid-style";

import { sigils } from "../../data/SigilsData";
import SigilCard from "./SigilCard";
import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";

const SigilsGrid: React.FC = () => {
 
  const { isContentLoading } = useContext(LoadingContext);

  return (
    <S.SigilsGrid $onContentLoad={!isContentLoading} >
      {sigils.map((sigil) => (
        <SigilCard
          key={sigil.id}
          sigil={sigil}
        />
      ))}
    </S.SigilsGrid>
  );
};

export default SigilsGrid;