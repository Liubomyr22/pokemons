import * as React from 'react'
import { PokemonDetails } from '../../../../types/Pokemons'
import StatTable from '../Table'
import * as Styled from './index.style'

interface Props {
  pokemon: PokemonDetails | null
}

const PokemonDescription: React.FC<Props> = ({ pokemon }) => {

  if (!pokemon) return null

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <img src={pokemon.front_default} alt={pokemon.name} />
        <Styled.PokemonName>{pokemon.name}</Styled.PokemonName>
        <StatTable pokemon={pokemon} />
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default PokemonDescription