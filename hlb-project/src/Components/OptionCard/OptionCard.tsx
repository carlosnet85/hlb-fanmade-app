import * as S from "./OptionCard-style";
import { Disc } from "../../Data/Data";
 
import { LazyLoadImage } from "react-lazy-load-image-component";
import Placeholder from "../../assets/discs/placeholder.png";

interface OptionCardProps {
  disc: Disc;
}

export const OptionCard: React.FC<OptionCardProps> = ({ disc }) => {
  return (
    <S.CardContainer>
      <S.CardLogoContainer href={disc.redirectUrl} target="_blank">
        <S.CardLogo>
          <LazyLoadImage
            src={disc.image}
            alt={disc.title}
            placeholderSrc={Placeholder}
          />
        </S.CardLogo>
      </S.CardLogoContainer>
      <S.CardTitle>{disc.title}</S.CardTitle>
      <S.CardDescription>{disc.description}</S.CardDescription>
    </S.CardContainer>
  );
};
