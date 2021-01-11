import React from 'react'

import { Container, SectionLimit } from './styles'

export default function Section({
  BackgroundColor,
  children,
  BackgroundImg,
  BackgroundPosition,
  Height
}) {
  return (
    <Container color={BackgroundColor} Height={Height}>
      <SectionLimit img={BackgroundImg} position={BackgroundPosition}>
        {children}
      </SectionLimit>
    </Container>
  )
}
