import React from 'react'
import { Container, Divstart,Innerdiv1,Innerdiv2,Span50,Spanright,Spanright2,Lowerdiv,Categorycard,Button,Categorycard1 } from './styles/Categories.styled'
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



