import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

import { customAnimationHandler } from "./AnimationHandler/AnimationHandler.ts";
import { Carousel } from "react-responsive-carousel";
import { OptionCard } from "../DiscCard/DiscCard.tsx";
import { CarouselPrevButton } from "./CarouselButtons/CarouselPrevButton/CarouselPrevButton.tsx";
import { CarouselNextButton } from "./CarouselButtons/CarouselNextButton/CarouselNextButton.tsx";
import { discs } from "../../Data/Data.ts";
import { Context } from "../Context/Context.tsx";
import { useContext } from "react";

export const CarouselContainer = styled.main`
    width: 100vw;
    
    display: flex;
    place-items: center; 
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
        showIndicators={true}
        animationHandler={customAnimationHandler}
        swipeable={false}
        renderArrowPrev={(onClickHandler, hasPrev) => (
          <CarouselPrevButton isDisabled={!hasPrev} onClick={onClickHandler} />
        )}
        renderArrowNext={(onClickHandler, hasNext) => (
          <CarouselNextButton isDisabled={!hasNext} onClick={onClickHandler} />
        )}
      >
        {discs.map((disc) => (
          <OptionCard key={disc.id} disc={disc} onAnimation={isAnimating} />
        ))}
      </Carousel>
    </CarouselContainer>
  );
};
