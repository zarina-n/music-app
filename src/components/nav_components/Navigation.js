import { StyledNav, Logo } from './Navigation.styled'
import Burger from './Burger'
import { useNavigate } from 'react-router-dom'

function Navigation() {
  const navigate = useNavigate()

  return (
    <StyledNav>
      <Logo
        src="img/logo.png"
        onClick={() => {
          navigate('/')
        }}
      />
      <Burger />
    </StyledNav>
  )
}

export default Navigation
