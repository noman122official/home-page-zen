import styled from "styled-components";

export const Container=styled.div`
width: 100%;
height: 100px;
padding: 0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
flex-wrap:wrap;
`;

export const Divstart=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;
width:80%`

export const Innerdiv1=styled.div`
display:'flex';
flex-wrap:wrap;
`;
export const Innerdiv2=styled.div`
display:'flex';
width:50%;
flex-wrap:wrap;

`;

export const Span50=styled.div`
font-family: Inter;
font-style: normal;
font-weight: 800;
font-size: 72px;
line-height: 98px;


font-feature-settings: 'salt' on, 'liga' off;

color: #404366;
`;

export const Spanright=styled.div`
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 32px;

font-feature-settings: 'salt' on, 'liga' off;

color: #18191F;`;

export const Spanright2=styled.div`
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

export const Lowerdiv=styled.div`
display:flex;
height:70%;
width:80%;
flex-wrap:wrap;
align-items:space-between;
justify-content:space-between;
margin-top:4%;
` ;


export const Categorycard=styled.div`
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

export const Categorycard1=styled.div`

height: 13em;
flex: 0 0 14em;
margin-top:2%;  
box-sizing: border-box;
display:flex;
align-items:center;
justify-content:center;

`;

export const Logo = styled.img`
    width: 30px;
    height: 30px;
    
`;

export const Button= styled.button`
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

