import styled from "styled-components";
import logo from "../../../public/logo.svg";

export const Container = styled.div`
max-width: 1200px; 
margin: 0 auto;
height: 77px;
background-color: #fff;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0;
box-sizing: border-box;
`;


export const Image = styled.img`
     background-image: url(${logo});
     width: 200px;
     height: 60px;
     z-index: 1000;
`;

export const Links = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Link = styled.a`
    color: #404366;
    font-size: 16px;
    font-weight: 500;
`;


export const Button = styled.button`
    background-color: #F26A7E;
    margin-right: 20px;
    color: #fff;
    font-size:16px;
    border: none;
    padding:10px 26px;
    border-radius:2px;

    &:hover {
        background-color: #fc5b73;
    }
`;



