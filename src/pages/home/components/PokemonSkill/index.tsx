import * as React from 'react'
import { PokemonSkill } from '../../../../types/Pokemons'
import * as Styled from './index.style'

interface Props {
  type: PokemonSkill
}

const PokemonSkillLabel: React.FC<Props> = ({ type }) =>
  <Styled.PokemonSkilllabel type={type}>{type}</Styled.PokemonSkilllabel>

export default PokemonSkillLabel