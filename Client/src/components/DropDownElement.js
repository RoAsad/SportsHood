import React from "react";
import styled from "styled-components";

export const Row = styled.div`
display:flex;
flex-direction: column;
/* background-color: orange; */
justify-content: center;
padding: 3px 3px;
width: 320px;

@media (max-width: 500px){
    display: flex;
    align-items: center;  
}
`

export const UserDisplay = styled.div`
display:flex;
flex-direction: row;
padding: 5px 2px 0px 2px;
/* background-color: yellow; */
width: 400px;
border: solid;
border-color: #DCDCDC;
border-width: thin;

@media (max-width: 500px){
    flex-direction: column;
    width: 340px;
}

@media (max-width: 370px){
    flex-direction: column;
    width: 300px;
}
`

const Button = styled.button`
display: flex;
justify-content: center;
flex-direction: row-reverse;
align-items: center;
width: 70px;
border:none;
padding: 5px;
`

const BtnWrap = styled.div`
/* background-color: white; */
display: flex; 
align-items: center;
@media (max-width: 500px){
    flex-direction: column;
    padding-bottom: 5px;
}
`
const Color = styled.div`
color: black; 
`


export default function ResultPage(props) {
    return(
            <UserDisplay>
                {/* <BackgroundClr></BackgroundClr> */}
                <Row>
                <Row>
                    <Color>Hello, {props.name}</Color>
                </Row>
                <Row>
                    <Color>Lets play: {props.sports} in {props.city}</Color>
                </Row>
                </Row>
                <BtnWrap>
                <Button>Chat</Button>
                </BtnWrap>   
            </UserDisplay>

        
    );  
}
