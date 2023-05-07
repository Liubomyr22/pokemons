import styled from 'styled-components'

export const Wrapper = styled.aside`
  position: relative;
  width: 100%;
`

export const Container = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  min-width: 260px;
  width: 80%;
  height: fit-content;
  max-height: calc(100vh - 100px);
  overflow: auto;
  padding: 16px;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;

  img {
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (max-width: 350px) {
    min-width: 220px;
    padding: 8px;
  }
`

export const PokemonName = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: black;
  text-align: center;
  margin-bottom: 16px; 

  &:first-letter {
    text-transform: uppercase;
  }
`