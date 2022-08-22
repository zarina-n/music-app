import { Menu, MenuLink } from "./Navigation.styled";

function NavMenu({ open }) {
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
      </ul>
    </Menu>
  );
}

export default NavMenu;
