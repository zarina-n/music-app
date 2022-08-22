import MENU_DATA from "../../../dummy-data/menu-data";
import { Menu } from "./Navigation.styled";

function NavMenu({ open }) {
  return (
    <Menu open={open}>
      <ul>
        {MENU_DATA.map(({ menuOption, menuOptionID, menuLink }) => (
          <li key={menuOptionID}>
            <a href={menuLink}>{menuOption}</a>
          </li>
        ))}
      </ul>
    </Menu>
  );
}

export default NavMenu;
