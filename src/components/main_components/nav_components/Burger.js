import { useState } from "react";
import { NavBurger } from "../../../styles/Navigation.styled";
import NavMenu from "./NavMenu";

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBurger open={open} onClick={() => setOpen(!open)}>
        {Array.from({ length: 3 }).map(() => (
          <span />
        ))}
      </NavBurger>
      <NavMenu open={open} />
    </>
  );
}

export default Burger;
