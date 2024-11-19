import * as S from "./InfoContainer-style";
import { FaQuestion } from "react-icons/fa";
import { useContext, useEffect, useState, useRef } from "react";
import { LoadingContext } from "../context/LoadingContext";

const InfoWrapper: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const { isContentLoading } = useContext(LoadingContext);

  const infoContainerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (
      infoContainerRef.current &&
      !infoContainerRef.current.contains(target)
    ) {
      setShowInfo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <S.InfoButton
        $onContentLoad={!isContentLoading}
        $showInfo={showInfo}
        onClick={(e) => {
          e.stopPropagation(); 
          setShowInfo(!showInfo);
        }}
      >
        <FaQuestion />
      </S.InfoButton>
      <S.InfoContainer ref={infoContainerRef} $showInfo={showInfo}>
        <S.InfoText>
          <span>
            Hi there! This is a{" "}
            <a
              href="https://github.com/carlosnet85/hlb-fanmade-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              silly project
            </a>{" "}
            I created just for fun (and, honestly, because I was bored). I want
            to clarify that I do not own any of the assets or images used in
            this project. They are all the property of the band{" "}
            <a
              href="https://www.last.fm/music/Humanity%27s+Last+Breath"
              target="_blank"
              rel="noopener noreferrer"
            >
              Humanity's Last Breath
            </a>
            , specifically from their album{" "}
            <a
              href="https://www.last.fm/music/Humanity%27s+Last+Breath/Ashen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ashen
            </a>
            . This project is purely non-commercial and was made as a personal
            experiment. Please don't smash me.
          </span>
        </S.InfoText>
      </S.InfoContainer>
    </>
  );
};

export default InfoWrapper;
