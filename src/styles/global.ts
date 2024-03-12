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
    box-sizing: border-box;
    transition: 0.3s ease-in;
  }

  a {
    text-decoration: none;
    transition: 0.3s ease-in-out;
  }

  :focus {
    outline: transparent;
    /* box-shadow: 0 0 0 2px ${({ theme }) => theme["gray-500"]}; */
  }

  *{
    scrollbar-width: thin;
    scrollbar-color: #3A3A41 #5A5A65;
  }

  /* Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #5A5A65;
  }

  *::-webkit-scrollbar-track:hover {
    background-color: #5A5A65;
  }

  *::-webkit-scrollbar-track:active {
    background-color: #5A5A65;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #3A3A41;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #202024;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #202024;
  }
`;
