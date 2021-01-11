import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  height: 100%;
  margin-top: 30px;
`

export const ScrollContainer = styled.div`
  max-width: 100vw;
  padding: 20px 10vw 10vw 50px;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`

export const Card = styled.div`
  flex: 0 0 auto;
  background: #fff;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.3);
  width: 350px;
  height: 450px;
  border-radius: 6px;
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0 30px 40px 0 rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 990px) {
    width: 300px;
    height: 400px;
  }

  @media (max-width: 770px) {
    width: 250px;
    height: 350px;
  }
`
export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px 6px 0 0;
`

export const CardTitle = styled.p`
  width: 100%;
  padding: 30px;
  font-size: 2.4rem;
  color: var(--blueberry);
  font-weight: bold;

  @media (max-width: 690px) {
    padding: 20px;
  }
`

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  width: 100%;

  @media (max-width: 690px) {
    padding: 0 20px;
  }
`

export const AuthorName = styled.p`
  color: var(--duck);
  margin-left: 12px;
`

export const AuthorImg = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
`

export const ArrowContainerRight = styled.div`
  position: absolute;
  width: 100px;
  height: 550px;
  right: 0;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(252, 252, 250, 0.9) 100%
  );
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: right;
  padding: 20px;
`

export const ArrowContainerLeft = styled.div`
  position: absolute;
  width: 100px;
  height: 550px;
  left: 0;
  background-image: linear-gradient(
    to left,
    rgba(255, 255, 255, 0) 0%,
    rgba(252, 252, 250, 0.9) 100%
  );
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: left;
  padding: 20px;
`

export const ScrollButton = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #fff;
  color: var(--lemon);
  transition: 5s;
  border: none;
  z-index: 3;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--duck);
    color: #fff;
    cursor: pointer;
  }

  &:active {
    background: var(--blueberry);
  }

  @media (max-width: 690px) {
    display: none;
  }
`
