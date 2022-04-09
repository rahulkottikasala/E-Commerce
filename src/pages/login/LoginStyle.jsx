import styled from "styled-components"
import { mobile } from "../../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/teen-girl-portrait-close-up_23-2149231222.jpg?size=626&ext=jpg&ga=GA1.1.877061480.1649320427")
    center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color:white;
${mobile({width: '75%'})}

`;

const Title = styled.h1`
font-size: 24px;
font-weight: 400;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin:10px 0px;
padding:10px;
`;



const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color:teal;
color: white;
cursor : pointer;
margin-bottom: 10px;
`;

 const Link = styled.a`
 margin: 5px 0px;
 font-size: 12px;
 text-decoration: underline;
 cursor : pointer;
 `;

export { Container, Wrapper, Title, Form, Input, Button, Link };
