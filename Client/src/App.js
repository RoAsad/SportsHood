import React, { useRef, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//IMPORT COMPONENTS
import Homepage from "./pages/homepage";
import { Navbar } from "./components";
import { Login } from "./components/Login";
import Modal from "../src/components/Modal/Modal";
import ResultPage from "./pages/resultpage";
import { GlobalStyle } from "./components/globalStyles";
import styled from "styled-components";
import "./App.css";

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
    <BrowserRouter>
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

      <Switch>
        <Route path="/" exact>
          <Homepage
            openModal={openModal}
            showModal={showModal}
            setModal={setModal}
            modalRef={modalRef}
            showLogin={showLogin}
          />
        </Route>

        <Route path="/results">
          <ResultPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
