import React, {useRef, useEffect, useCallback, useState} from "react";
import {useSpring, animated} from 'react-spring';
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import modal from './modal.jpg';

const Background = styled.div`
width: 100%;
height:100%;
position:fixed;
display:flex;
justify-content: center;
align-items: center;
/* filter: blur(2px); */
background: rgba(0, 0, 0, 0.8)
`;

// For Login part (right half of the popUp) 
const ModalWrapper = styled.div`
width: 800px;
height:265px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.9);
background: #fff;
color:#000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
/* background-color: blue; */

@media screen and (max-width: 960px) {
    width: 700px;
    height:230px;
    /* background: yellow; */
  }

@media screen and (max-width: 750px) {
width: 500px;
height:165px;
/* background: pink; */
}

@media screen and (max-width: 550px) {
display:flex;
flex-direction:column;
width: 300px;
height:300px;
/* background: pink; */
}
`;

const ModalImg = styled.img`
width: 100%;
height:100%;
/* border-radius: 10px 0 0 10px; */
background: #000;
`;

const ModalContent = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
line-height: 1.8;
/* color: #141414; */

button{
    padding: 10px 24px; 
    color: white;
    /* color: #fff; */
    border: none;
    background: rgb(110, 94, 254);
    font-size: 18px;
    
}

@media screen and (max-width: 550px) {
padding-bottom: 50px;
height:200px;
/* background: pink; */
}
`;

const CloseModalButton = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding:0%;
z-index: 10;
`;

const Image = styled.div`
display: flex; 
align-self:center;   
overflow: hidden;
`;


export const Modal = ({showModal, setShowModal}) => {
    const modalRef =useRef()

    const animation = useSpring({
        config:{
            duration:250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'translateX(0%)' : 'translateX(-100%)'
    });

    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false);
        }
    };

    const keyPress = useCallback(e =>{
        if(e.key === 'Escape' && showModal){
            setShowModal(false)
        }
    }, [setShowModal, showModal]
    );

    useEffect(
        ()=>{
            document.addEventListener('keydown', keyPress);
            return ()=> document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return(
       <>
        {showModal ? (
            <Background ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <ModalWrapper id = "root" showModal={showModal}>
                        {/* <ModalImg src ={require("./modall.jpg")} alt="camera"/>  */}
                        <Image><ModalImg src= {modal}/></Image>
                        <ModalContent>
                            <h1>WELCOME</h1>
                            <button>Log In with Google</button>
                        </ModalContent> 
                        <CloseModalButton aria-label = 'Close modal' onClick={() => setShowModal(prev=> !prev)} />
                    </ModalWrapper>
                </animated.div>
            </Background>
        ): null}
       </> 
    )
};