import styled from 'styled-components'

export const FooterContainer = styled.div`
   position: absolute;
   bottom: 0;
   padding: 0.5rem;
`

export const FooterText = styled.p`
    color: white;
    font-size: 1rem;
    font-weight: 450;
    filter: drop-shadow(0 0 0.5rem black) drop-shadow(0 0 0.5rem black);
 
    a {
        text-decoration: none;
        color: #509046;
        font-weight: bold;
    }

    @media screen and (max-width: 425px) {
        bottom: 3rem;
        font-size: 0.7rem;   
    }
`