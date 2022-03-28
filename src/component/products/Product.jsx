
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import {Container, Circle, Image, Info, Icon } from './ProductStyle'


const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
            <ShoppingCartOutlined/>
            </Icon>
            <Icon>
            <SearchOutlined/>
            </Icon>
            <Icon>
            <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product