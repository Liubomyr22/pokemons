import * as React from 'react'
import { toast } from "react-toastify";

interface GetPokemonsTypesResponse {
  types: string[]
  isLoading: boolean
}

export function useGetPokemonsTypes(): GetPokemonsTypesResponse {
  const [types, setTypes] = React.useState<string[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

React.useEffect(() => {

  const getPokemonTypes = async () => {
    setIsLoading(true)

    const data = await fetch(`https://pokeapi.co/api/v2/type`)
    .then(res => res.json())
    .catch(err => toast.error(err.message))

    const getTypesArray = data.results.map((type:{name: string}) => type.name)

    setTypes(getTypesArray)
    setIsLoading(false)
  }

  getPokemonTypes()

},[])

  return {
    types,
    isLoading
  }
}