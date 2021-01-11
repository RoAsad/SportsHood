import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import SelectSport from "./SelectSport";
import GoogleMap from "./GoogleMap";

// STYLING COMPONENTS
const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60vw;

  @media screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 60px 60px 60px;
    justify-items: center;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 55px 55px 55px;
    justify-items: center;
  }
`;

const BtnGetMatch = styled.button`
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  width: 150px;
  height: 52px;
  background-color: rgb(110, 94, 254);
  font-size: 17px;
  color: white;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    background: #7aacef;
    color: white;
  }

  @media screen and (max-width: 960px) {
    width: 60vw;
  }
  @media screen and (max-width: 600px) {
    width: 80vw;
  }
`;
// END STYLING COMPONENTS
// ----------------------

export default function InputForm(props) {
  const [sportData, setSportData] = useState("");

  const [cityData, setCityData] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(sportData);
    alert(cityData);




//HANDLE POST REQUEST

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sport: sportData, city: cityData}),
    };

    /*      
    I expect to recieve data in form of:
    [
      {name: 'name', 
      city: 'city', 
      sport: 'aaa', 
      email: 'amail@amail.com', 
      img: 'url' },
      
      {name: 'name', 
      city: 'city', 
      sport: 'aaa2', 
      email: 'amail@amail.com2', 
      img: 'url2' },
    ]

    OR

    if [] then I display message "NO MATCH"
  
    */


    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      // .then((data) => this.setState({ postId: data.id }));

      .then((data) => alert(data));
  };

//END HANDLE POST REQUEST



  return (
    <Form onSubmit={handleSubmit}>
      <SelectSport setSportData={setSportData} />

      <GoogleMap setCityData={setCityData}/>

      <div>
        <BtnGetMatch type="submit">Get your match</BtnGetMatch>
      </div>
    </Form>
  );
}
