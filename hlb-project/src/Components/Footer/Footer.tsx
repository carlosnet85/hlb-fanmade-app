import * as S from "./Footer-style";

export const Footer: React.FC = () => {
    return ( 
        <S.FooterContainer>
            <S.FooterText>
                <p>Website made by <a href="https://github.com/carlosnet85/hlb-fanmade-app">This guy!</a></p>
                <p> Other than that, pretty much everything belongs to <a href="https://humanitys-last-breath.com/">Humanity's Last Breath. </a></p>
            </S.FooterText>
        </S.FooterContainer>
    );
}