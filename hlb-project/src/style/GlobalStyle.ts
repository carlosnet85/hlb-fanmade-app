import { createGlobalStyle } from 'styled-components';
import Background from '../assets/background/background.png';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;  
    }

    // not in the mood to lazy load this
 
    body {
        font-family: 'Sedan', sans-serif;
        background-color: black;
        height: 100vh;

        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;

        overflow-y: hidden;

    }
`

export default GlobalStyle;