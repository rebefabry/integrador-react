import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --text: #A18276;
        --main-color: #FBACBE;
        --contrast: #B9D2B1;
        --light_brown: #DAC6B5;
        --sand: #F1D6B8;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Quicksand', sans-serif;
        color: var(--text);
    }

    html{
        scroll-behavior: smooth;
        scroll-padding-top: 60px;
    overflow-x: hidden;
    }
`;