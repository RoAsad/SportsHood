import React, { useRef, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";

//IMPORT COMPONENTS
import Homepage from "./pages/homepage";
import { Navbar } from "./components";

import { Login } from "./components/Login";
import ModalRegistr from "./components/Modal/ModalRegistr";
import ResultPage from "./pages/resultpage";
import "./App.css";

export default function App() {
  const modalRef = useRef();

  //MODULE-REG  STATES, FUNCTIONS
  const [showModal, setModal] = useState(false);
  const [modalUserInfo, setModalUserInfo] = useState(false);

  const openModal = () => {
    setModal((prev) => !prev);
  };

  const openModalUserInfo = () => {
    alert("Window about the user");
    setModalUserInfo((prev) => !prev);
  };

  //LOG IN STATE
  const [loggedIn, setLoggedIn] = useState(false);

  // MODULE-LOG  STATES, FUNCTIONS
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowLogin((prev) => !prev);
  };
  // END MODULE-LOG  STATES, FUNCTIONS

  //HANDLE LOGIN FUNCTION

  const handleLogin = () => {
    Axios.get("").then((response) => {
      console.log(response.data);
      if (response.data) {
        setLoggedIn(true);
      }
    });
  };
  //END HANDLE LOGIN  FUNCTION
  const [sportData, setSportData] = useState("");
  const [cityData, setCityData] = useState("");
 

  // const [matcNoEmail, setmatcNoEmail] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //IF NOT LOGGED IN:
    //MODAL
    //ELSE:
    //HANDLE GET REQUEST TO REGISTER USER
    console.log("sportData: ", sportData);
    console.log("cityData: ", cityData);

    const requestOptionsGet = {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      headers: { "Content-Type": "application/json" },
    };

    const url =
      "http://localhost:8080/api/v1/findAvailableUsers?sportsName=" +
      sportData +
      "&" +
      "city=" +
      cityData;
    const proxyurl = "";
    fetch(url, requestOptionsGet)
      .then((response) => response.json())
      // .then((data) => this.setState({ postId: data.id }));

      .then((data) => {
        console.log("You have sent the request \n\n\n\n\n\n\n\n\n\n\n\n");
      })
      .catch(() =>
        console.log(
          "Can’t access response. Blocked by browser?"
        )
      );
  };

  return (
    <BrowserRouter>
      <ModalRegistr
        openModal={openModal}
        showModal={showModal}
        setModal={setModal}
        modalRef={modalRef}
        setLoggedIn={setLoggedIn}
        loggedIn={loggedIn}
        handleLogin={handleLogin}
      />

      <Login
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        openLogin={openLogin}
        modalRef={modalRef}
        setLoggedIn={setLoggedIn}
        handleLogin={handleLogin}
      />

      <Navbar
        openModal={openModal}
        showModal={showModal}
        setModal={setModal}
        openModalUserInfo={openModalUserInfo}
        modalUserInfo={modalUserInfo}
        setModalUserInfo={setModalUserInfo}
        modalRef={modalRef}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        openLogin={openLogin}
        setLoggedIn={setLoggedIn}
        loggedIn={loggedIn}
      />
    

      <Switch>
        <Route path="/" exact>
          <Homepage
            modalUserInfo={modalUserInfo}
            openModalUserInfo={openModalUserInfo}
            openModal={openModal}
            showModal={showModal}
            setModal={setModal}
            modalRef={modalRef}
            showLogin={showLogin}
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
            openLogin={openLogin}

            sportData={sportData}
            setSportData={setSportData}
            cityData={cityData}
            setCityData={setCityData}
            handleSubmit={handleSubmit}

          />
        </Route>

        <Route path="/results">
          <ResultPage loggedIn={loggedIn}
          sportData={sportData}
          setSportData={setSportData}
          cityData={cityData}
          setCityData={setCityData}
          handleSubmit={handleSubmit}
/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
