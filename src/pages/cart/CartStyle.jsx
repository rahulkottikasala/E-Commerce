import styled from "styled-components";
import { mobile } from "../../Responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
${mobile({padding: '10px'})}

`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({display: 'none'})}

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
${mobile({flexDirection: 'column'})}

`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
display:flex;
justify-content: space-between;
margin: 10px;
${mobile({flexDirection: 'column'})}

`;
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1.5px;
`

const ProductDetails = styled.div`
flex: 2;
display: flex;
`;

const Image = styled.img`
width: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
border: .5px solid grey;
background-color:${props=> props.color};
`;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;        
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: '5px 15px'})}

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom: '20px'})}

`

const Summary = styled.div`
  flex: 1;     
  border: 0.5px solid lightgrey;
  border-radius:10px;
  padding: 20px ;
  height: 50vh
`;


const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=> props.type === 'total' && '500'};
font-size: ${props=> props.type === 'total' && '24px'};

`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
width:100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`

export {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Product,
  Hr,
  ProductDetails,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetails,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button
};
