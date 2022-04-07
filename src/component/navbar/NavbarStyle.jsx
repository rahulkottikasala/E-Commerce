
import styled from "styled-components";

const Container = styled.div`
height: 60px;
width: 100%
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Left = styled.div`
flex: 1;
display: flex;
align-items:center;
`;
const Language = styled.span`
font-size: 14px;
font-weight: bold;
cursor: pointer;
`;
const SearchContainer = styled.div`
border: .5px solid lightgrey;
display: flex;
align-items:center;
margin-left:25px;
padding:5px;
`;
const Input = styled.input`
border:none;
outline:none;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;
const Logo = styled.h2`
font-weight: bold;
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;
const Menuitems = styled.span`
font-size: 14px;
cursor: pointer;
margin-left:25px;
`;

export{Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right, Menuitems}