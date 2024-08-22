import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;  
    }
 
    body {
        position: relative;
        font-family: 'Spectral SC', serif;
        background-color: black;
        height: 100vh;

        overflow-y: hidden;
    }

    @keyframes textSmoothGlow {
            0%, 100% {
                text-shadow: 0 0 0px #000000;
            } 50% {
                text-shadow: 0 0 3px #e9eae0;
            }
        }

    @keyframes containerSmoothGlow {
            0%, 100% {
                box-shadow: 0 0 0px #000000;
            } 50% {
                box-shadow: 0 0 8px #e9eae0;
            }
        }
`

export default GlobalStyle;