import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-type: "Inter", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-type);
  }

  body {
    line-height: 1;
    -webkit-font-smoothing: antialiase;
    background-color: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme.white}
  }

  ol, ul {
    list-style: none;
  }

  a, text-area, button, input {
    font-size: 1rem;
    font-family: var(--font-type);
  }

  button, a {
    cursor: pointer;
    transition: 0.2s ease-in;
  }

  a {
    text-decoration: none;
    transition: 0.2s ease-in-out;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["gray-500"]};
  }
`;
