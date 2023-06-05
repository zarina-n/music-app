import { Menu, MenuLink, ThemeButton, LngButton } from './Navigation.styled'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../App'
import Dark from '../../assets/Dark'
import Light from '../../assets/Light'

import { logOut } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

function NavMenu({ open }) {
  const { i18n, t } = useTranslation(['home'])

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      i18next.changeLanguage('en')
    }
  }, [])

  const { darkTheme, setDarkTheme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme)
  }

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Menu open={open}>
      <ul>
        <li key={1}>
          <MenuLink to="/">{t('main')}</MenuLink>
        </li>
        <li key={2}>
          <MenuLink to="/my-tracks">{t('myPlaylist')}</MenuLink>
        </li>
        <li>
          {localStorage.getItem('i18nextLng') === 'en' ? (
            <LngButton onClick={() => handleLanguageChange('ru')}>
              {t('lng')}
            </LngButton>
          ) : (
            <LngButton onClick={() => handleLanguageChange('en')}>
              {t('lng')}
            </LngButton>
          )}
        </li>
        <li key={3}>
          <MenuLink
            to="/login"
            onClick={() => {
              dispatch(logOut())
            }}
          >
            {t('logOut')}
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
