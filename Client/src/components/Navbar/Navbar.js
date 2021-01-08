import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import InputForm from "../InputForm/InputForm";
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

const Navbar = ({ showModal, setModal, closeModal, openModal }) => {
  const [clickBurgerMenu, setClickBurgerMenu] = useState(false);

  const handleClick = () => setClickBurgerMenu(!clickBurgerMenu);

  return (
    <>
      <Modal showModal={showModal} setModal={setModal} />

      <Nav showModal={showModal} setModal={setModal}>
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
            <NavbarLinks onClick={openModal}>Register</NavbarLinks>
          </NavbarItem>

          <NavbarItem>
            <NavbarLinks to="/">Results</NavbarLinks>
          </NavbarItem>

          <NavbarItem>
            <NavbarLogin>Log in</NavbarLogin>
          </NavbarItem>
        </NavbarMenu>
      </Nav>
    </>
  );
};

export default Navbar;
