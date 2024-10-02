import * as S from "./Footer-style";
export const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterText>
        <p>
          Website made by{" "}
          <a
            href="https://github.com/carlosnet85/hlb-fanmade-app"
            target="_blank"
          >
            This guy!
          </a>
        </p>
        <p>
          Other than that, pretty much everything belongs to{" "}
          <a href="https://humanitys-last-breath.com/" target="_blank">
            Humanity's Last Breath.{" "}
          </a>
        </p>
      </S.FooterText>
      <S.FooterText $rtl>
        <p>Click on the song name to listen it!</p>
        <p>
          Be sure to check out their{" "}
          <a
            href="https://humanityslastbreathofficial.bandcamp.com/album/ashen"
            target="_blank"
          >
            discography.
          </a>
        </p>
      </S.FooterText>
    </S.FooterContainer>
  );
};
