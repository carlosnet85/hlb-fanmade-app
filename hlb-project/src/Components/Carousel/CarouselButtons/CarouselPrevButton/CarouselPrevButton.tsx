import * as S from "./CarouselPrevButton-style";

import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import sound from "../../../../assets/sounds/change.mp3";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface CarouselPrevButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

export const CarouselPrevButton: React.FC<CarouselPrevButtonProps> = ({
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
    <S.CarouselPrevButton
      disabled={isDisabled}
      onClick={handleClick}
      $active={isActive}
    >
      {isActive && !isDisabled ? (
        <AiOutlineLoading3Quarters />
      ) : (
        <FaArrowAltCircleLeft />
      )}
    </S.CarouselPrevButton>
  );
};
