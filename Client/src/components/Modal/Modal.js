import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import SelectSport from "../InputForm/SelectSport";
import SelectCity from "../InputForm/SelectCity";
import GoogleMap from "../InputForm/GoogleMap";

// STYLING COMPONENTS
// ==================
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  background: rgba(57, 105, 119, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  color: #7aacef;
  display: grid;
  grid-template-rows: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 5px;
  z-index: 10;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #7aacef;
  background-image: url("./modal.jpg");
  background: "red";

  h1 {
    margin-top: 20px;
  }

  p {
    margin-bottom: 1rem;
  }
  button {
    color: white;
    padding: 0.8rem 1.1rem;
    background: rgb(110, 94, 254);
    text-decoration: none;
    letter-spacing: 1px;
    width: 400px;
    font-size: 1.5rem;
    border: none;
    font-weight: lighter;
    margin-top: 5rem;
    margin-bottom: 10rem;
    font-family: "Poppins", sans-serif;
  }
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const InputSport = styled.div`
  padding: 0.6rem;
  font-size: 1rem;
  border: none;
  background: white;
  width: 281px;

  .css-1okebmr-indicatorSeparator {
  }

  input {
    padding: 0.9rem;
    font-size: 1rem;
    border: rgb(211, 208, 208) solid 0.5px;
    background: white;
    width: 300px;
    border-radius: 3px;
    color: rgb(211, 208, 208);
    font-family: "Poppins", sans-serif;
  }
  ::placeholder {
    color: rgb(211, 208, 208);
  }

  @media screen and (max-width: 960px) {
    width: 70vw;
    input {
      width: 68vw;
    }

    ::placeholder {
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    width: 80vw;
    padding: 0.3rem;
    font-size: 2rem;

    input {
      width: 78vw;
      padding: 0.5rem;
      font-size: 2rem;
    }

    ::placeholder {
      text-align: center;
      font-size: 1.3rem;
    }
  }
`;

// END STYLING COMPONENTS
// ======================

const Modal = ({ showModal, setModal, openModal}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateX(0%)` : `translateX(-100%)`,
  });

  const closeModal = e => {
    if(modalRef.current === e.target){
        setModal(false);
    }
};


  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setModal(false);
        console.log("I pressed");
      }
    },
    [setModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation} closeModal={closeModal}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1>Are you ready?</h1>
                <p>Let others know about what sport you practice</p>

                <InputSport>
                  <SelectSport
                    placeholder="Sport"
                    components={{
                      indicatorSeparator: (styles) => ({ display: "none" }),
                    }}
                  />
                </InputSport>

                <InputSport>
                  <GoogleMap />
                </InputSport>

                <button>Submit</button>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
