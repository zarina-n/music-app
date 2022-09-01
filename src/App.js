import React, { useState } from "react";
import AppRoutes from "./pages/AppRoutes";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./styles/Theme.styled";
import GlobalStyles from "./styles/GlobalStyles";

export const ThemeContext = React.createContext("theme");

function App() {
  const cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <ThemeProvider theme={darkTheme ? dark : light}>
        <GlobalStyles />
        <AppRoutes user={cookieValue} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
