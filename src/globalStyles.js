import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./utils/constants";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;;
    }

    body {
        background-color: ${colors.background};
    }

    a {
        text-decoration: none;
        color: black;
    }

    .maxWidth {
        max-width: 1200px;
        margin: auto;
    }
`;
