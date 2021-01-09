<<<<<<< HEAD
import React, { useRef, useState } from "react";
import Homepage from "./pages/Homepage";
import { Navbar, SelectCityNpm } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Modal from "../src/components/Modal/Modal";

export default function App() {
  const modalRef = useRef();

  const [showModal, setModal] = useState(false);

  const openModal = () => {
    setModal((prev) => !prev);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setModal(false);
    }
  };

  return (
    <Router>
      <Modal
        openModal={openModal}
        showModal={showModal}
        setModal={setModal}
        closeModal={closeModal}
        modalRef={modalRef}
      />

      <Navbar
        openModal={openModal}
        showModal={showModal}
        setModal={setModal}
        closeModal={closeModal}
        modalRef={modalRef}
      />

      <Homepage
        openModal={openModal}
        showModal={showModal}
        setModal={setModal}
        closeModal={closeModal}
        modalRef={modalRef}
      />
=======
import React, {useState} from "react";
import Homepage from "./pages/homepage";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResultPage from "./pages/resultpage";
import styled from "styled-components";
import "./App.css";
import { Modal } from "./components/Modal";
import { GlobalStyle } from "./components/globalStyles";

const Container = styled.div`
display:flex;
`;

const Button = styled.button`
min-width:100px;
background: pink;
`;

export default function App() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () =>{
    setShowModal(prev => !prev)

  }

  return (
    <Router>
      <Navbar />
      <Route path = "/" exact component={Homepage}/>
      <Route path = "/results" component ={ResultPage}/>
>>>>>>> 6f2237dd1b1bdec07f966ab26f9d5b989ee77979
    </Router>
  );
}
