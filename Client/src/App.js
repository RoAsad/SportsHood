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
    </Router>
  );
}
