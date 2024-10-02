import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --footer-height: 4.5rem;
        --header-height: 4.5rem;
    }
    
    *, *::after, *::before { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;  
    }
 
    body {
        position: relative;
        font-family: "Cinzel", serif;
        background-color: black;
        height: 100vh;

        overflow: hidden;
    }

    @keyframes textSmoothGlow {
            0%, 100% {
                text-shadow: 0 0 0px transparent;
            } 50% {
                text-shadow: 0 0 2px #e9eae0;
            }
        }

    @keyframes containerSmoothGlow {
            0%, 100% {
                box-shadow: 0 0 0px transparent;
            } 50% {
                box-shadow: 0 0 5px #e9eae0;
            }
        }
`

export default GlobalStyle;