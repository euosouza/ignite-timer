import { NavLink } from "react-router-dom";
import { PiTimer, PiScroll } from "react-icons/pi";

import urlLogo from "../../assets/images/logo.svg";

import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={urlLogo} alt="" />

      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <PiTimer />
            </NavLink>
          </li>
          <li>
            <NavLink to="/history">
              <PiScroll />
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
