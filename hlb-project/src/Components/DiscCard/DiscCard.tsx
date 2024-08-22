import * as S from "./DiscCard-style";
import { Disc } from "../../Data/Data";

import { LazyLoadImage } from "react-lazy-load-image-component";

interface OptionCardProps {
  disc: Disc;
  onAnimation: boolean;
}

export const OptionCard: React.FC<OptionCardProps> = ({
  disc,
  onAnimation,
}) => {
  return (
    <S.CardContainer>
      <S.CardTitle onAnimation={onAnimation}>{disc.title}</S.CardTitle>
      <S.CardLogoContainer href={disc.redirectUrl} target="_blank">
      

          <LazyLoadImage
            src={disc.image}
            alt={disc.title}
            effect="blur"
           
            />
        
      </S.CardLogoContainer>
      <S.CardDescription onAnimation={onAnimation}>{disc.description}</S.CardDescription>
    </S.CardContainer>
  );
};
