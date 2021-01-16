import React, { useState } from "react";
import styled from "styled-components";
import { InputFormSearch } from "../components";



// STYLING COMPONENTS
// ==================
const HomepageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  /* color: rgb(239, 239, 239); */
  font-size: 2rem;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    margin-top: 3rem;
  }
`;

const h1 = styled.h1`
  text-align: center;

  @media screen and (max-width: 600px) {
    text-align: center;
    margin-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const RegisterBlock = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-self: center;
    font-size: 1.2rem;
  }
`;

const RegisterBtn = styled.button`
  margin-left: 10px;
  width: 110px;
  height: 45px;
  border: none;
  color: #9b9999;
  color: #ffff;
  font-size: 15px;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  font-family: poppins;
  font-weight:400;
  border: 1.5px solid #ffff;
  background: transparent;
  /* text-transform: uppercase; */
  transition: 1s;

  &:hover {
    opacity: 0.2;
  }
  }

  @media screen and (max-width: 600px) {
    width: 30vw;
    height: 10vw;
    align-self: center;
    margin-bottom: 1rem;
  }
`;

const Paragraph1 = styled.p`
  text-align: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 600px) {
    margin-bottom: 0;
  }
`;

const Paragraph2 = styled.p`
  text-align: center;
`;
// END STYLING COMPONENTS
// ======================

export default function Homepage({
  openModal,
  showLogin,
  openLogin,

  loggedIn
}) {
  return (
    <>
      <HomepageStyle>
        <Head>
          <h1>Find Sport Partners</h1>

          <RegisterBlock>
            <Paragraph1>Let others know about youself</Paragraph1>


            {
              // IF LOGGED IN:
                  //:
            }
            <RegisterBtn onClick={openModal}>Register</RegisterBtn>
            { 
            // ELSE:
                  //OPEN MODAL 2 WITH PHRASE "YOU SHOULD LOG IN FIRST"
            }
        
          </RegisterBlock>

          <Paragraph2>Type sport name and your city </Paragraph2>
        </Head>

        {showLogin ? null : <InputFormSearch />}

      </HomepageStyle>
    </>
  );
}
