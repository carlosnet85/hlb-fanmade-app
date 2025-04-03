import * as S from "./SectionInfo-style";
import { useState, useContext, useRef, useEffect } from "react";
import { LoadingContext } from "../context/LoadingContext";
import { BsQuestionSquareFill } from "react-icons/bs";

export const SectionInfo: React.FC = () => {
    const [open, setOpen] = useState(false);

    const { isContentLoading, showBackground, setShowBackground, showParticles, setShowParticles, showHeader, setShowHeader } = useContext(LoadingContext);

    const sectionInfoRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (sectionInfoRef.current && !sectionInfoRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <S.SectionInfoButton $showHeader={showHeader} $isOpen={open} $onContentLoad={!isContentLoading} onClick={(event) => { event.stopPropagation(); setOpen(!open) }}>
                <BsQuestionSquareFill />
            </S.SectionInfoButton>

            <S.SectionInfo ref={sectionInfoRef} $isOpen={open}>
                <S.YappingContainer>
                    Hi there! This is a silly project I created just for fun and out of boredom. I want to clarify that I do not own any of the assets or images used in this project. They are all the property of the band Humanity's Last Breath, specifically from their album Ashen. This project is purely non-commercial and was made as a personal experiment. Please don't smash me.
                </S.YappingContainer>

                <S.ConfigButtonWrapper>
                    <S.ConfigToggleButton $isEnabled={showBackground} onClick={() => setShowBackground(!showBackground)}>
                        Show background
                    </S.ConfigToggleButton>
                    <S.ConfigToggleButton $isEnabled={showParticles} onClick={() => setShowParticles(!showParticles)}>
                        Show particles
                    </S.ConfigToggleButton>
                    <S.ConfigToggleButton $isEnabled={showHeader} onClick={() => { setOpen(false); setShowHeader(!showHeader) }}>
                        Hide buttons
                    </S.ConfigToggleButton>
                </S.ConfigButtonWrapper>
            </S.SectionInfo>
        </>
    );
};
