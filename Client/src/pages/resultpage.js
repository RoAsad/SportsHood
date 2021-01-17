import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Images } from "../components";
import { InputFormSearch } from "../components";
import Map from "../components/Map"




const Div = styled.div`
display: flex; 
flex-direction:column; 
background-color:white;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items:center;
grid-gap: 10px;
padding: 10px 10px;


@media (max-width: 500px){
    flex-direction: column;
}
`;

const Button = styled.button`
min-width:90px;
padding:16px, 32px;
border-radius: 4px;
border:none;
background: rgb(110, 94, 254);
color: #fff;
font-size: 18px;
cursor:pointer;
`;

const Div1 = styled.div`
padding-left: 200px;
padding-right: 200px;
`;
const Wrapper= styled.div`
display: flex; 
justify-content: center; 
`


export default function ResultPage( {loggedIn,
    handleSubmit,sportData,
    setSportData,
    cityData,
    setCityData,
  
}) {
    const [users, setUsers] = useState("");

    useEffect((props) => {
        let queryParameter = window.location.href;
        queryParameter = queryParameter.split("=");
        let sportsName = queryParameter[1].replaceAll("%20", ""); 
        sportsName = sportsName.split("&"); 
        sportsName= sportsName[0];
        let city = queryParameter[2].replaceAll("%20", ""); 
        console.log(sportsName, city);
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
            sportsName +
            "&" +
            "city=" +
            city;
          const proxyurl = "";
          fetch(url, requestOptionsGet)
            .then((response) => response.json())
            // .then((data) => this.setState({ postId: data.id }));
      
            .then((data) => {
              console.log("You have sent the request yo yo yo \n\n\n\n\n\n\n\n\n\n\n\n");
              console.log(data);
              setUsers(data);
            })
            .catch(() =>
              console.log(
                "Can’t access response. Blocked by browser?"
              )
            );
      },[]);
  
    return(
        
        <Div>
            <Div>
            {/* <Div1><Images/></Div1> */}
            <Images/>
            </Div>
            <Div>
            <Container>
            {/* <input type="text" placeholder="Sport" name="search"/>
            <input type="text" placeholder="City" name="search"/> */}
            <InputFormSearch    
            sportData={sportData}
            setSportData={setSportData}
            cityData={cityData}
            setCityData={setCityData}
            handleSubmit={handleSubmit}
/>

            <Button >Search</Button>
            
            </Container>
            </Div> 
            <Wrapper>
            <Map/>
            </Wrapper>
            
        </Div>  
    );  
}