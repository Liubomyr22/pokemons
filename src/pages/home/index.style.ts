import styled from 'styled-components'

export const Layout = styled.section`
  max-width: 80vw;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-rows: 100px 1fr;
`

export const Banner = styled.div`
  display: flex;
  position: relative;
  margin: 24px auto;
  width: 80vw;
  justify-content: center;
  align-items: center;
  color: red;
  border-radius: 16px;
  font-size: 1.4rem;
  border: 5px solid #fff;

  @media screen and (max-width: 800px) {
    justify-content: flex-end;
    padding-right: 16px;
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 18px;
    }
  }
`

export const DropdownWrapper = styled.div`
  position: absolute;
  left: 16px;
`

export const Content = styled.main`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 1rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: minmax(240px, 1fr);
  }
`
export const CardsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(240px, 1fr));
  grid-gap: 1rem;

  @media screen and (max-width: 1313px) {
    grid-template-columns: repeat(2, minmax(240px, 1fr));
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: minmax(240px, 60vw);
    margin: 0 auto;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: minmax(240px, 80vw);
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const LoadMoreButton = styled.button`
  width: 100%;
  display: flex;
  margin: 32px 0px;
  justify-content: center;
  padding: 8px;
  background-color: #fff;
  border-radius: 16px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
   opacity: .5;
  }
`

export const NoPokemonsPlaceholder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  height: 50dvh;
  text-align: center;
`