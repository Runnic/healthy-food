import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import HamburgBtn from '../HamburgBtn'

import {
  Container,
  AppTitle,
  NavItem,
  NavContainer,
  RegisterBtn
} from './styles'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container>
      <Link to="/">
        <AppTitle>Healthy Food</AppTitle>
      </Link>
      <NavContainer isOpen={isMenuOpen}>
        <NavItem href="">HEALTHY RECIPES</NavItem>
        <NavItem href="">BLOG</NavItem>
        <NavItem href="">JOIN</NavItem>
        <Link to="/registrar">
          <RegisterBtn>
            <strong>REGISTER</strong>
          </RegisterBtn>
        </Link>
      </NavContainer>
      <HamburgBtn
        isOpen={isMenuOpen}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
      />
    </Container>
  )
}
