import React from 'react'
import {Send} from "@material-ui/icons"
import  {Container, Title, Description, InputContainer, Button, Input} from './NewsletterStyle'
const Newsletter = () => {
  return (
    <Container>
        <Title> Newsletter</Title> 
        <Description> Get timely update from your favorite products</Description>
        <InputContainer>
        <Input placeholder="your email"/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>

    </Container>
  )
}

export default Newsletter