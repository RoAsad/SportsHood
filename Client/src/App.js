import React, { useRef, useState } from "react";
import Homepage from "./pages/homepage";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResultPage from "./pages/resultpage";
import styled from "styled-components";
import "./App.css";
import { Login } from "./components/Login";
import Modal from "../src/components/Modal/Modal";
import { GlobalStyle } from "./components/globalStyles";

export default function App() {
  const modalRef = useRef();

  //MODULE-REG  STATES, FUNCTIONS
  const [showModal, setModal] = useState(false);

  const openModal = () => {
    setModal((prev) => !prev);
  };

  // MODULE-LOG  STATES, FUNCTIONS
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowLogin((prev) => !prev);
  };
  // END MODULE-LOG  STATES, FUNCTIONS

  return (
    <Router>
      <Modal
        openModal={openModal}
        showModal={showModal}
        setModal={setModal}
        modalRef={modalRef}
      />

      <Login
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        openLogin={openLogin}
        modalRef={modalRef}
      />

      <Navbar
        openModal={openModal}
        showModal={showModal}
        setModal={setModal}
        modalRef={modalRef}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        openLogin={openLogin}
      />

      <Route path="/">
        <Homepage
          openModal={openModal}
          showModal={showModal}
          setModal={setModal}
          modalRef={modalRef}
          auther={true}
        />
      </Route>

      {
        // <Route path = "/" exact component={Homepage}/>
        // <Route path = "/results" component ={ResultPage}/>
      }
    </Router>
  );
}
