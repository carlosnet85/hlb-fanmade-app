import * as S from "./Footer-style";
import React, { useState } from "react";

import { FaInfo } from "react-icons/fa6";

export const Footer: React.FC = () => {
  const [showText, setShowText] = useState(false);

  return (
    <S.FooterContainer>
      <S.FooterText>
        <p>
          Website made by{" "}
          <a href="https://github.com/carlosnet85/hlb-fanmade-app">This guy!</a>
        </p>
        <p>
          Other than that, pretty much everything belongs to{" "}
          <a href="https://humanitys-last-breath.com/">
            Humanity's Last Breath.{" "}
          </a>
        </p>
      </S.FooterText>
      <S.FooterText>
        <p>Click on the song name to listen to the music!</p>
        <p>
          Be sure to check out their{" "}
          <a href="https://humanityslastbreathofficial.bandcamp.com/album/ashen">
            discography.
          </a>
        </p>
      </S.FooterText>
      
      <S.MobileFooterButton onClick={() => setShowText(!showText)}>
        <FaInfo />
      </S.MobileFooterButton>

      <S.MobileFooterContainer $showText={showText}>
        <p>
          Website made by{" "}
          <a href="https://github.com/carlosnet85/hlb-fanmade-app">This guy!</a>
        </p>
        <p>
          Other than that, pretty much everything belongs to{" "}
          <a href="https://humanitys-last-breath.com/">
            Humanity's Last Breath.{" "}
          </a>
        </p>

        <p>Click on the discs to listen to their music!</p>
        <p>
          Be sure to check out their{" "}
          <a href="https://humanityslastbreathofficial.bandcamp.com/album/ashen">
            discography.
          </a>
        </p>
      </S.MobileFooterContainer>
    </S.FooterContainer>
  );
};
