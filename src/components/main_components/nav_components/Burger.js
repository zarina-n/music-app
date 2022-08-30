import { useState } from "react";
import { NavBurger } from "./Navigation.styled";
import NavMenu from "./NavMenu";

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBurger open={open} onClick={() => setOpen(!open)}>
        <span key={1} />
        <span key={2} />
        <span key={3} />
      </NavBurger>
      <NavMenu open={open} />
    </>
  );
}

export default Burger;
