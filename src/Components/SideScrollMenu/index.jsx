import React, { useRef } from 'react'

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

import {
  Container,
  ScrollContainer,
  Card,
  ArrowContainerRight,
  ArrowContainerLeft,
  ScrollButton,
  CardImage,
  CardTitle,
  AuthorContainer,
  AuthorImg,
  AuthorName
} from './styles'

import BlocoImg1 from '../../Assets/Images/bloco_image_1.svg'
import BlocoImg2 from '../../Assets/Images/bloco_image_2.svg'
import BlocoImg3 from '../../Assets/Images/bloco_image_3.svg'
import BlocoImg4 from '../../Assets/Images/bloco_image_4.svg'

import NoUserImg from '../../Assets/Images/no-user-icon.png'
import AutorImg2 from '../../Assets/Images/autor_image2.svg'
import AutorImg3 from '../../Assets/Images/autor_image3.svg'
import AutorImg4 from '../../Assets/Images/autor_image4.svg'

export default function SideScrollMenu() {
  const containerRef = useRef()

  function scrollToRight() {
    const position = containerRef.current.scrollLeft
    containerRef.current.scroll({
      left: position + 500,
      behavior: 'smooth'
    })
  }

  function scrollToLeft() {
    const position = containerRef.current.scrollLeft
    containerRef.current.scroll({
      left: position - 500,
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      <ArrowContainerLeft>
        <ScrollButton onClick={scrollToLeft}>
          <BsArrowLeft size={25} />
        </ScrollButton>
      </ArrowContainerLeft>
      <ScrollContainer ref={containerRef}>
        <Card>
          <CardImage src={BlocoImg1} />
          <CardTitle>Quick-start guide to nuts and seeds</CardTitle>
          <AuthorContainer>
            <AuthorImg src={NoUserImg} />
            <AuthorName>Kevin Ibrahim</AuthorName>
          </AuthorContainer>
        </Card>
        <Card>
          <CardImage src={BlocoImg2} />
          <CardTitle>Nutrition: Tips for Improving Your Health</CardTitle>
          <AuthorContainer>
            <AuthorImg src={AutorImg2} />
            <AuthorName>Mike Jackson</AuthorName>
          </AuthorContainer>
        </Card>
        <Card>
          <CardImage src={BlocoImg3} />
          <CardTitle>The top 10 benefits of eating healthy</CardTitle>
          <AuthorContainer>
            <AuthorImg src={AutorImg3} />
            <AuthorName>Bryan McGregor</AuthorName>
          </AuthorContainer>
        </Card>
        <Card>
          <CardImage src={BlocoImg4} />
          <CardTitle>What Makes a Healthy Diet?</CardTitle>
          <AuthorContainer>
            <AuthorImg src={AutorImg4} />
            <AuthorName>Jashua</AuthorName>
          </AuthorContainer>
        </Card>

        <Card>
          <CardImage src={BlocoImg1} />
          <CardTitle>Quick-start guide to nuts and seeds</CardTitle>
          <AuthorContainer>
            <AuthorImg src={NoUserImg} />
            <AuthorName>Kevin Ibrahim</AuthorName>
          </AuthorContainer>
        </Card>
        <Card>
          <CardImage src={BlocoImg2} />
          <CardTitle>Nutrition: Tips for Improving Your Health</CardTitle>
          <AuthorContainer>
            <AuthorImg src={AutorImg2} />
            <AuthorName>Mike Jackson</AuthorName>
          </AuthorContainer>
        </Card>
        <Card>
          <CardImage src={BlocoImg3} />
          <CardTitle>The top 10 benefits of eating healthy</CardTitle>
          <AuthorContainer>
            <AuthorImg src={AutorImg3} />
            <AuthorName>Bryan McGregor</AuthorName>
          </AuthorContainer>
        </Card>
        <Card>
          <CardImage src={BlocoImg4} />
          <CardTitle>What Makes a Healthy Diet?</CardTitle>
          <AuthorContainer>
            <AuthorImg src={AutorImg4} />
            <AuthorName>Jashua</AuthorName>
          </AuthorContainer>
        </Card>
      </ScrollContainer>
      <ArrowContainerRight>
        <ScrollButton onClick={scrollToRight}>
          <BsArrowRight size={25} />
        </ScrollButton>
      </ArrowContainerRight>
    </Container>
  )
}
