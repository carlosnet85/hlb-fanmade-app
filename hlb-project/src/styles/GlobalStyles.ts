import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --header-height: 4.5rem;
        --primary-color:rgb(132, 132, 94);
        --secondary-color:rgb(204, 200, 172);
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
    }
`

export default GlobalStyle;
