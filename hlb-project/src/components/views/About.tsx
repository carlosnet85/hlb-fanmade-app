import React, { useContext } from "react";
import * as S from "./About-style";
import AnthraciteSigilCore from "../../assets/sigils/a.png";
import AnthraciteSigilSunring from "../../assets/sigils/a2.png";
import ashenBG from "../../assets/blurBoxBackgrounds/ashen.webp";
import { UIContext } from "../context/UIContext";
import { useNavigate } from "react-router-dom";
import { sigils } from "../../data/SigilsData";
import { Button } from "../layout/Button";

export const About: React.FC = () => {
    const navigate = useNavigate();

    const {
        showParticles,
        setShowParticles,
        showBackground,
        setShowBackground,
        isImmersiveMode,
        setIsImmersiveMode
    } = useContext(UIContext);

    return (
        <S.AboutContainer>
            <S.AnthraciteSigilWrapper>
                <img src={AnthraciteSigilCore} alt="HLB Sigil" />
                <img src={AnthraciteSigilSunring} id="img2" alt="HLB Sigil" />
            </S.AnthraciteSigilWrapper>

            <S.BoxWrapper>
                <S.BoxSeparator>
                    <S.Box>
                        <S.BoxText>
                            This page is a non-profit accident caused by extreme boredom and a love for thall. This is it, lol

                        </S.BoxText>
                        <S.BoxText>
                            Aside from the code, everything officially belongs to <S.BoxTextStrong>Humanity's Last Breath</S.BoxTextStrong>, with sources available in the project repository.
                        </S.BoxText>

                        <S.BoxLink
                            href="https://humanityslastbreathofficial.bandcamp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SUPPORT THEM HERE
                        </S.BoxLink>

                        <S.BoxLink
                            href="https://github.com/carlosnet85/hlb-fanmade-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PROJECT REPOSITORY
                        </S.BoxLink>

                        <S.BoxBackground src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/rotating-skull/sticker_1.gif?183b1d3b82904e15adc704e54217214d" alt="emoji" />

                    </S.Box>
                    <S.Box>

                        <S.BoxText>
                            Song list on YouTube:
                        </S.BoxText>

                        {sigils.map(({ id, title, redirectUrl }) => (
                            <S.BoxLink key={id} href={redirectUrl} target="_blank" rel="noopener noreferrer">
                                {id}. {title}
                            </S.BoxLink>
                        ))}

                        <S.BoxBackground src={ashenBG} alt="ashen cover background" />
                    </S.Box>


                </S.BoxSeparator>


                <S.BoxSeparator>
                    <S.Box>
                        <S.BoxTextStrong> Some settings for ya:</S.BoxTextStrong>
                        <S.CheckboxLabel>
                            <input
                                type="checkbox"
                                checked={!showBackground}
                                onChange={() => setShowBackground(!showBackground)}
                            />
                            <span className="custom-box" />
                            Clean background
                        </S.CheckboxLabel>

                        <S.CheckboxLabel>
                            <input
                                type="checkbox"
                                checked={showParticles}
                                onChange={() => setShowParticles(!showParticles)}
                            />
                            <span className="custom-box" />
                            Enable particles
                        </S.CheckboxLabel>

                        <S.CheckboxLabel>
                            <input
                                type="checkbox"
                                checked={isImmersiveMode}
                                onChange={() => {
                                    setIsImmersiveMode(!isImmersiveMode);
                                    navigate("/sigils");
                                    alert("Immersive mode hides the UI so you can focus on the sigils, and it will be disabled on page reload. You will be redirected to the main page.");
                                }}
                            />
                            <span className="custom-box" />
                            Immersive mode
                        </S.CheckboxLabel>

                        <Button
                            style={{

                                borderRadius: "10px",
                                padding: "0.5rem 1rem",
                                color: "white",
                            }}
                            onClick={() => navigate("/sigils")}
                        >
                            <span>Return</span>
                        </Button>

                    </S.Box>
                </S.BoxSeparator>
            </S.BoxWrapper>
        </S.AboutContainer>
    );
};
