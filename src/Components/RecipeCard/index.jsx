import React from 'react'

import { Container, CardImg, CardTitle, InfoContainer } from './styles'

import CustomButton from '../CustomButton'

export default function RecipeCard({ Image, Title }) {
  return (
    <Container>
      <CardImg src={Image} />
      <InfoContainer>
        <CardTitle>{Title}</CardTitle>
        <CustomButton>See Recipe</CustomButton>
      </InfoContainer>
    </Container>
  )
}
