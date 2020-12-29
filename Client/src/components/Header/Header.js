import React from "react";
import styled from "styled-components";

// STYLING COMPONENTS
const Head = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  /* color: rgb(239, 239, 239); */
  font-size: 2rem;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    align-content: center;
  }
`;

const h1 = styled.h1``;

const RegisterBlock = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    align-content: center;
  }
`;

const RegisterBtn = styled.button`
  margin-left: 10px;
  width: 100px;
  height: 52px;
  height: 45px;
  border: none;
  color: #555555;
  font-size: 17px;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background: #5f9cec;
    color: #fff;
  }
`;

const Paragraph = styled.p`
  text-align: center;
`;
// END STYLING COMPONENTS

export default function Header(props) {
  return (
    <Head>
      <h1>Find Sport Partners</h1>
      <RegisterBlock>
        <Paragraph>Let others know about youself</Paragraph>
        <RegisterBtn onClick={props.changeToLightTheme}>Register</RegisterBtn>
      </RegisterBlock>
      <Paragraph>Type sport name and your city </Paragraph>
    </Head>
  );
}
