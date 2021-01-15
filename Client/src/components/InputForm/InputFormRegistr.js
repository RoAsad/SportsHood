import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import SelectSport from "./SelectSport";
import GoogleMap from "./GoogleMap";
import Axios from "axios";

// STYLING COMPONENTS
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #7aacef;
  background: "red";

  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60vw;
  

  /* @media screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 60px 60px 60px;
    justify-items: center;
  } */

  /* @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 55px 55px 55px;
    justify-items: center;
  } */
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


  






  // const [matcNoEmail, setmatcNoEmail] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(sportData);
    // alert(cityData);


    //HANDLE POST REQUEST TO REGISTER USER
    console.log("sportsData: ", sportData);
    console.log("cityData: ", cityData);
    // curl -d '{sportsName: sportData, city: cityData}' -H 'Content-Type: application/json' http://localhost:8080/api/v1/registerUser;


    const requestOptionsPost = {
      method: "POST",
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sportsName: sportData, city: cityData }),
    };
    // headers('Access-Control-Allow-Origin: your-host');
    // headers('Access-Control-Allow-Credentials: true');
    // headers('Access-Control-Allow-Methods: your-methods like POST,GET');
    // headers('Access-Control-Allow-Headers: content-type or other');
    // headers('Content-Type: application/json');

    //   curl {http://localhost:8080/api/v1/registerUser }-d "{\"city\": cityData, \"sportsName\": sportData"}" -H "Content-Type:application/json"
    // {
    //   "city" : cityData,
    //   "sportsName" : sportData,
    // }
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
    const url = "http://localhost:8080/api/v1/registerUser"
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    fetch(url, requestOptionsPost)
      .then((response) => response.json())
      // .then((data) => this.setState({ postId: data.id }));

      .then((data) => {
        console.log("You have been registered \n\n\n\n\n\n\n\n\n\n\n\n");
      })
      .catch(() => console.log("Can’t access " + "http://localhost:8080/api/v1/registerUser" + " response. Blocked by browser?"));
  };

  //END HANDLE POST REQUEST



  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SelectSport setSportData={setSportData} />

        <GoogleMap setCityData={setCityData} />

        <div>
          <BtnGetMatch type="submit">Get your match</BtnGetMatch>
        </div>
      </Form>
    
      
    </>
  );
}
