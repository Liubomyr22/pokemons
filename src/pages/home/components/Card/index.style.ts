import styled from 'styled-components'

export const CardContent = styled.div`
  min-height: 400px;
  padding: 0 10px 80px;
  text-align: center;
  color: rgb(0, 0, 0);
  background-color: white;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  cursor: pointer;

  &:hover {
  }
`

export const Image = styled.img`
  height: auto;
  width: 100%;
`

export const PokemonName = styled.h3`
  font-size: 2rem;

  &:first-letter {
    text-transform: uppercase;
  }
`

export const PokemonSkillsBlockLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`