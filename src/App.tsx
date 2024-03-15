import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { defaultTheme } from "./styles/theme/default";
import { GlobalStyles } from "./styles/global";

import { Router } from "./Router";
import { CyclesContextProvider } from "./context/CyclesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter basename="/ignite-timer">
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
