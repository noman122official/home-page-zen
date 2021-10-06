import { ECHILD } from "constants";
import { ECDH } from "crypto";
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
    margin-top:0;
`;

export const TopCom = styled.div`

width: 1005px;
height: 98px;
margin-left: 162px;

margin-top:68px;
font-family: Inter;
font-style: normal;
font-weight: 800px;
font-size: 60px;
line-height: 98px;
/* identical to box height, or 136% */

font-feature-settings: 'salt' on, 'liga' off;
color: #090d33;


`;
export const Purple = styled.div`

position: absolute;
width: 100%;

left: 0px;
top: 824.3016759776536vh;
right: 0px;

background: #C9CBE2;



    height: 90vh;






`;
export const Red = styled.div`

position: static;
width: 445px;
height: 82px;
left: 0px;
margin-top: 30px;

font-family: Inter;
font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 41px;
/* or 114% */


color: #F26A7E;






`;
export const Belowred = styled.div`

position: absolute;
width: 565px;
height: 32px;
left: 162px;
top: 339px;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 32px;
/* identical to box height, or 160% */
font-feature-settings: 'salt' on, 'liga' off;

color: #404366;

`;
    font-size:16px;
    border: none;
    padding:10px 26px;
    border-radius:2px;

    &:hover {
        background-color: #fc5b73;
    }
`;

