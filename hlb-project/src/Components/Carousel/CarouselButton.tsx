import * as S from "./CarouselButton-style";

import { useContext } from "react";
import { Context } from "../Context/Context";
import { IconType } from "react-icons";

import sound from "../../assets/sounds/change.wav";
import sound2 from "../../assets/sounds/aaa.wav";

interface CarouselButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  ButtonIcon: IconType;
  left?: boolean;
  right?: boolean;
}

export const CarouselButton: React.FC<CarouselButtonProps> = ({
  isDisabled,
  onClick,
  ButtonIcon,
  left,
  right,
}) => {
  
  const audio = new Audio(sound);
  const audio2 = new Audio(sound2);
  const { isAnimating, setIsAnimating } = useContext(Context);

  const handleClick = () => {
    if (!isAnimating) {
      onClick();
      audio.play();
      setTimeout(() => audio2.play(), 500);
      setIsAnimating(!isAnimating);
    }
  };

  return (
    <S.CarouselButton
      disabled={isDisabled}
      onClick={handleClick}
      $active={isAnimating}
      $left={left}
      $right={right}
    >
   
        {<ButtonIcon />}
   
    </S.CarouselButton>
  );
};
