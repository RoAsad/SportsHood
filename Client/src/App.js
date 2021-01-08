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
    </Router>
  );
}
