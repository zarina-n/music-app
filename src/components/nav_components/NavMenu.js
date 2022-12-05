import { Menu, MenuLink, ThemeButton } from './Navigation.styled'
import { useContext } from 'react'
import { ThemeContext } from '../../App'
import Dark from '../../assets/Dark'
import Light from '../../assets/Light'

import { logOut } from '../../features/auth/authSlice'
import { resetSearchedValue } from '../../features/track/trackSlice'
import { useDispatch } from 'react-redux'

function NavMenu({ open }) {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme)
  }

  return (
    <Menu open={open}>
      <ul>
        <li key={1}>
          <MenuLink to="/" onClick={() => dispatch(resetSearchedValue())}>
            Главное
          </MenuLink>
        </li>
        <li key={2}>
          <MenuLink to="/my-tracks">Мой плейлист</MenuLink>
        </li>
        <li key={3}>
          <MenuLink to="/login" onClick={() => dispatch(logOut())}>
            Выйти
          </MenuLink>
        </li>
        <li>
          <ThemeButton onClick={toggleTheme}>
            {darkTheme ? <Dark /> : <Light />}
          </ThemeButton>
        </li>
      </ul>
    </Menu>
  )
}

export default NavMenu
