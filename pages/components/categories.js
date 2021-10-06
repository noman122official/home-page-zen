import React from 'react'
// import { Container, Heading } from './styles/Categories.styled'
import styled from "styled-components";
import Image from "next/image";
import engg from '../../public/engg.svg'
import commerce from '../../public/commerce.svg'
import manage from '../../public/level.svg'
import medical from '../../public/medical.svg'
import science from '../../public/science.svg'
import LT from '../../public/LT.svg'
import humanities from '../../public/humanities.svg'
import law from '../../public/law.svg'
import arts from '../../public/arts.svg'


const Container=styled.div`
width: 100%;
height: 100px;
padding: 0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
flex-wrap:wrap;
`;

const Divstart=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;
width:80%`

const Innerdiv1=styled.div`
display:'flex';
flex-wrap:wrap;
`;
const Innerdiv2=styled.div`
display:'flex';
width:50%;
flex-wrap:wrap;

`;

const Span50=styled.div`
font-family: Inter;
font-style: normal;
font-weight: 800;
font-size: 72px;
line-height: 98px;


font-feature-settings: 'salt' on, 'liga' off;

color: #404366;
`;

const Spanright=styled.div`
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 32px;

font-feature-settings: 'salt' on, 'liga' off;

color: #18191F;`;

const Spanright2=styled.div`
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 32px;

font-feature-settings: 'salt' on, 'liga' off;

color: #18191F;
width:fit-content;
margin-top:6%;
border-bottom:1.76px solid #18191F;
`
;

const Lowerdiv=styled.div`
display:flex;
height:70%;
width:80%;
flex-wrap:wrap;
align-items:space-between;
justify-content:space-between;
margin-top:4%;
` ;


const Categorycard=styled.div`
width: 174px;
height: 13em;
background: #FFF8F8;
border: 1px solid rgba(75, 75, 75, 0.3);
border-radius: 8px;
flex: 0 0 14em;
margin-top:2%;  
box-sizing: border-box;

display:flex;
align-items:center;
justify-content:space-evenly;
flex-direction:column;

&:hover{
box-shadow: 0px 8px 24px rgba(216, 216, 216, 0.3);
backdrop-filter: blur(40px);
}
`;

const Categorycard1=styled.div`

height: 13em;
flex: 0 0 14em;
margin-top:2%;  
box-sizing: border-box;
display:flex;
align-items:center;
justify-content:center;

`;

const Logo = styled.img`
    width: 30px;
    height: 30px;
    
`;

const Button= styled.button`
border:1px solid #F26A7E;
background:none;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

color: #404366;
padding:10px;

margin: 0px 10px;
border-radius: 4px;


&:hover{background: #F26A7E;}
`

function Categories() {
    return (
        <html>
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>    
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet"/>
        </head>
        <body>
        <Container >
            <Divstart>
               <Innerdiv1>
                    <Span50>50+</Span50>
                    <Span50>Categories</Span50>
                </Innerdiv1>
                <Innerdiv2>
                    <Spanright>Explore our handpicked catagory of Internships and unlock your journey with us today! Select one to view the internships</Spanright>
                    <br/>
                    <Spanright2>View all Internships</Spanright2>
                </Innerdiv2>
            </Divstart>
            
            
            <Lowerdiv>
                <Categorycard>
                    {/* <Logo src='../../public/engg.svg' alt="engg"/> */}
                    <Image src={engg} alt="engg"/>
                    <span>Engineering</span>
                </Categorycard>
                <Categorycard>
                    <Image src={commerce} alt="engg"/>
                    <span>Commerce</span>
                </Categorycard>
                <Categorycard>
                    <Image src={manage} alt="engg"/>
                    <span>Management</span>
                </Categorycard>
                <Categorycard>
                <   Image src={medical} alt="engg"/>
                    <span>Medical</span>
                </Categorycard>
                <Categorycard>
                    <Image src={science} alt="engg"/>
                    <span>Science</span>
                </Categorycard>
                <Categorycard>
                    <Image src={LT} alt="engg"/>
                    <span>L.T.</span>
                </Categorycard>
                <Categorycard>
                    <Image src={humanities} alt="engg"/>
                    <span>Humanities</span>
                </Categorycard>
                <Categorycard>
                    <Image src={law} alt="engg"/>
                    <span>Law</span>
                </Categorycard>
                <Categorycard>
                    <Image src={arts} alt="engg"/>
                    <span>Arts</span>
                </Categorycard>
                <Categorycard1>
                    <Button>View more</Button>
                </Categorycard1>
                
            </Lowerdiv>
        </Container>
        </body>
        </html>
    )
}

export default Categories



