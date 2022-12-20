import React, { useState, useMemo } from 'react'
import AppRoutes from './pages/AppRoutes'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './styles/Theme.styled'
import GlobalStyles from './styles/GlobalStyles'

export const ThemeContext = React.createContext('theme')

function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  const themeValue = useMemo(
    () => ({ darkTheme, setDarkTheme }),
    [darkTheme, setDarkTheme]
  )

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={darkTheme ? dark : light}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
