import { StyledNav, Logo } from "./nav_components/Navigation.styled";
import Burger from "./nav_components/Burger";
import { useContext } from "react";

import { ThemeContext } from "../../App";

function Navigation() {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <StyledNav>
      <Logo src={darkTheme ? "img/logo.png" : "img/logo_modal.png"} />
      <Burger />
    </StyledNav>
  );
}

export default Navigation;
