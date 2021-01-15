import React from "react";
import styled from "styled-components";
import { Images } from "../components";


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


export default function ResultPage( {loggedIn, }) {
    return(
        
        <Div>
            <Div>
            {/* <Div1><Images/></Div1> */}
            <Images/>
            </Div>
            <Div>
            <Container>
            <input type="text" placeholder="Sport" name="search"/>
            <input type="text" placeholder="City" name="search"/>
            <Button>Search</Button>
            </Container>
            </Div> 
        </Div>  
    );  
}