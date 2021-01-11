import React from 'react'

import {
  ConditionsContainer,
  Container,
  ConditionsText,
  CopyrightText
} from './styles'

export default function Footer() {
  return (
    <Container>
      <CopyrightText>
        © Copyrights 2019 Stack. All Rights Reserved.
      </CopyrightText>
      <ConditionsContainer>
        <ConditionsText>Privacy Policy</ConditionsText>
        <ConditionsText>Terms and Conditions</ConditionsText>
      </ConditionsContainer>
    </Container>
  )
}
