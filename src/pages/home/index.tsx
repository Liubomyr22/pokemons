import * as React from 'react'
import Modal from '../../components/Modal'
import { useGetPokemons } from '../../hooks/useGetPokemons'
import useWindowSize from '../../hooks/useWindowSize'
import { PokemonDetails } from '../../types/Pokemons'
import Card from './components/Card'
import Loader from '../../components/Loader'
import PokemonDescription from './components/PokemonDescription'
import * as Styled from './index.style'
import { useGetPokemonsTypes } from '../../hooks/useGetPokemonsTypes'
import Dropdown from './components/Dropdown'

const Home: React.FC = (): JSX.Element => {
  const [selectedPokemon, setSelectedPokemon] = React.useState<PokemonDetails | null>(null)
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const { types } = useGetPokemonsTypes()
  const windowSize = useWindowSize()
  const {
    pokemons,
    pokemonsCopy,
    loadMore,
    isDisableloadMoreButton,
    selectedPokemonType,
    setSelectedPokemonType
  } = useGetPokemons()

  const onCardClick = React.useCallback((pokemon: PokemonDetails) => {
    if (windowSize.width > 1000) {
      setSelectedPokemon(pokemon)
    } else {
      setSelectedPokemon(pokemon)
      setIsOpenModal(true)
    }
  }, [windowSize.width])

  if (!pokemonsCopy.length) return <Loader />

  return (
    <Styled.Layout>
      <Styled.Banner>
        <h1>PokeDex</h1>
        <Styled.DropdownWrapper>
          <Dropdown
            options={types || []}
            selectedOption={selectedPokemonType}
            setSelectedOption={setSelectedPokemonType}
          />
        </Styled.DropdownWrapper>
      </Styled.Banner>
      <Styled.Content>
        <Styled.Wrapper>
          <Styled.CardsLayout>
            {pokemons.map(pokemon =>
              <div
                key={pokemon.id}
                onClick={() => onCardClick(pokemon)}
              >
                <Card
                  imageUrl={pokemon.front_default}
                  name={pokemon.name}
                  types={pokemon.types}
                />
              </div>
            )}
          </Styled.CardsLayout>
          {!pokemons.length ?
            <Styled.NoPokemonsPlaceholder>
              <h2>No visible pokemons with this type</h2>
              <p>Try to load new</p>
            </Styled.NoPokemonsPlaceholder>
            : null}
          <Styled.LoadMoreButton
            disabled={isDisableloadMoreButton}
            onClick={loadMore}
          >
            Load more
          </Styled.LoadMoreButton>
        </Styled.Wrapper>
        {
          windowSize.width > 1000 ?
            <PokemonDescription pokemon={selectedPokemon} />
            :
            <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
              <PokemonDescription pokemon={selectedPokemon} />
            </Modal>
        }
      </Styled.Content>
    </Styled.Layout>
  )
}

export default Home