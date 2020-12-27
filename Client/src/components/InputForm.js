import React from "react";
import "./InputForm.css";

export default function InputForm() {
  return (
    <form>
      <div>
        <input
          className="search-sport"
          type="text"
          placeholder="sport"
          name="search"
        />
        <button type="submit">
          <i class="fas fa-search"></i>
        </button>
      </div>

      <div>
        <input
          className="search-city"
          type="text"
          placeholder="city"
          name="search"
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div>
        <button className="button-match">Get your match</button>
      </div>
    </form>
  );
}
