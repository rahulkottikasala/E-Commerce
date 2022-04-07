import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import {
  Container,
  Left,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment
} from "./FooterStyle";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Buggy</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          voluptas minima et. Saepe nisi dolore, consequuntur itaque quaerat
        </Description>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Whish List</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}} />
          622 Dixie path , south kerala 676498.
        </ContactItem>
        <ContactItem>
          <Phone  style={{marginRight: "10px"}} />
          +91 00000000000
        </ContactItem>
        <ContactItem>
          <MailOutline  style={{marginRight: "10px"}} />
          contact@buggy.com
        </ContactItem>
        <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdSIIIEFHSkUBt7w3EH8WO0dLLv_Wj3Idr5Alkm-Vh8kPvQ-YfjeZlk__wCobkQhE2A&usqp=CAU"/>
      </Right>
    </Container>
  );
};

export default Footer;
