import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./Carousel-style";
import { customAnimationHandler } from "./AnimationHandler/AnimationHandler.ts";
import { Carousel } from "react-responsive-carousel";
import { OptionCard } from "../OptionCard/OptionCard.tsx";
import { CarouselPrevButton } from "./CarouselButtons/CarouselPrevButton/CarouselPrevButton.tsx";
import { CarouselNextButton } from "./CarouselButtons/CarouselNextButton/CarouselNextButton.tsx";
import { discs } from "../../Data/Data.ts";

export const DemoCarousel: React.FC = () => {
  return (
    <S.CarouselContainer>
      <Carousel
        showArrows
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
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
          <OptionCard key={disc.id} disc={disc} />
        ))}
      </Carousel>
    </S.CarouselContainer>
  );
};
