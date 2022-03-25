import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import {Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right, Menuitems} from "./NavbarStyle"



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search style={{color:"grey", fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            BUGGY
          </Logo>
          </Center>
        <Right>
          <Menuitems>REGISTER</Menuitems>
          <Menuitems>SIGN IN</Menuitems>
          <Menuitems>
          <Badge badgeContent={4} color="primary">
  <ShoppingCartOutlined color="action" />
</Badge>
          </Menuitems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
