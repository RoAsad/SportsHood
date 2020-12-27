import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="app-header">
      <h1>Find Sport Partners</h1>
      <div class="register-block">
        <p class="">Let others know about youself</p>
        <button className="register-button" onClick={props.changeToLightTheme}>
          Register
        </button>
      </div>
      <p>Type sport name and your city </p>
    </header>
  );
}
