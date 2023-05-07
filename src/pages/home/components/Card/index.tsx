import * as React from 'react'
import { PokemonSkill } from '../../../../types/Pokemons'
import PokemonSkillLabel from '../PokemonSkill'
import * as Styled from './index.style'

interface Props {
  name: string
  imageUrl: string
  types: PokemonSkill[]
}

const Card: React.FC<Props> = (props): JSX.Element => {
  const { name, imageUrl, types } = props

  return (
    <Styled.CardContent>
      <Styled.Image src={imageUrl} alt={name} />
      <Styled.PokemonName>{name}</Styled.PokemonName>
      <Styled.PokemonSkillsBlockLayout>
        {types.map(type => <PokemonSkillLabel key={type} type={type} />)}
      </Styled.PokemonSkillsBlockLayout>
    </Styled.CardContent>
  )
}

export default Card