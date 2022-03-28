import React from 'react'
import styled from "styled-components"
import Product from './Product'
import { popularItems } from '../../data';

const Container = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = () => {
  return (
   <Container>
       {popularItems.map(item =>(
            <Product item={item} key={item.id}/>
        ))}
   </Container>
  )
}

export default Products;