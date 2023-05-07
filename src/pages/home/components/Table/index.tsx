/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import { PokemonDetails } from '../../../../types/Pokemons'
import * as Styled from './index.style'

interface Props {
  pokemon: PokemonDetails
}

const StatTable: React.FC<Props> = ({ pokemon }): JSX.Element => {
  const { id, name, front_default, types, ...rest } = pokemon

  return (
    <table>
      <tbody>
        {Object.entries(rest).map(([key, value]) => (
          <tr key={key}>
            <Styled.TableBodyCell>{key}</Styled.TableBodyCell>
            <Styled.TableBodyCell>{value}</Styled.TableBodyCell>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StatTable