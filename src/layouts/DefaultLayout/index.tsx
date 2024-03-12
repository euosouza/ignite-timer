import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import { LayoutContainer, Wrapper } from "./styles";

export function DefaultLayout() {
  return(
    <Wrapper>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </Wrapper>
  );
}
