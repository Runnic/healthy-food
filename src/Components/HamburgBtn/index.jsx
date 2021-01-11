import React from 'react'

import { Container, Bar } from './styles'

export default function HamburgBtn({ isOpen, onClick }) {
  return (
    <Container onClick={onClick} isOpen={isOpen}>
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
    </Container>
  )
}
