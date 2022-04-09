import {
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
} from "./CartStyle";
import Navbar from "../../component/navbar/Navbar";
import Announcement from "../../component/Announcement";
import Footer from "../../component/footer/Footer";
import { Add, Remove } from "@material-ui/icons";
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR ITEM</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Item (2)</TopText>
            <TopText>Your Whishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
              <Product>
                  <ProductDetails>
                      <Image src='https://m.media-amazon.com/images/I/71pZqo5BMFL._AC_AA360_.jpg'/>
                      <Details>
                          <ProductName><b>Product:</b> Adidas Stansmith Shoes</ProductName>
                          <ProductId><b>ID:</b> 09238408324</ProductId>
                          <ProductColor color='green'/>
                          <ProductSize><b>Size:</b> 9.5</ProductSize>
                      </Details>
                  </ProductDetails>
                  <PriceDetails>
                     <ProductAmountContainer>
                         <Add/>
                         <ProductAmount>1</ProductAmount>
                         <Remove/>
                     </ProductAmountContainer>
                     <ProductPrice>$ 700</ProductPrice>
                  </PriceDetails>
              </Product>
              <Hr/>
              <Product>
                  <ProductDetails>
                      <Image src='https://m.media-amazon.com/images/I/619ypvZXAxL._AC_AA360_.jpg'/>
                      <Details>
                          <ProductName><b>Product:</b> iNK KWIK Anime Tshirt Kakashi Men Women Unisex Tees</ProductName>
                          <ProductId><b>ID:</b> 273298793987</ProductId>
                          <ProductColor color='grey'/>
                          <ProductSize><b>Size:</b> M</ProductSize>
                      </Details>
                  </ProductDetails>
                  <PriceDetails>
                     <ProductAmountContainer>
                         <Add/>
                         <ProductAmount>1</ProductAmount>
                         <Remove/>
                     </ProductAmountContainer>
                     <ProductPrice>$ 50</ProductPrice>
                  </PriceDetails>
              </Product>
          </Info>
          <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ 750</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                  <SummaryItemText>Estimated Shippping</SummaryItemText>
                  <SummaryItemPrice>$ 12.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -12.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                  <SummaryItemText >Total</SummaryItemText>
                  <SummaryItemPrice>$ 750</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
