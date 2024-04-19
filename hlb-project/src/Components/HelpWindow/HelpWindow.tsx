import * as S from "./HelpWindow-style";

interface HelpWindowProps {
  showInfo: boolean;
}

export const HelpWindow: React.FC<HelpWindowProps> = ({ showInfo }) => {
  return (
    showInfo ?
    <S.WindowContainer>
      <S.ContentContainer>
        <S.HelpTextWrapper>
          <S.HelpText>Just click on a disk to play. Have fun. </S.HelpText>
        </S.HelpTextWrapper>
      </S.ContentContainer>
    </S.WindowContainer>
    : null
  );
};
  
