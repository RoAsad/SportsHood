import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import InputForm from "../InputForm/InputForm";
import { FaBasketballBall } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import { Modal } from "/Users/Victor/Downloads/sportHood11/SportsHood/Client/src/components/Modal.js";
import { GlobalStyle } from "/Users/Victor/Downloads/sportHood11/SportsHood/Client/src/components/globalStyles.js";
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

<<<<<<< HEAD
const Navbar = ({ showModal, setModal, closeModal, openModal }) => {
=======
const Container = styled.div`
display:flex;
`;

const Button = styled.button`
min-width:100px;
background: pink;
`;

const Navbar = () => {
>>>>>>> 6f2237dd1b1bdec07f966ab26f9d5b989ee77979
  const [clickBurgerMenu, setClickBurgerMenu] = useState(false);

  const handleClick = () => setClickBurgerMenu(!clickBurgerMenu);


  const [showModal, setShowModal] = useState(false)
  const openModal = () =>{
    setShowModal(prev => !prev)
  }

  return (
    <>
<<<<<<< HEAD
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
=======
    <Modal showModal ={showModal} setShowModal= {setShowModal}/>
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
          <NavbarLogin onClick={openModal}> Log in </NavbarLogin>
        </NavbarItem>
      </NavbarMenu>
    </Nav>
>>>>>>> 6f2237dd1b1bdec07f966ab26f9d5b989ee77979
    </>
  );
};

export default Navbar;
