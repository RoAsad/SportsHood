import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import InputForm from "../InputForm/InputForm";
import { FaBasketballBall } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Login } from "../Login.js";
import { GlobalStyle } from "../globalStyles.js";
import { Link } from "react-router-dom";

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

// const Container = styled.div`
// display:flex;
// `;

// const Button = styled.button`
// min-width:100px;
// background: pink;
// `;

const Navbar = ({
  showModal, 
  setModal, 
  closeModal, 
  openModal,

  showLogin,
  setShowLogin,
  openLogin,
  closeLogin

}) => {

  const [clickBurgerMenu, setClickBurgerMenu] = useState(false);

  const handleClick = () => setClickBurgerMenu(!clickBurgerMenu);


  {
//   //FUNCTIONS AND STATES FOR LOGIN-MODAL
//   const [showLogin, setShowLogin] = useState(false)
 
//   const openLogin = () =>{
//     setShowLogin(prev => !prev)
//   }
//   // END FUNCTIONS AND STATES FOR LOGIN-MODAL
// }
  }
  return (
    <>
    <Modal showModal ={showModal} setModal= {setModal}/>

    <Login showLogin ={showLogin} setShowLogin={setShowLogin}/>


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
          <NavbarLinks onClick={openModal} to="/register">Register</NavbarLinks>
        </NavbarItem>

        <NavbarItem>
          <NavbarLinks to="/results">Results</NavbarLinks>
        </NavbarItem>

        <NavbarItem>
          <NavbarLogin onClick={openLogin}> Log in </NavbarLogin>
        </NavbarItem>
      </NavbarMenu>
    </Nav>
    </>
  );
};

export default Navbar;
