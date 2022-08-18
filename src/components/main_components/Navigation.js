import { StyledNav, Logo } from "../../styles/Navigation.styled";
import Burger from "./nav_components/Burger";

function Navigation() {
  return (
    <StyledNav>
      <Logo src="img/logo.png" />
      <Burger />
    </StyledNav>
  );
}

export default Navigation;
