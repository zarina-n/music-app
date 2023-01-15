import { StyledNav, Logo } from './Navigation.styled'
import Burger from './Burger'

function Navigation() {
  return (
    <StyledNav>
      <Logo src="img/logo.png" />
      <Burger />
    </StyledNav>
  )
}

export default Navigation
