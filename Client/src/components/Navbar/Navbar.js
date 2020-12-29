import React, { useState } from "react";
import { FaBasketballBall } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Nav,
  NavbarLogo,
  NavbarIcon,
  BurgerMenuIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  NavbarLogin,
} from "./NavbarStyled";

const Navbar = () => {
  const [clickBurgerMenu, setClickBurgerMenu] = useState(false);

  const handleClick = () => setClickBurgerMenu(!clickBurgerMenu);

  return (
    <Nav>
      <NavbarLogo to="/">
        SportsHood <NavbarIcon></NavbarIcon>
      </NavbarLogo>

      <BurgerMenuIcon onClick={handleClick}>
        {clickBurgerMenu ? <FaTimes /> : <AiOutlineMenu />}
      </BurgerMenuIcon>

      <NavbarMenu onClick={handleClick} clickBurgerMenu={clickBurgerMenu}>
        <NavbarItem>
          <NavbarLinks to="/">Home</NavbarLinks>
        </NavbarItem>

        <NavbarItem>
          <NavbarLinks to="/register">Register</NavbarLinks>
        </NavbarItem>

        <NavbarItem>
          <NavbarLinks to="/results">Results</NavbarLinks>
        </NavbarItem>

        <NavbarItem>
          <NavbarLogin>Log in</NavbarLogin>
        </NavbarItem>
      </NavbarMenu>
    </Nav>
  );
};

export default Navbar;