import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {

        --background-color: rgba(0, 0, 0, 1);
        --primary-color: rgba(148, 144, 103, 1);
        --secondary-color: rgba(202, 200, 179, 1);

        --primary-border-color: rgba(27, 26, 26, 1);

        
        --primary-text-color: var(--secondary-color);
        --secondary-text-color: rgba(168, 165, 133, 1);
        
        
        --header-height: calc(2rem + 2.5vw);
        
        --layer-1: 333;
        --layer-2: 332;
        --layer-3: 331;
    }

    ::selection {
        background: none;
        color: inherit;
    }

    ::moz-selection {
        background: none;
        color: inherit;
    }
    
    *, *::after, *::before { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;  
        font-family: "Cinzel", serif;
    }
 
    body {
        position: relative;
        background-color: black;
        height: 100vh;
        min-width: 100vw;
    }

    @font-face {
        font-family: 'Helvetica'; 
        src: url('/assets/fonts/helvetica-93-black-extended.woff') format('woff'),
             url('/assets/fonts/helvetica-93-black-extended.woff2') format('woff2'),
        font-weight: normal;
        font-style: normal;
        font-display: swap; 
    }

`

export default GlobalStyle;
