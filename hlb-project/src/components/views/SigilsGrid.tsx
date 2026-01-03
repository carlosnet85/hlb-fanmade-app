import * as S from "./SigilsGrid-style";
import { sigils } from "../../data/SigilsData";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import SigilCard from "../layout/SigilCard";
import { Button } from "../layout/Button";

const SigilsGrid: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedId = id ? Number(id) : null;

  const firstId = Math.min(...sigils.map(s => s.id));
  const lastId = Math.max(...sigils.map(s => s.id));

  if (selectedId !== null && (isNaN(selectedId) || selectedId < firstId || selectedId > lastId)) {
    return <Navigate to="/" replace />;
  }

  const selectedSigil = sigils.find(s => s.id === selectedId);
  const displayedSigils = selectedSigil ? [selectedSigil] : sigils;

  return (
    <div>
      <S.SigilsGrid>
        {displayedSigils.map(sigil => (
          <SigilCard
            key={sigil.id}
            sigil={sigil}
            onClick={() => navigate(`/sigils/${sigil.id}`)}
            isSelected={sigil.id === selectedId}
          />
        ))}
      </S.SigilsGrid>

      {selectedSigil && (
        <Button
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            marginBottom: "20px",
            borderRadius: "10px",
            padding: "0.5rem 1rem",
            color: "white",
          }}
          onClick={() => navigate("/sigils")}
        >
         <span>Return</span>
        </Button>
      )}
    </div>
  );
};

export default SigilsGrid;
