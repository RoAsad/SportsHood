import React from "react";
import Homepage from "./pages/Homepage";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Homepage />
    </Router>
  );
}
