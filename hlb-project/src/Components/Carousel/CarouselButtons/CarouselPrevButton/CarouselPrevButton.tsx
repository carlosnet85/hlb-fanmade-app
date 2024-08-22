import * as S from "./CarouselPrevButton-style";
import { SlArrowLeft } from "react-icons/sl";

import sound from "../../../../assets/sounds/change.mp3";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

interface CarouselPrevButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

export const CarouselPrevButton: React.FC<CarouselPrevButtonProps> = ({
  isDisabled,
  onClick,
}) => {
  
  const audio = new Audio(sound);
  const { isAnimating, setIsAnimating } = useContext(Context);

  const handleClick = () => {
    if (!isAnimating) {
      onClick();
      audio.play();
      setIsAnimating(!isAnimating);
    }
  };

  return (
    <S.CarouselPrevButton
      disabled={isDisabled}
      onClick={handleClick}
      $active={isAnimating}
    >

        <SlArrowLeft />
     
    </S.CarouselPrevButton>
  );
};

