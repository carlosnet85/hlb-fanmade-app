import * as S from "./CarouselNextButton-style";
import { SlArrowRight } from "react-icons/sl";

import sound from "../../../../assets/sounds/change.mp3";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

interface CarouselNextButtonProps {
  onClick: () => void;
  isDisabled: boolean;
}

export const CarouselNextButton: React.FC<CarouselNextButtonProps> = ({
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
    <S.CarouselNextButton
      disabled={isDisabled}
      onClick={handleClick}
      $active={isAnimating}
    >
   
        <SlArrowRight />
   
    </S.CarouselNextButton>
  );
};
