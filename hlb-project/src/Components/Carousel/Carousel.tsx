import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

import { customAnimationHandler } from "./AnimationHandler.ts";
import { Carousel } from "react-responsive-carousel";
import { OptionCard } from "../SigilCard/SigilCard.tsx";
import { sigils } from "../../Data/Data.ts";
import { Context } from "../Context/Context.tsx";
import { useContext } from "react";
import { CarouselButton } from "./CarouselButton.tsx";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export const CarouselContainer = styled.main`
    width: 100vw;
    display: flex;
    place-content: center;

`
export const DiscsCarousel: React.FC = () => {
  const { isAnimating } = useContext(Context);

  return (
    <CarouselContainer>
      <Carousel
        showArrows
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        animationHandler={customAnimationHandler}
        swipeable={false}
        renderArrowPrev={(onClickHandler, hasPrev) => (
          <CarouselButton isDisabled={!hasPrev} onClick={onClickHandler} ButtonIcon={FaChevronCircleLeft} left  />
        )}
        renderArrowNext={(onClickHandler, hasNext) => (
          <CarouselButton isDisabled={!hasNext} onClick={onClickHandler} ButtonIcon={FaChevronCircleRight} right />
        )}
      >
        {sigils.map((sigil) => (
          <OptionCard key={sigil.id} sigil={sigil} isOnAnimation={isAnimating} />
        ))}
      </Carousel>
    </CarouselContainer>
  );
};
