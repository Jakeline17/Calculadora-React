import styled from 'styled-components';

export const ButtonContainer = styled.button`
padding:10px;
border:1px solid #000;
border-radius:10px;
background-color:#231b1b;
color:#ddd;
font-size:1rem;
font-weight:700;
width:160px;
margin:10px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
transition: all 0.3s ease;
  
&:hover{
opacity:0.8;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5); 
&:active{
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
 transform: translateY(2px);
}


`;
