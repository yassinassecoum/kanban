import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --purple-primary: #635FC7;
        --purple-secondary: #A8A4FF;
        --black-primary: #000112;
        --black-secondary: #2B2C37; 
        --grey-primary: #3E3F4E;
        --grey-secondary: #828FA3;
        --light-bg:#F4F7FD;
        --dark-bg:#20212C;
        --white : #FFFFFF;
        --red : #EA5555;
        
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Plus Jakarta Sans', sans-serif;
        text-decoration: none;
    } 
    body{
        color: white;
        font-size: 1.2rem;
    }
    #light{
        background-color: var(--light-bg) ;
    }
    #dark{
        background-color: var(--dark-bg) ;
    }

`;

export default GlobalStyle;
