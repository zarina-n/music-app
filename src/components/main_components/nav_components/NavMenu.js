import { Menu, MenuLink, ThemeButton } from "./Navigation.styled";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import Dark from "../../../assets/Dark";
import Light from "../../../assets/Light";

function NavMenu({ open }) {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <Menu open={open}>
      <ul>
        <li key={1}>
          <MenuLink to={"/"}>Главное</MenuLink>
        </li>
        <li key={2}>
          <MenuLink to={"/my-tracks"}>Мой плейлист</MenuLink>
        </li>
        <li key={3}>
          <MenuLink to={"/login"}>Выйти</MenuLink>
        </li>
        <li>
          <ThemeButton onClick={toggleTheme}>
            {darkTheme ? <Dark /> : <Light />}
          </ThemeButton>
        </li>
      </ul>
    </Menu>
  );
}

export default NavMenu;
