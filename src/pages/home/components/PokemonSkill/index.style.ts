import styled from 'styled-components'
import { PokemonSkill } from '../../../../types/Pokemons'
import { getColorByPokemonSkill } from './functions'

export const PokemonSkilllabel = styled.span<{type: PokemonSkill}>`
  color: black;
  margin-top: 24px;
  min-width: 100px;
  border-radius: 10px;
  padding: 8px;
  background-color: ${({type}) => getColorByPokemonSkill(type)};

  &:first-letter {
    text-transform: uppercase;
  }
`