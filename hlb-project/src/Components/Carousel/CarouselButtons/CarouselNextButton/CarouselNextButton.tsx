import * as S from "./CarouselNextButton-style";
import { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import sound from "../../../../assets/sounds/change.mp3";

interface CarouselNextButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

export const CarouselNextButton: React.FC<CarouselNextButtonProps> = ({
  isDisabled,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);
  const audio = new Audio(sound);

  const handleClick = () => {
    if (!isDisabled) {
      onClick();
      audio.play();
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [isActive]);

  return (
    <S.CarouselNextButton
      disabled={isDisabled}
      onClick={handleClick}
      $active={isActive}
    >
      {isActive && !isDisabled ? (
        <AiOutlineLoading3Quarters />
      ) : (
        <FaArrowAltCircleRight />
      )}
    </S.CarouselNextButton>
  );
};
