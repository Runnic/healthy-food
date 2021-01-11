import React from 'react'
import { IoIosSearch } from 'react-icons/io'

import Header from '../../Components/Header'
import Section from '../../Components/Section'
import CustomButton from '../../Components/CustomButton'
import RecipeCard from '../../Components/RecipeCard'
import SideScrollMenu from '../../Components/SideScrollMenu'
import Footer from '../../Components/Footer'
import CustomInput from '../../Components/CustomInput'

import Illustration from '../../Assets/Images/Illustration.svg'
import Comida1 from '../../Assets/Images/comida_1.svg'
import Comida2 from '../../Assets/Images/comida_2.svg'
import Comida3 from '../../Assets/Images/comida_3.svg'
import Comida4 from '../../Assets/Images/comida_4.svg'
import BlocoServices from '../../Assets/Images/bloco_services.svg'
import BlocoFinalImg from '../../Assets/Images/bloco_final_image.svg'

import {
  LeftSideContainer,
  ReadyForTryingContainer,
  ReadyForTryingMsg,
  SearchBarContainer,
  RecipesSectionContainer,
  SectionTitle,
  SectionSubtitle,
  RecipesGrid,
  ServicesContainer,
  ServicesMessageContainer,
  ServicesMessage,
  ServicesMessageCenterText,
  BlogPostsContainer,
  SectionFinalContainer,
  MembershipContainer,
  JoinInputContainer
} from './styles'

export default function LandingPage() {
  return (
    <>
      <Section
        BackgroundImg={Illustration}
        BackgroundPosition="right"
        Height={755}
      >
        <Header />
        <LeftSideContainer>
          <ReadyForTryingContainer>
            <ReadyForTryingMsg>
              Ready for Trying a new recipe?
            </ReadyForTryingMsg>
          </ReadyForTryingContainer>
          <SearchBarContainer>
            <CustomInput placeholder="Search healthy recipes" />
            <CustomButton className="landing-button">
              <IoIosSearch size={24} color="#fff" />
            </CustomButton>
          </SearchBarContainer>
        </LeftSideContainer>
      </Section>

      <Section BackgroundColor="#fafafc">
        <RecipesSectionContainer>
          <SectionTitle>Our Best Recipes</SectionTitle>
          <SectionSubtitle>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </SectionSubtitle>

          <RecipesGrid>
            <RecipeCard Image={Comida1} Title="Broccoli Salad with Bacon" />
            <RecipeCard Image={Comida2} Title="Classic Beef Burgers" />
            <RecipeCard Image={Comida3} Title="Classic Potato Salad" />
            <RecipeCard Image={Comida4} Title="Cherry Cobbleron the Grill" />
          </RecipesGrid>
        </RecipesSectionContainer>
      </Section>

      <Section
        BackgroundImg={BlocoServices}
        BackgroundPosition="left"
        Height={728}
      >
        <ServicesContainer>
          <ServicesMessageContainer>
            <ServicesMessageCenterText>
              <SectionTitle>The best services ready to serve you</SectionTitle>
              <ServicesMessage>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </ServicesMessage>
              <ServicesMessage>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </ServicesMessage>
              <ServicesMessage>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </ServicesMessage>
              <CustomButton>Know More</CustomButton>
            </ServicesMessageCenterText>
          </ServicesMessageContainer>
        </ServicesContainer>
      </Section>

      <Section BackgroundColor="#fafafc">
        <BlogPostsContainer>
          <SectionTitle>Read Our Blog</SectionTitle>
          <SectionSubtitle>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </SectionSubtitle>

          <SideScrollMenu />
        </BlogPostsContainer>
      </Section>

      <Section
        BackgroundImg={BlocoFinalImg}
        BackgroundPosition="right"
        Height={670}
      >
        <SectionFinalContainer>
          <MembershipContainer>
            <SectionTitle>
              Join our membership to get special offer
            </SectionTitle>
            <JoinInputContainer>
              <CustomInput
                placeholder="Enter your email address"
                Largura="350px"
              />
              <CustomButton>Join</CustomButton>
            </JoinInputContainer>
          </MembershipContainer>
        </SectionFinalContainer>
      </Section>
      <Footer />
    </>
  )
}
