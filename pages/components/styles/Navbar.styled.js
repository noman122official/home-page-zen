import styled from "styled-components";


export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
height: 77px;
background-color: #fff;
display: flex;
align-items: center;
justify-content: space-between;
`;


export const Image = styled.img`
    
`;

export const Links = styled.div`
    width: 500px;
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


export const ImageContainer = styled.div`
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;



