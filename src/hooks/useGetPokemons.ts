import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Pokemon, PokemonDetails, PokemonSkill, PokemonStat } from "../types/Pokemons";

interface GetPokemonsResponse {
  pokemons: PokemonDetails[]
  pokemonsCopy: PokemonDetails[]
  isDisableloadMoreButton: boolean
  isLoading: boolean
  selectedPokemonType: string
  setSelectedPokemonType: React.Dispatch<React.SetStateAction<PokemonSkill | ''>>
  loadMore: () => void
}

export function useGetPokemons(): GetPokemonsResponse {
  const [pokemons,setPokemons] = useState<PokemonDetails[]>([])
  const [pokemonsCopy, setPokemonsCopy] = useState<PokemonDetails[]>([])
  const [count,setCount] = useState<number>(0)
  const [offset, setOffset] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedPokemonType, setSelectedPokemonType] = useState<PokemonSkill | ''>('')

  const loadMore = () => {
    setSelectedPokemonType('')
    setOffset(prev => prev + 12)
  }

  const isDisableloadMoreButton = useMemo(() => ((count - 12) < offset) ||isLoading,[isLoading, offset, count])

  useEffect(() => {
    let shouldLog = false;

    const getPokemons = async () =>{
      setIsLoading(true)
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`)
     .then(res => res.json()).catch(err => toast.error(err.message))

    Promise.all(data.results.map(async (item: Pokemon) => 
        await fetch(item.url).then(res => res.json())
    )).then( async (res) => {

      if(!shouldLog) {
        const takeNeededInfo = res.map(({name, weight, sprites, types, id, moves, stats}) =>
          ({
            name,
            id,
            front_default: sprites.front_default,
            types: types.map((type: {type: {name: string}}) => type.type.name),
            ['Type']: types.map((type: {type: {name: string}}) => type.type.name)[0],
            ['Attack']: stats.find((stat: PokemonStat) => stat.stat.name === 'attack').base_stat,
            ['Defense']: stats.find((stat: PokemonStat) => stat.stat.name === 'defense').base_stat,
            ['HP']: stats.find((stat: PokemonStat) => stat.stat.name === 'hp').base_stat,
            ['SP Attack']: stats.find((stat: PokemonStat) => stat.stat.name === 'special-attack').base_stat,
            ['SP Defense']: stats.find((stat: PokemonStat) => stat.stat.name === 'special-defense').base_stat,
            ['Speed']: stats.find((stat: PokemonStat) => stat.stat.name === 'speed').base_stat,
            ['Weight']: weight,
            ['Total moves']: moves.length,
          })
        )

        await new Promise(resolve => setTimeout(resolve, 1000)) // add a delay to avoid flickering during rendering

        setPokemons((prev) => [...prev,...takeNeededInfo])
        setPokemonsCopy((prev) => [...prev,...takeNeededInfo])
        setCount(data.count)
        setIsLoading(false)
      }
    })
    .catch(err => toast.error(err.message))
  }

    getPokemons()

    return () => { shouldLog = true }

  }, [offset])


  useEffect(() => {
    setPokemons(pokemonsCopy)
    if(selectedPokemonType !== '') {
      setPokemons((prev) => prev.filter(pokemon => pokemon.types.includes(selectedPokemonType)))
    } else  {
      setPokemons(pokemonsCopy)
    }
  },[selectedPokemonType, pokemonsCopy])

  return {
    pokemons,
    pokemonsCopy,
    isDisableloadMoreButton,
    isLoading,
    selectedPokemonType,
    loadMore,
    setSelectedPokemonType,
  }
}