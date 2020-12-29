import React from "react";
import styled from "styled-components";

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

const InputSport = styled.input`
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  background: white;

  ::placeholder {
    color: rgb(211, 208, 208);
  }

  @media screen and (max-width: 960px) {
    width: 60vw;

    ::placeholder {
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    width: 80vw;
    padding: 0.4rem;
    font-size: 2rem;

    ::placeholder {
      text-align: center;
      font-size: 1.3rem;
    }
  }
`;

const InputCity = styled.input`
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  background: white;
  width: 20vw;

  ::placeholder {
    color: rgb(211, 208, 208);
  }

  @media screen and (max-width: 960px) {
    width: 60vw;

    ::placeholder {
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    width: 80vw;
    padding: 0.4rem;
    font-size: 2rem;

    ::placeholder {
      text-align: center;
      font-size: 1.3rem;
    }
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


export default function InputForm() {
  return (
    <Form>
      <div>
        <InputSport type="text" placeholder="sport" name="search" />
      </div>

      <div>
        <InputCity
          className="search-city"
          type="text"
          placeholder="city"
          name="search"
        />
      </div>

      <div>
        <BtnGetMatch>Get your match</BtnGetMatch>
      </div>
    </Form>
  );
}
