import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/ModalRegistr";
import InputForm from "../InputForm/InputFormRegistr";
import { FaBasketballBall } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Login } from "../Login.js";
import { GlobalStyle } from "../globalStyles.js";

import {
  Nav,
  NavbarLogo,
  NavbarIcon,
  BurgerMenuIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  NavbarLogin,
  NavbarLogOut,
} from "./NavbarStyled";

const Navbar = ({
  openModal,
  showLogin,
  setShowLogin,
  openLogin,
  openModalUserInfo,
  modalUserInfo,
  setModalUserInfo,
  setLoggedIn,
  loggedIn,
}) => {
  const [clickBurgerMenu, setClickBurgerMenu] = useState(false);

  const handleClickBurgerMenu = () => setClickBurgerMenu(!clickBurgerMenu);

  return (
    <>
      <Login
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        setLoggedIn={setLoggedIn}
      />

      <Nav>
        <NavbarLogo to="/">
          SportsHood <NavbarIcon></NavbarIcon>
        </NavbarLogo>

        <BurgerMenuIcon onClick={handleClickBurgerMenu}>
          {clickBurgerMenu ? <FaTimes /> : <AiOutlineMenu />}
        </BurgerMenuIcon>

        <NavbarMenu
          onClick={handleClickBurgerMenu}
          clickBurgerMenu={clickBurgerMenu}
        >
          <NavbarItem>
            <NavbarLinks to="/">Home</NavbarLinks>
          </NavbarItem>

          <NavbarItem>
            {
              // if (loggedIn){
            }
            <NavbarLinks onClick={openModal} to="/">
              Register
            </NavbarLinks>
            {
              //}else {
              //OPEN MODAL 2 WITH PHRASE "YOU SHOULD LOG IN FIRST"
            }
          </NavbarItem>

          <NavbarItem>
            <NavbarLinks to="/results">Results</NavbarLinks>
          </NavbarItem>

          <NavbarItem>
            {<NavbarLogOut onClick={openModalUserInfo}>L</NavbarLogOut>}
            {
              // IF LOGGED IN:
              //if (loggedIn) {
              // <NavbarLogOut
              // onClick={openLogout}
              // setLoggedIn={setLoggedIn}
              // loggedIn={loggedIn} />
              //} else {
            }
            {
              // <NavbarLogin onClick={openLogin}> Log in </NavbarLogin>
            }
          </NavbarItem>
        </NavbarMenu>
      </Nav>
    </>
  );
};

export default Navbar;
