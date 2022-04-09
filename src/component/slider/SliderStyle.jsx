import styled from "styled-components";
import {mobile} from "../../Responsive"

 const  Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
${mobile({display: 'none'})}

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) =>
    props.direction === "left" &&
    "10px"}; // because left & right as same container.
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  /* transform: translateX(-200vw); */
 transform: translateX(${(props)=>props.slideIndex * -100}vw);
 transition: all 1.5s ease;
`;

const Slide = styled.div`
width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg}
`;
const ImgContainer = styled.div`
/* height: 100%; */
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding:50px;
`;

const Title = styled.h1`
font-size: 70px; 
`
const Desc = styled.p`
margin: 50px 0;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color:transparent;
cursor: pointer;
`
export{Container, Arrow, Wrapper, Slide, ImgContainer, Image, InfoContainer, Title, Desc, Button}