import styled from 'styled-components'

export const LeftSideContainer = styled.div`
  max-width: 40%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 100px;

  @media (max-width: 964px) {
    max-width: 50%;
  }

  @media (max-width: 690px) {
    max-width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    min-height: 300px;

    padding: 0 2rem;
  }

  /* @media screen and (max-width: 475px) {
    min-height: unset;
  } */
`

export const ReadyForTryingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ReadyForTryingMsg = styled.p`
  color: var(--blueberry);
  font-size: 4.8rem;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 3.5rem;
  }
`

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 15px 0;

  button.landing-button {
    margin-left: 1rem;
  }
`

export const RecipesSectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  @media (max-width: 380px) {
    padding: 0;
  }
`
export const SectionTitle = styled.h2`
  color: var(--blueberry);
  font-weight: bolder;
  font-size: 3.2rem;
  padding: 25px 0;
`

export const SectionSubtitle = styled.h3`
  color: var(--duck);
  text-align: center;
  width: 40%;

  @media (max-width: 660px) {
    width: 60%;
  }

  @media (max-width: 380px) {
    width: 80%;
  }
`

export const RecipesGrid = styled.div`
  display: grid;
  padding: 40px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 690px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  @media (max-width: 690px) {
    min-height: 350px;
  }
`
export const ServicesMessageContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    width: 50%;
  }

  @media (max-width: 690px) {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    align-items: center;
    min-height: 300px;
  }
`

export const ServicesMessageCenterText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 90%;

  @media (max-width: 690px) {
    align-items: center;
  }
`

export const ServicesMessage = styled.p`
  color: var(--duck);
  padding-bottom: 40px;

  @media (max-width: 690px) {
    padding-bottom: 20px;
    color: #333;
  }
`

export const BlogPostsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

export const SectionFinalContainer = styled.div`
  display: flex;
  flex: 1;
`

export const MembershipContainer = styled.div`
  max-width: 50%;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 100px;

  @media (max-width: 990px) {
    max-width: 60%;
  }

  @media (max-width: 770px) {
    max-width: 70%;
  }

  @media (max-width: 690px) {
    max-width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 30px;
  }
`

export const JoinInputContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 690px) {
    flex-direction: column;

    input {
      width: unset;
    }

    button {
      margin-top: 1rem;
    }
  }
`
